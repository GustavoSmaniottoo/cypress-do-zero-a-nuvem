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

    cy.clock()
    //pra entender o delay do type
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10) 

     cy.get('#firstName').invoke('val', 'Gustavo')
     cy.get('#lastName').invoke('val','Smaniotto')
     cy.get('#email').invoke('val','gustavosmaniotto@outlook.com')
     cy.get('#open-text-area').invoke('val',longText)
     cy.contains('button','Enviar').click()
     cy.get('.success').should('be.visible')
     cy.tick(3000)
     cy.get('.success').should('not.be.visible')
  
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',() => {

  cy.clock()
  cy.get('#firstName').invoke('val', 'Gustavo')
  cy.get('#lastName').invoke('val','Smaniotto')
  cy.get('#email').invoke('val','gustavosmaniotto@outlook.com')
  cy.get('#open-text-area')
  cy.contains('button','Enviar').click()
  cy.get('.error').should('be.visible')
  cy.tick(3000)
  cy.get('.error').should('not.be.visible')
  })

  it('verifica o numero de telefone', () => {

    cy.get('#phone').type('telefone').should('have.value','')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () =>{

    cy.clock()
    cy.get('#firstName').invoke('val', 'Gustavo')
    cy.get('#lastName').invoke('val','Smaniotto')
    cy.get('#email').invoke('val','gustavosmaniotto@outlook.com')
    cy.get('#open-text-area')
      .invoke('val','esse teste exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário')
    cy.get('#phone-checkbox')
      .check()
        .should('be.checked')
    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible')
    cy.tick(3000)
    cy.get('.error').should('not.be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () =>{

    cy.get('#firstName').invoke('val', 'Gustavo')
    cy.get('#lastName').invoke('val','Smaniotto')
    cy.get('#email').invoke('val','gustavosmaniotto@outlook.com')
    cy.get('#open-text-area').invoke('val','Esse campo deve ser limpo após os de cima')
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

  cy.clock()
  const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10) 
  const data = {
    firstName: 'Gustavo',
    lastName: 'Smaniotto de Oliveira',
    email: 'gustavosmaniotto@outlook.com',
    text: longText
  }
  cy.fillMandatoryFieldsAndSubmit(data)
  cy.get('.success').should('be.visible')  
  cy.tick(3000)
  cy.get('.success').should('not.be.visible')
  })


  it('seleciona um produto (YouTube) por seu texto', ()=>{

    cy.get('#product')
      .select('YouTube')
        .should('have.value','youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', ()=>{

    cy.get('select')
      .select('mentoria')
        .should('have.value','mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', ()=>{

    cy.get('select')
      .select(1)
        .should('have.value', 'blog')
  })

  it('marca o tipo de atendimento "Feedback"',()=>{

    cy.get('input[type="radio"][value="feedback"]')
      .check()
        .should('be.checked')

  })

  it('marca cada tipo de atendimento', ()=>{

    //uso o get para pegar todos os elementos do tipo radio
    cy.get('input[type="radio"]')
      .each(tipoDeservico => { //uso o each para iterar sobre cada elemento encontrado

        cy.wrap(tipoDeservico) //uso o wrap para envolver o elemento atual do loop e transformá-lo em um objeto Cypress 
          .check()
            .should('be.checked')
        //sem o wrap, o tipoDeservico seria um elemento DOM puro
      })

  })

  it('marca ambos checkboxes, depois desmarca o último',()=>{

    cy.get('input[type="checkbox"]')
      .each(itenscheckbox => {
        cy.wrap(itenscheckbox)
          .check()
            .should('be.checked')
      })
    
    cy.get('input[type="checkbox"]')
      .last()
        .uncheck()
          .should('not.be.checked')
  })

  it('seleciona um arquivo da pasta fixtures', () => {

    cy.get('input[id="file-upload"]')
      .selectFile('cypress/fixtures/example.json')
        .should(input => {
          expect(input[0].files[0].name).to.equal('example.json')

        })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias',() => {

   cy.fixture('example.json').as('arquivo')

   cy.get('input[id="file-upload"]')
    .selectFile('@arquivo')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop',() => {
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(input => {
          expect(input[0].files[0].name).to.equal('example.json')
        })
  })

  it('seleciona um arquivo da pasta fixtures',() => {
    
    cy.get('input[id="file-upload"]')
      .selectFile('cypress/fixtures/example.json')
        .should(input=>{
          expect(input[0].files[0].name).to.equal('example.json')
        })

  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {

    cy.contains('a', 'Política de Privacidade')
      .should('have.attr','href','privacy.html')
        .and('have.attr','target','_blank')

  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {

    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr','target')
      .click()
    
    cy.title().should('eq','Central de Atendimento ao Cliente TAT - Política de Privacidade')


  }) 

  it('exibe e oculta as mensagens de sucesso e erro usando .invoke()', () => {
  cy.get('.success')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Mensagem enviada com sucesso.')
    .invoke('hide')
    .should('not.be.visible')
  cy.get('.error')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Valide os campos obrigatórios!')
    .invoke('hide')
    .should('not.be.visible')
})

  it('preenche o campo da área de texto usando o comando invoke', ()=>{

  cy.get('#open-text-area')
    .invoke('val', 'um texto qualquer invocado pelo invoke')
    .should('have.value', 'um texto qualquer invocado pelo invoke')

})

  it('faz uma requisição HTTP',() => {

    cy.request('GET', 'https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
      .should(response => {
        expect(response.status).to.equal(200)
        expect(response.statusText).to.equal('OK')
        expect(response.body).to.include('CAC TAT')
      })

  })

  it('where is the cat?',() => {
    cy.contains('span','🐈')
      .invoke('show')
      .should('be.visible')

    cy.get('#title').invoke('text','CAT TAT 🐈')
  })

})

