/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('Accomplishments dashboard', () => {
  beforeEach(() => {
    cy.visit('/accomplishments')
  })

  it('should display inapp content error when text includes giraffe', () => {
    cy.get("[placeholder='Title'").type('This is my accomplishment')
    cy.get("[placeholder='My accomplishment...']").type('I pet a giraffe')
    cy.get("[type='checkbox']").check()
    cy.get('button').click()
    cy.contains('Your content is not appropriate').should('be.visible')
  })
})
