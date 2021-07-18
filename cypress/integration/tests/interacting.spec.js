/// <reference types='cypress' />

it('interacting', () =>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type('to do {enter}')

    cy.get('.toggle').click()

   // cy.contains('Clear completed').click()

    // normally Cypress has 4 sec delay by default
    //we can change the delay cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=3000'
    //but if we put 5000ms there.test will fail because it is more than default 4sec
    //to avoid that we can change the default 4sec dealy by addin the below 
    //cy.get('.new-todo',{timeout: 6000}).type('to do {enter}')
})