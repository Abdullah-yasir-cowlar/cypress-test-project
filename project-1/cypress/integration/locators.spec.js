/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('locators', () => {
  beforeEach(() => {
    cy.visit('/elements')
  })

  it('locating elements with get command', () => {
    // get all elemens by tag name
    cy.get('button')
  })
})
