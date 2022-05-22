let contador = 0;
let res = document.querySelctor('section#result');

function contar() {
    contador ++;
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark></p>`
}