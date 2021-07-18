export class todo{

    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addToDo(addText){
        cy.get('.new-todo').type(addText + '{enter}')
        
    }

    validatingToDoList(expectedText){
        cy.contains('Open the browser').should('have.text', expectedText)
        cy.get('.toggle').should('not.be.checked')
        
    }

    clickTickBox(testVaslue){
        
        cy.get(':nth-child('+ testVaslue +') > .view > .toggle').click()
        cy.get(':nth-child('+ testVaslue +') > .view > label').should('have.css','text-decoration-line','line-through')
    }
}