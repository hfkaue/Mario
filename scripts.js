
/*

Variáveis 

    um espaço de memória que você 
    reserva e pode guardar o que 
    quiser lá dentro 

    3 Jeitos de criar uma variável
        - var / jeito antigo - Não Use 
        - let-> Você pode alterar o valor 
        - const -> constante , não consegue ser mudado
*/

/* 

Funções 
    Um trecho de código que só é executado quando é chamado

*/

    const form = document.querySelector('.fale-conosco')
    const background = document.querySelector('.mascara-form')

    function showForm() {
        form.style.left = '50%'
        form.style.transform = 'translateX(-50%)'
        background.style.visibility = 'visible'
    }

    function hideForm() {
        form.style.left = '-330px'
        form.style.transform = 'translateX(0)'
        background.style.visibility = 'hidden'
    }

