Feature: Apenas um exemplo para o candidato

    Background: Acessar página MyStory
        Given que eu acesse a pagina MyStory

    Scenario Outline: #1 Chegar na tela de Endereco
        When eu busco por blusa <product>
        And clico para adicionar item
        And clico para verificar o carrinho
        And clico no checkout do carrinho
        And faco Login
        Then chego na etapa de Endereco

        Examples:
            | product  |
            | Blouse   |


    


    
   

    