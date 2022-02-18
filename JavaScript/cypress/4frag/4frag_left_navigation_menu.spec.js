
/* Проверка левого навигационного меню,
  что бы не заморачиваться алгоритм прост до безобразия,
  Находим в меню пунктик, если нашли, тыкаем по нему для перехода на страницу,
  на странице находим название пунктика. Если нашли то тест успешен. */
/// <reference types="Cypress" />

const { get } = require("http")

describe('Левый блок "Каталог"', () => {
    it('Игровые мыши', () => {
      cy.visit('https://4frag.ru/')
        .get('#side-navigation').contains('Игровые мыши').click()
        .get('[itemprop="name"]').contains('Игровые мыши')
    })

    it('Игровые клавиатуры', () => {
      cy.visit('https://4frag.ru/')
        .get('#side-navigation').contains('Игровые клавиатуры').click()
        .get('[itemprop="name"]').contains('Игровые клавиатуры')
    })

    it(' Игровые наушники', () => {
      cy.visit('https://4frag.ru/')
        .get('#side-navigation').contains('Игровые наушники').click()
        .get('[itemprop="name"]').contains('Игровые наушники')
    })

  })