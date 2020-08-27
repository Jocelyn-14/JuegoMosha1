var     text4 = "Puntuación: ",
text5 = "Nivel: ",
text6 = "Monedas: ",
titulo1 = "¡Conecta los círculos!",
redes1 = "¡Visita nuestras redes sociales!",
idioma2 = "Español";

function textoEng(){
    document.getElementById('titulo').innerHTML = titulo1;
    document.getElementById('score').innerHTML = text4 + resultado;
    document.getElementById('nivel').innerHTML = text5 + level;
    document.getElementById('monedas').innerHTML = text6 + monedas;
    document.getElementById('language').innerHTML = idioma2;
    document.getElementById('redes').innerHTML = redes1;
}