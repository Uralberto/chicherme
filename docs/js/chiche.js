

// Versión 2 : Ponle color a la corbata

const paths = document.querySelectorAll("path");
const boton = document.getElementById("dadContainer_boton")


function activarPathsOriginales() {
for (let i = 0; i <= paths.length - 1; i++) {
  paths[i].style.opacity = 1;
  paths[i].style.strokeWidth = .5;
}
}

function colorRandom() {
  let set = "0123456789ABCDEF";
  let codigo = [];
  for (let i = 0; i <= 5; i++) {
    let num = Math.floor(Math.random() * 16);
    codigo.push(set[num]);
  }
  let codigoColor = "#" + codigo.join("");
  return codigoColor;
}


let ciclo

function pintarPaths(){
  for(let i=1; i<=172; i++){
  let op = Math.random()
  paths[i].style.opacity= op
  let color = colorRandom()
  paths[130].style.fill = color;
  paths[131].style.fill = color;
}
}

function pintarPathsCiclos(){ 
ciclo = setInterval(pintarPaths, 50) 
}


function pararPintarPathsCiclos(){
  clearInterval(ciclo)
}

let control = 0

         
function togglePintarPathsCiclos() {
  if (control===0) {
    pintarPathsCiclos()
    control = 1  
    boton.innerHTML = '<i class="far fa-pause-circle"></i>'

  }
  else {
    pararPintarPathsCiclos()
    activarPathsOriginales()
    control = 0
    boton.innerHTML = '<i class="far fa-play-circle"></i>'
  }
}

// Animación de las abras
const contenedor = document.querySelector(".contenedor-principal")
const abras = document.querySelector('.abras')

console.log(abras)
function removerAbras(){
contenedor.removeChild(abras)
}

setTimeout(removerAbras, 5000)
