/*const quadrado = document.querySelector('.quadrado');
const imgNewyork = document.querySelector('img');

const mostrarQuadrado = function (){
    quadrado.classList.toggle('visivel');
}
*/

const hamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-menu-hamburguer');

const mostrar = function () {
    nav.classList.toggle('d-flex')
}

hamburguer.onclick = mostrar

/*quadrado.onmouserover = function () {
 quadrado.classList.toggle('visivel')
}

quadrado.onmouseenter = mostrarQuadrado;
quadrado.onmouseout = mostrarQuadrado;

imgNewyork.onmouseenter = destaqueImagem;
imgNewyork.onmouseout = destaqueImagem;
*/