function maior(){
    let num1 = Number(window.prompt('Digite o primeiro número'));
    let num2 = Number(window.prompt('Digite o segundo número'));
    let msg = document.querySelector('section#saida') 

    if(num1 > num2) {
        msg.innerHTML = `O ${num1} é <strong>MAIOR</strong> que ${num2}`
    } else {
        msg.innerHTML = `O ${num2} é <strong>MAIOR</strong> que ${num1}`
    }

}