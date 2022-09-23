describe('Login', () =>{
    beforeEach(()=>{
       cy.visit('/'); 
    })
    it('Login with incorect email', ()=>{
       cy.login('asdasd','asdasd');
       cy.fixture("login").then((login)=>{
        cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
       });
      
        
    })
})