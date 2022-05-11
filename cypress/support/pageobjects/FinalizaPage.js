import FinalizaElements from "../elements/FinalizaElements"
const finalizaElements = new FinalizaElements


class FinalizaPage{

    botaoLogar(){
        cy.get(finalizaElements.signin()).click();
        
    }
    
    telaMyAccount(){
        cy.url().should('eq','http://automationpractice.com/index.php?controller=my-account');
    }









}
export default FinalizaPage; 