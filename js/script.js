// Seleção de elementos

const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks]; // expalha todos os links em um array unico

const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;



// Funções

function smoothScroll(e){
    e.preventDefault(); //anula efeitos de eventos, como por exemplo recarregar a pagina.

    const href= this.getAttribute("href") // o this vai referenciar o link que estou clicando no momento.
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth",
    });

    setTimeout(()=>{
        if(menu.classList.contains("menu-active")){
            menu.classList.remove("menu-active");
        }
    },400);

}

function showSlides(){
    for(let i = 0; i<slides.length; i++){
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slideIndex++;

    if (slideIndex > slides.length){
        slideIndex=1;
    }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides,3000)


}

// Eventos

[menuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener('click', (e)=>{
        menu.classList.toggle("menu-active"); // o toggle vai alternar a classe sempre que clicar no botão, se tiver ativa remove e se não exister adiciona
    })
})

allLinks.forEach((link)=>{
    link.addEventListener("click", smoothScroll)
})

// Inicialização

showSlides();

