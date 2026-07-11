// ==========================
// LLUVIA DE ESTRELLAS
// ==========================

const estrellas = document.getElementById("estrellas");

function crearEstrella(){

    const estrella=document.createElement("div");

    estrella.className="estrella";

    estrella.innerHTML="★";

    estrella.style.left=Math.random()*window.innerWidth+"px";

    estrella.style.fontSize=(10+Math.random()*25)+"px";

    estrella.style.animationDuration=(3+Math.random()*5)+"s";

    estrellas.appendChild(estrella);

    setTimeout(()=>{

        estrella.remove();

    },8000);

}

setInterval(crearEstrella,180);

// ==========================
// PETALOS
// ==========================

const petalos=document.getElementById("petalos");

function crearPetalo(){

    const petalo=document.createElement("div");

    petalo.className="petalo";

    petalo.innerHTML="🌸";

    petalo.style.left=Math.random()*window.innerWidth+"px";

    petalo.style.fontSize=(18+Math.random()*18)+"px";

    petalo.style.animationDuration=(8+Math.random()*6)+"s";

    petalos.appendChild(petalo);

    setTimeout(()=>{

        petalo.remove();

    },14000);

}

setInterval(crearPetalo,900);

// ==========================
// CONTADOR
// ==========================

// CAMBIA ESTA FECHA
const fechaEvento=new Date("December 20, 2026 18:00:00").getTime();

function actualizarContador(){

    const ahora=new Date().getTime();

    const diferencia=fechaEvento-ahora;

    if(diferencia<=0){

        document.getElementById("dias").textContent="00";
        document.getElementById("horas").textContent="00";
        document.getElementById("minutos").textContent="00";
        document.getElementById("segundos").textContent="00";

        return;

    }

    const dias=Math.floor(diferencia/(1000*60*60*24));

    const horas=Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

    const minutos=Math.floor((diferencia%(1000*60*60))/(1000*60));

    const segundos=Math.floor((diferencia%(1000*60))/1000);

    document.getElementById("dias").textContent=dias;

    document.getElementById("horas").textContent=horas;

    document.getElementById("minutos").textContent=minutos;

    document.getElementById("segundos").textContent=segundos;

}

setInterval(actualizarContador,1000);

actualizarContador();

// ==========================
// BOTON MUSICA
// ==========================

const musica=document.getElementById("musica");

const boton=document.getElementById("musicaBtn");

let reproduciendo=false;

boton.addEventListener("click",()=>{

if(!reproduciendo){

musica.play();

boton.innerHTML="⏸️ Pausar música";

reproduciendo=true;

}else{

musica.pause();

boton.innerHTML="🎵 Reproducir música";

reproduciendo=false;

}

});

// ==========================
// CONFIRMAR
// ==========================

const confirmar=document.querySelector(".confirmar");

confirmar.addEventListener("click",()=>{

confirmar.innerHTML="💖 ¡Gracias por confirmar!";

confirmar.style.background="#43c465";

confirmar.style.boxShadow="0 0 30px #43c465";

});

// ==========================
// EFECTO AL MOVER EL MOUSE
// ==========================

document.addEventListener("mousemove",(e)=>{

const brillo=document.createElement("div");

brillo.innerHTML="✨";

brillo.style.position="fixed";

brillo.style.left=e.clientX+"px";

brillo.style.top=e.clientY+"px";

brillo.style.pointerEvents="none";

brillo.style.fontSize="18px";

brillo.style.zIndex="9999";

brillo.style.animation="desaparecer 1s forwards";

document.body.appendChild(brillo);

setTimeout(()=>{

brillo.remove();

},1000);

});

// ==========================
// ANIMACION EXTRA
// ==========================

const estilo=document.createElement("style");

estilo.innerHTML=`

@keyframes desaparecer{

0%{

opacity:1;

transform:scale(1);

}

100%{

opacity:0;

transform:translateY(-25px) scale(2);

}

}

`;

document.head.appendChild(estilo);