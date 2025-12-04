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

    //pra entender o delay do type
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10) 

     cy.get('#firstName').type('Gustavo')
     cy.get('#lastName').type('Smaniotto')
     cy.get('#email').type('gustavosmaniotto@outlook.com')
     cy.get('#open-text-area').type(longText,{delay: 0})
     cy.contains('button','Enviar').click()
     cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',() => {

  cy.get('#firstName').type('Gustavo')  
  cy.get('#lastName').type('Smaniotto', )
  cy.get('#email').type('gustavosmaniottooutlook.com')
  cy.get('#open-text-area')
  .type('esse teste verifica a mensagem de erro ao submeter o formulário com um email com formatação inválida',{delay: 0})
  cy.contains('button','Enviar').click()
  cy.get('.error').should('be.visible')
  })

  it('verifica o numero de telefone', () => {

    cy.get('#phone').type('telefone').should('have.value','')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () =>{

    cy.get('#firstName').type('Gustavo')     
    cy.get('#lastName').type('Smaniotto', )
    cy.get('#email').type('gustavosmaniotto@outlook.com')
    cy.get('#open-text-area')
    .type('esse teste exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', {delay: 0})
    cy.get('#phone-checkbox').check()
    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () =>{

    cy.get('#firstName').type('Gustavo')     
    cy.get('#lastName').type('Smaniotto')
    cy.get('#email').type('gustavosmaniotto@outlook.com')
    cy.get('#open-text-area').type('Esse campo deve ser limpo após os de cima',{delay: 0})
    cy.get('#firstName').clear().should('have.value','')    
    cy.get('#lastName').clear().should('have.value','')
    cy.get('#email').clear().should('have.value','')
    cy.get('#open-text-area').clear().should('have.value','')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',()=>{

    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado',()=>{

  const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10) 

  const data = {
    firstName: 'Gustavo',
    lastName: 'Smaniotto de Oliveira',
    email: 'gustavosmaniotto@outlook.com',
    text: longText
  }

  cy.fillMandatoryFieldsAndSubmit(data)
  cy.get('.success').should('be.visible')    
  })

  it('seleciona um produto (YouTube) por seu texto', ()=>{

    cy.get('select')
      .select('YouTube')
        .should('have.value','youtube')

  })

  it('seleciona um produto (Mentoria) por seu valor (value)', ()=>{

    cy.get('select')
      .select('Mentoria')
        .should('have.value','mentoria')

  })

  it.only('seleciona um produto (Blog) por seu índice', ()=>{

    cy.get('select')
      .select('Blog')
        .should('have.value', 'blog')

  })

})