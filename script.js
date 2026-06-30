// Revelar elementos ao rolar

const sections = document.querySelectorAll("section");

const reveal = () => {

sections.forEach(section => {

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 120){

section.style.opacity = "1";
section.style.transform = "translateY(0)";

}

});

}

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();
