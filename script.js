let menuVisible = false;
//funcion q oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible= false;
    }
    else{
        document.getElementById("nav").classList ="responsive";
        menuVisible= true;
    }
}

function seleccionar(){
    //oculto el menu una vez q selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible= false;
}

//animaciones en skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("postgresqlmysql");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("git");
        habilidades[6].classList.add("communication");
        habilidades[7].classList.add("selflearning");
        habilidades[8].classList.add("adaptability");
        habilidades[9].classList.add("persistence");
        habilidades[10].classList.add("problemsolving");
        habilidades[11].classList.add("teamwork");
        habilidades[12].classList.add("leadership");
        habilidades[13].classList.add("creativity");
        habilidades[14].classList.add("empathy");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll =function(){
    efectoHabilidades();
}