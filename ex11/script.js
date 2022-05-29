
// Minha resolução

// let nota1 = Number( window.prompt('Digite a primeira nota: '));
// let nota2 = Number(window.prompt('Digite a segunda nota: '));
// let nota3 = Number(window.prompt('Digite a terceira nota: '));
// let nota4 = Number(window.prompt('Digite a quarta nota: ')); 


// let total = 0;
// total = (nota1 + nota2 + nota3 + nota4) / 4;


// function media(){
//     document.getElementById('situacao').innerHTML = `A média do aluno foi de: ${total.toFixed(2)}` 
// }

//resolução do professor Guanabara

function media() {
    let nom = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2)/2 

    let msg 
    if (med >= 6) {
        msg = 'Meus parabéns!'
    } else {
        msg = 'Estude um pouco mais!'
    }

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${med.toFixed(2)}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>` 
    

}