var     text1 = "Score: ",
text2 = "Level: ",
text3 = "Coins: ",
titulo2 = "Conect the circles!",
idioma1 = "English",
redes2 = "Visit our social networks!";

function textoEng(){
    document.getElementById('titulo').innerHTML = titulo2;
    document.getElementById('score').innerHTML = text1 + resultado;
    document.getElementById('nivel').innerHTML = text2 + level;
    document.getElementById('monedas').innerHTML = text3 + monedas;
    document.getElementById('language').innerHTML = idioma1;
    document.getElementById('redes').innerHTML = redes2;
}