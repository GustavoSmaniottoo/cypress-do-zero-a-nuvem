describe('Central de Atendimento ao Cliente TAT', () => {

  it('verifica o título da aplicação', () => {

  cy.visit('src/index.html')
  //visito a pagina inicial de forma local, antes precisava 
  
  cy.title().should('eq','Central de Atendimento ao Cliente TAT')
  //verifico se o titulo da pagina é igual ao esperado (o 'eq' significa 'equal' = igual)





  })
})