import createElement from "../utils/createElement";

const Character = ({ textName = 'Not Found', src,  characterId = 'NotFound', characterDetails = 'Not Found', tagName = 'div' } = {}) => createElement(
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
                tagName: 'h2',
                classList: ['characterLinks'],
                text: textName,
                attributes: {
                  id: characterId,
                },
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