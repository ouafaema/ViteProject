import ListOfCharacter from './src/pages/ListOfCharacter'
import TabManager from './src/utils/TabManager'

const rootElement = document.querySelector('#app')
const searchElement = document.querySelector('#searchCharacter')


const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfCharacter,
    params: []
  }
})


document.querySelectorAll('[data-tabId]').forEach(element => {

  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })

  searchElement.addEventListener('input', () => {
     console.log(searchElement.value)
    tabManager.openTabById(element.getAttribute('data-tabId'), searchElement.value)
  })
})

tabManager.openTabById('page1')