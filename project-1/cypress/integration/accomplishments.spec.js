/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('Accomplishments dashboard', () => {
  beforeEach(() => {
    cy.visit('/accomplishments')
  })

  it('should show error if information is missing', () => {
    cy.getByTestId('accomplishment-title-input').type('Finished one of my apps')
    cy.getByTestId('accomplishment-input').type('Learn code app')

    cy.contains('Submit Accomplishment').click()
    cy.contains('Complete the items above to continue').should('be.visible')
  })

  it('should show validation message', () => {
    cy.getByTestId('accomplishment-title-input').type('Finished one of my apps')
    cy.getByTestId('accomplishment-input').type('Learn code app')
    cy.getByTestId('accomplishment-checkbox').type('Learn code app')

    cy.contains('Submit Accomplishment').click()
    cy.contains('This Accomplisment was Successfully Submitted').should(
      'be.visible'
    )
  })
})
