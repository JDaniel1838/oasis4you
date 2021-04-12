const d = document,
    btnPlay = d.getElementById("btnPlayMusic"),
    Sonido = new Audio();
Sonido.src = "../mp3/Tu_Eres_mi_Amigo.mp3";
Sonido.loop = true;

let Reproducir = false,
    rutaPlay = "img/play.svg",
    rutaPausa = "img/pause.svg";


function PlayBtn(target) {
    
    if (Reproducir===false) {
        Sonido.play();
        
        Reproducir = true;
        target.src = rutaPausa;
    } else {
        Sonido.pause();
        Reproducir = false;
        target.src = rutaPlay;
    }
}


d.addEventListener("click", (e) => {
    
    if (e.target === btnPlayMusic) {
        PlayBtn(e.target);
        
    }

});