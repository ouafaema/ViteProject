import createElement from "../utils/createElement";

const SingleCharacterModal = (character) => createElement(
  {
    tagName: 'div',
    attribute: {
      id: 'singleCharacter',
    },
    children: [
      {
        tagName: 'table',
        children: [
          {
            tagName: 'tr',
            text: character.name
          },
          {
            tagName: 'tr',
            children: [
              {
                tagName: 'img',
                attributes: {
                  src: character.image
                }
              }
            ]
          },
          {
            tagName: 'tr',
            text: `Espèce : ${character.species}`
          },
          {
            tagName: 'tr',
            text: `Sexe : ${character.gender}`
          },
          {
            tagName: 'tr',
            text: `Statut : ${character.status}`
          },
          {
            tagName: 'tr',
            text: `pays : ${character.origin.name}`
          }
        ]
      }
    ]
  }
)

export default SingleCharacterModal