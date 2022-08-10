/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('habit dashboar', () => {
  beforeEach(() => {
    cy.visit('/habits')
  })

  it('should display model when add button is clicked', () => {
    cy.get('#habit-add-btn').click()
    cy.contains('Add a new habit').should('be.visible')
  })

  it('should display habit card when new habit is added', () => {
    cy.get('#habit-add-btn').click()
    cy.get('input[placeholder="Habit"]').type('Drink water in morning')
    cy.contains('Save Changes').click()
    cy.contains('Drink water in morning')
      .should('be.visible')
      .should('have.class', 'HabitCard__habit-container')
  })
})
