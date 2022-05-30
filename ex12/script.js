// Minha resol~ção
// function teste(){
//     let num = window.prompt('digite o número que deseja: ');
//     let msg = document.querySelector('#result')
//     if( num % 2 == 0){
//         msg.innerHTML = `Você digitou ${num}, ${num} é um número par`
//     } else {
//         msg.innerHTML = `Você digitou ${num}, ${num} é um número ímpar`
//     }
// }

//Resolução professor Guanabara 

function teste(){
    let num = Number(window.prompt('Digite um número: '));
    let tipo
    if(num % 2 == 0){
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>ÍMPAR</strong>'
    }

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`
}