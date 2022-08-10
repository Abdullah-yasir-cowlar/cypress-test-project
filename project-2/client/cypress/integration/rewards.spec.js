/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('Rewards dashboard', () => {
  beforeEach(() => {
    cy.visit('/rewards')
  })

  it('should display a list of rewards', () => {
    cy.get('ul')
      .should('contain', '5000 points for getting a new job')
      .and('contain', '500 points for practicing basketball')
  })
})
