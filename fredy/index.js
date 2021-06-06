// hover de la imagen crea tu gifo por cambio de imagen

let creatugifo = document.getElementById("creatugifo");
let imagenHover = new Image();
imagenHover.src = "../miguel/assets/CTA-crear-gifo-hover.svg";
let imagenNormal = creatugifo.firstElementChild;
let imagen3= new Image ();
imagen3.src = "../miguel/assets/CTA-crear-gifo-active.svg"

let cambio = () => creatugifo.replaceChild(imagenHover, imagenNormal);
let cambio2 = () => creatugifo.replaceChild(imagenNormal, imagenHover);

//let cambio3 = ()=> creatugifo.replaceChild(imagen3,imagenhover)

creatugifo.addEventListener("mouseenter", cambio);
creatugifo.addEventListener("mouseleave", cambio2);

//creatugifo.addEventListener("click", cambio3)  mousedown??


// modo nocturno

let modonocturno = () => {
   body = document.getElementById("body");
  body.style.background = "#222326";

  footer = document.getElementById("footer")
  footer.style.background = "#222326";
  header = document.getElementById("header")
  header.style.background = "#222326";
  console.log(header)
diurno.innerText = 'MODO DIURNO '
   lis = document.getElementsByTagName("li")
  for (let i = 0; i < lis.length; i++) {
    const li = lis[i];
    li.style.color = 'white';  
  }
   ps = document.getElementsByTagName("p")
  for (let i = 0; i < ps.length; i++) {
    const p = ps[i];
    p.style.color = 'white';
  }
  titulos = document.getElementsByClassName("titulo")
  for (let i = 0; i < titulos.length; i++) {
    const titulo = titulos[i];
    titulo.style.color = "white"
 
  
  }
  nocturno.removeEventListener("click",modonocturno)
  nocturno.addEventListener("click", mododiurno);
  final = document.getElementById("final")
  final.style.background = "#222326";
}
 

let mododiurno = ()=>{
  nocturno.addEventListener("click", mododiurno);
  body = document.getElementById("body");
 body.style.background = "white";
 
  footer = document.getElementById("footer");
 footer.style.background = "white";
  header = document.getElementById("header");
 header.style.background = "white";
  diurno.innerHTML = 'MODO NOCTURNO '
  lis = document.getElementsByTagName("li")
 for (let i = 0; i < lis.length; i++) {
   const li = lis[i];
   li.style.color = '#572EE5';  
 }
  ps = document.getElementsByTagName("p")
 for (let i = 0; i < ps.length; i++) {
   const p = ps[i];
   p.style.color = 'black';
 }
  titulos = document.getElementsByClassName("titulo")
 for (let i = 0; i < titulos.length; i++) {
   const titulo = titulos[i];
   titulo.style.color = "#572EE5"
 }
 nocturno.removeEventListener("click",mododiurno)
 nocturno.addEventListener("click", modonocturno);
 final = document.getElementById("final")
  final.style.background = "white";
  }

  let nocturno = document.getElementById("modo_nocturno");
  let diurno = document.getElementById("modo_diurno")
 
  nocturno.addEventListener("click", modonocturno);
  

  
  // let otro = document.getElementById("buscador")

 // let padre = document.getElementById("ul")
  // let newa = document.createElement("a")
  // newa.innerHTML = ' <li id="diurno" >MODO DIURNO</li>'
  //  //newa.setAttribute("id", "diurno")
  // padre.appendChild(newa)
  // padre.replaceChild(newa,nocturno)
  
// }
// setTimeout(function(){ 
//    diurno = document.getElementById("diurno")
//   diurno.addEventListener("click", mododiurno)
//  }, 1000);
  
  // // let newli = document.getElementById("diurno")
  // //newli.addEventListener("click", mododiurno)
  // //console.log(diurno)
// // setTimeout(() => {
// //   resolve(1)
// // }, 2000)


// // menu hamborguesaaaaaaa

  let abrir = document.getElementById("open")
  let cerrar= new Image ();
cerrar.src = "./imagenes/close.svg"
cerrar.setAttribute("id","close")
   let header = document.getElementById("header")
  


let openmenu = ()=>  {
  if (window.matchMedia("(max-width: 600px)").matches = true)
   {
  ul = document.getElementById("ul")
  ul.style.display = "inline-block";  
  
  header.replaceChild(cerrar, abrir)
  abrir.removeEventListener("click",openmenu)
  cerrar.addEventListener("click", closemenu)}
else{
  console.log(ul)
}
}

let closemenu = ()=> {
  ul = document.getElementById("ul")
  ul.style.display = "none";
  header.replaceChild( abrir, cerrar)
  cerrar.removeEventListener("click",closemenu)
  abrir.addEventListener("click", openmenu)

}

  abrir.addEventListener("click", openmenu)
  cerrar.addEventListener("click", closemenu)
 
// conectarse a la  API

//https://api.giphy.com/v1/gifs/search?api_key=9q0Co8y92A1puokhTuMaeKeO3Y5bsveq&q=perro
//https://api.giphy.com/v1/gifs/search?api_key=9q0Co8y92A1puokhTuMaeKeO3Y5bsveq&limit=12&q=perro

let buscar = async () => {
  contenedor = document.getElementById("div2")
  contenedor.style.display = "block"
  buscador = input.value; // lo que busca el usuario
  resultados.innerText = buscador;
  try {
    const res = await fetch(
      `${giphysearchurl}${api_key}&lang=es&offset=99&rating=pg-13,r&limit=12&q=${buscador}`
    ) // pendiente sacar el &q a constante busqueda del buscador shaaaaa
      .then((res) => res.json())
      .then((responses) => {
        responses.data.forEach(function (item) {
          if (links.indexOf(item.images.downsized_medium.url) == -1) {
            links.push(item.images.downsized_medium.url);
          }
        });
      });
  } catch (error) {
    console.error(error);
  }

  for (let i = 0; i < espacios2.length; i++) {
    espacios[i].setAttribute("src", links[i]);
  }
};

let espacios = document.getElementsByClassName("res");
let espacios2 = Array.from(espacios);

let links = [];
let resultados = document.getElementById("resultados");
const api_key = "?api_key=9q0Co8y92A1puokhTuMaeKeO3Y5bsveq";
const giphysearchurl = "http://api.giphy.com/v1/gifs/search";
let input = document.getElementById("buscador");
let imagen_buscar = document.getElementById("imagen_buscar");
console.log(imagen_buscar)
imagen_buscar.addEventListener("click", buscar);
input.addEventListener("keyup", function (e){
  var keycode = e.keyCode || e.which; 
  if (keycode == 13) {
    buscar();
  }
})

