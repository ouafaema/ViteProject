import ListCharacter from "../components/ListCharacter"
import SingleCharacterModal from "../components/SingleCharacterModal"
import Api from "../utils/Api"

const ListOfCharacter = async (searchCharacter, Param) => {
  
  if (searchCharacter) {
    searchCharacter = `?name=${searchCharacter}`
  }

  const rmApi = new Api(`https://rickandmortyapi.com/api/character/`)

  const res = await rmApi.getApi(searchCharacter)

  if (res) {
    const data = res.map((element) => ({
      textName: `${element.name}`,
      src: element.image,
      characterId: `character${element.id}`
    }))

    const element = ListCharacter(data)

   
    const allCharacterCard = element.querySelectorAll('.characterLinks')
    allCharacterCard.forEach((characterCard) => {
      characterCard.addEventListener('click', async function(e) {
        const app = document.querySelector('#app')
        app.innerHTML = ''
        const singleRes = await rmApi.getApi(e.target.id.slice(9))
        app.appendChild(SingleCharacterModal(singleRes))
      })
    })

    return element

  } else {
    return Error;
  }
}

export default ListOfCharacter