import ExemplePage from "../pageobjects/ExemplePage";
const exemplePage = new ExemplePage


Given ('que eu acesse a pagina MyStory' , () => {
    exemplePage.acessarpagina();
})

When('eu busco por blusa {}', (product) =>{
    exemplePage.selecionarBlouse(product);
})

And ('clico para adicionar item', ()=>{
    exemplePage.adicionaProdutos();

})
        
And ('clico para verificar o carrinho',()=>{
    exemplePage.verificaCarrinho();

})


And ('clico no checkout do carrinho',()=>{
    exemplePage.clicaCheckoutCarrinho();

})

And ('faco Login',()=>{
    exemplePage.login();
})

Then ('chego na etapa de Endereco', ()=>{
    exemplePage.etapaEndereco();
})












