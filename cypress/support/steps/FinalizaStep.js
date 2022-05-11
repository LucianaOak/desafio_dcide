import ExemplePage from "../pageobjects/ExemplePage";
import FinalizaPage from "../pageobjects/FinalizaPage";
const finalizaPage = new FinalizaPage
const exemplePage = new ExemplePage


And('clico em sign in',()=>{
    finalizaPage.botaoLogar();
})

When ('esteja na logado',()=>{
    exemplePage.login();

})
    
Then ('chego na Tela My Account',()=>{
    finalizaPage.telaMyAccount();

})

