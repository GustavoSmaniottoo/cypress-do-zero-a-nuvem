describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('src/index.html')
    //visito a pagina inicial de forma local, antes precisava 
  })

  it('verifica o título da aplicação', () => {
  
  cy.title().should('eq','Central de Atendimento ao Cliente TAT')
  //verifico se o titulo da pagina é igual ao esperado (o 'eq' significa 'equal' = igual)

  })

  it('preenche os dados obrigatórios do formulario e clica em enviar', () => {

     cy.get('#firstName').type('Gustavo').should('have.value','Gustavo')
     
     cy.get('#lastName').type('Smaniotto').should('have.value','Smaniotto')

     cy.get('#email').type('gustavosmaniotto@outlook.com').should('have.value','gustavosmaniotto@outlook.com')

     cy.get('#open-text-area').type('Primeira tentativa').should('have.value','Primeira tentativa')

     cy.get('button[type="submit"]').click()

     cy.get('.success').should('be.visible')
  })

})