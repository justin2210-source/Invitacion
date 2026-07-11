const contenedor = document.getElementById("brillos");

function crearBrillo(){

    const brillo=document.createElement("div");

    brillo.className="brillo";

    const simbolos=[
        "✨",
        "✦",
        "✧",
        "❇",
        "⭐"
    ];

    brillo.innerHTML=simbolos[Math.floor(Math.random()*simbolos.length)];

    brillo.style.left=Math.random()*window.innerWidth+"px";

    brillo.style.top=Math.random()*window.innerHeight+"px";

    brillo.style.fontSize=(12+Math.random()*30)+"px";

    brillo.style.animationDuration=(1+Math.random()*2)+"s";

    contenedor.appendChild(brillo);

    setTimeout(()=>{

        brillo.remove();

    },2500);

}

setInterval(crearBrillo,140);

// efecto al mover el mouse

document.addEventListener("mousemove",(e)=>{

    const brillo=document.createElement("div");

    brillo.className="brillo";

    brillo.innerHTML="✨";

    brillo.style.left=e.clientX+"px";

    brillo.style.top=e.clientY+"px";

    brillo.style.fontSize="18px";

    contenedor.appendChild(brillo);

    setTimeout(()=>{

        brillo.remove();

    },1200);

});