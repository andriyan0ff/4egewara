
/* Проверка функционала оплаты мобильной связи банковской картой
   Данные карты тестовые, не являются настоящими */
/// <reference types="Cypress" />

const { get } = require("http")

describe('MTS оплата связи ', () => {
    it('Оплата картой', () => {
      cy.visit('https://paytocard.ru/templates/payment.html')
        .get('#user_phone').type('9820001221')
        .get('.b-input__input[name="user_summ"]').clear().type('10')
        .get('#user_card').type('4111111111100031')
        .get('.b-input__input[name="user_month"]').type('12')
        .get('.b-input__input.expiry-group[name="user_year"]').type('23')
        .get('.b-input__input[name="user_name"]').type('TEST CARD')
        .get('input[type="password"]').type('123')
        .get('button[name="btn_submit"]').click()
      })

    })