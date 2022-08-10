/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('locators', () => {
  beforeEach(() => {
    cy.visit('/elements')
  })

  it('should locate elements with get command', () => {
    // get all elemens by tag name
    cy.get('button')
    cy.get('h2')
    cy.get('h3')

    // get elements by classname
    cy.get('.btn-with-class')
    // get element by id
    cy.get('#btn-with-id')

    // get elements by attr selector, (with exact value)
    // i.e. in this example element must have following classes, nothing less nothing more
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']") // by class attr
    cy.get("[type='submit']")
    cy.get("[id='btn-with-id']") // by id attr

    cy.get("[data-cy='btn-id-1'") // by custom attr

    // get all elemens with tagname AND classname
    cy.get('button.Elements-btn')
    // get all elements with tagname, classname and id
    cy.get('button.Elements-btn#btn-with-id')
    //get all elements with tagname, class and type attr
    cy.get("button.Elements-btn[type='submit']")
  })
})
