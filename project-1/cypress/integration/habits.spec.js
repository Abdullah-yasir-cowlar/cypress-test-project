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

  it('should toggle icon when habit card is clicked', () => {
    cy.get('#habit-add-btn').click()
    cy.get('input[placeholder="Habit"]').type('Drink water in morning')
    cy.contains('Save Changes').click()

    cy.get('[src="/static/media/close.fa7e5ead.svg"]').should('be.visible')
    cy.get('.HabitCard__habit-container').click()
    cy.get('[src="/static/media/check.9e8832df.svg"]').should('be.visible')
  })

  it('should not submit empty form', () => {
    cy.get('#habit-add-btn').click()
    cy.contains('Save Changes').click()
    cy.contains('Add a new habit').should('be.visible')
  })

  it('should hide model when cancel btn is clicked without creating new habit', () => {
    cy.get('#habit-add-btn').click()
    cy.get('input[placeholder="Habit"]').type('Drink water in morning')
    cy.contains('Close').click()
    cy.get('.HabitCard').should('not.have.length')
  })
})
