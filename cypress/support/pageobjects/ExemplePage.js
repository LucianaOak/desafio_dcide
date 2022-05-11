import ExempleElements from "../elements/ExempleElements"
const exempleElements = new ExempleElements


const url = Cypress.config('baseUrl')
class ExemplePage{

    acessarpagina() {    
        cy.intercept(
            'GET',
            '**/all.js?hash=**'
        ).as('loadpage')
        cy.visit(url).url().should('be.equal', 'http://automationpractice.com/index.php')
        cy.wait('@loadpage')
    }

    selecionarBlouse(product){
        cy.get(exempleElements.inputSearch()).type(product);
        cy.get(exempleElements.clicaLupa()).click();
    }

    adicionaProdutos(){
        cy.get(exempleElements.botaoAdicionaProdutos()).click();
    }

    verificaCarrinho(){
        cy.get(exempleElements.botaoCarrinho()).click();
        cy.get(exempleElements.adicionaMaisUm()).click();
    }

    clicaCheckoutCarrinho(){
        cy.get(exempleElements.botaoCheckout()).click();
    }

    login(){
        cy.get(exempleElements.email()).type('teste@teste.com');
        cy.get(exempleElements.senha()).type('123456');
        cy.get(exempleElements.submitLogin()).click();
    }
    
    etapaEndereco(){
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=order&step=1&multi-shipping=0')
    }
    

       
    

   

} export default ExemplePage;  


