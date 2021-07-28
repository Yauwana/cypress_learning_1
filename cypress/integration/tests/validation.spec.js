


it('interacting', () =>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type('to do{enter}')
    cy.get('label').should('have.text', 'to do')
    cy.get('.toggle').should('not.be.checked')

    cy.get('.toggle').click()
    cy.get('label').should('have.css','text-decoration-line','line-through')//got these CSS values using the DOM in chrome
    //test 3
   //test 4

   cy.contains('Clear completed').click()
   

    
})