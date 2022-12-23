import createElement from "../utils/createElement";

const Character = ({ textName = 'Denis', src,  characterId = '', characterDetails = '#', tagName = 'div' } = {}) => createElement(
  {
    tagName,
    classList: ['characterCard'],
    children: [
      {
        tagName: 'table',
        children: [
          {
            tagName: 'tr',
            children: [
              {
                tagName: 'a',
                classList: ['characterLinks'],
                attributes: {
                  id: characterId,
                  href: characterDetails,
                },
                children: [
                  {
                    tagName: 'h2',
                    text: textName
                  }
                ]
              }
            ]
          },
          {
            tagName: 'tr',
            children: [
              {
                tagName: 'img',
                attributes: {
                  src: src || 'https://via.placeholder.com/150'
                }
              }
            ]
            
          }
        ]
      },
    ]
  }
)

export default Character

