Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data =>{
     cy.get('#firstName').invoke('val', data.firstName)
     cy.get('#lastName').invoke('val', data.lastName)
     cy.get('#email').invoke('val',data.email)
     cy.get('#open-text-area').invoke('val',data.text,{delay: 0})
     cy.contains('button','Enviar').click()
})