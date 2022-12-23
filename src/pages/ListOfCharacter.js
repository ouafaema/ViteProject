import ListCharacter from "../components/ListCharacter"
import { getCharacterFromApi } from "../utils/Api"

const ListOfCharacter = async (searchCharacter, Param) => {
  if (searchCharacter) {
    searchCharacter = `?name=${searchCharacter}`
  }
  const res = await getCharacterFromApi(searchCharacter)

  if (res) {
    const data = res.map((element) => ({
      textName: `${element.name}`,
      src: element.image,
      characterId: `character${element.id}`
    }))



    console.log(data[0].characterId)

    const element = ListCharacter(data)

    const characterCard = element.querySelector('div')

    characterCard.addEventListener('click', function(e) {
      
      if (e.target.classList.contains('characterCard')) {
        console.log(e.target)
      }

    })

    return element

  } else {
    return window.alert("Votre personnage n'existe pas !");
  }
}

export default ListOfCharacter