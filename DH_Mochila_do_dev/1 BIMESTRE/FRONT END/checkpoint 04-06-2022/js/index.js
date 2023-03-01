let show = true; 

const menu__section__filmes = document.querySelector(".menu__section__filmes") 
const menu__hamburguer = document.querySelector(".menu__hamburguer"); 

menu__hamburguer.addEventListener("click", () => { 
  document.body.style.overflow = show ? "hidden" : "initial";
  menu__section__filmes.classList.toggle("show", show);     
  show = !show;       
});  
