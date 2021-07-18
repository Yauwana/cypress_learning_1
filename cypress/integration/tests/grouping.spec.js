/// <reference types='cypress' />

import { todo } from "../../todo-functions/todoPage"


describe('grouping',()=>{

    const todo1 = new todo()

    beforeEach(()=> {//'before each' use to reduce the repetitive actions.actions in side this will execute before every test in the 'describe' 

        todo1.navigate() // cy.visit('http://todomvc-app-for-testing.surge.sh/')
        todo1.addToDo('Open the browser')
        todo1.addToDo('go to the site')
        todo1.addToDo('Learn Cypress')
    })

     

    it('creating ToDo list', () =>{//'only' is used to run only the first test
        
       // cy.contains('Open the browser').should('have.text', 'Open the browser')
       todo1.validatingToDoList('Open the browser')
      
    
        
    })
    
    it('click tickbox',() =>{
        todo1.clickTickBox(2)
        
    })
    
    it('Clck completed button',() =>{
        cy.contains('Completed').click
       // cy.contains('Clear completed').click()
    })
})

