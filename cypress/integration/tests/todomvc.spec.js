/// <reference types='cypress' />

it('open todo', () =>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
})
it('not open todo', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/sadasd')
})