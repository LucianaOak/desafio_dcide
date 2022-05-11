class ExempleElements{

inputSearch = () => {
    return '[id="search_query_top"]'
}

clicaLupa = ()=>{
    return 'button.btn.btn-default.button-search';
}

botaoAdicionaProdutos = ()=>{
    return'.ajax_add_to_cart_button > span';
}

botaoCarrinho = ()=>{
    return'#layer_cart div.button-container a';

}

adicionaMaisUm = ()=>{
    return '#cart_quantity_up_2_7_0_0 > span';

}

email = ()=>{
    return '#email';
}

senha = ()=>{
    return '#passwd';
}

submitLogin = ()=>{
    return '#SubmitLogin > span';
}

botaoCheckout = ()=>{
    return '.cart_navigation > .button > span';
}

} 

export default ExempleElements;

