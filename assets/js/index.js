// const c = (el)=>document.querySelector(el);
// const inicio = c('#bin-titulo')
// const sobre = c('#bin-sobre')
// const resumo = c('#bin-resumo')
// const portifolio = c('#bin-portifolio')
// const contato = c('#bin-contato')
// const tituloPagina = c('#bin-tit')


// if( tituloPagina.value == 'Fábio Araújo | Developer'){
//     inicio.style
// }



// Add active class to the current button (highlight it)
var menu = document.getElementById("bin-menu");
var btns = menu.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function() {

  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";

  });
}