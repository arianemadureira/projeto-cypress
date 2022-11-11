describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')

      //Simulando resposta de usuário válido.
    
        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
         statusCode: 200,
         body: '{userName: "am", password: "12345678"}'
       } ).as('stubPostSuccess')
    })


    it('fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');   
    })
    it('fazer login de usuario valido com stub', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@stubPostSuccess',  {timeout: 15000});
    })


    it('fazer login de usuario invalido', () => {
        cy.login('jacqueline', '1234')
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password') 
        })     
    })

})