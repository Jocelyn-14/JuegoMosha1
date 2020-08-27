var canvas,
    ctx,
    fps = 60,
    c1,
    c2,
    c3,
    wX = screen.width / 3 - 5,
    wY = screen.height / 9,
    anchoC = wX / 5,
    altoC = wX / 5,
    altoT = 5,
    anchoT = 5,
    resultado = 0,
    punto = 0,
    level = 1,
    Rx = 0,
    Ry = 0,
    cX = 10,
    cY = 10,
    z = 20,
    cont = 0,
    suma = 0,
    turno = false,
    x1,
    y1,
    x2,
    y2,
    fin = false,
    oport = 0,
    trad = false,
    monedas = 0;

var text1 = "Score: ",
    text2 = "Level: ",
    text3 = "Coins: ",
    text4 = "Puntuación: ",
    text5 = "Nivel: ",
    text6 = "Monedas: ",
    titulo1 = "¡Conecta los círculos!",
    titulo2 = "Conect the circles!",
    redes1 = "¡Visita nuestras redes sociales!",
    redes2 = "Visit our social networks!",
    idioma1 = "Language: English",
    idioma2 = "Idioma: Español";


var tablero = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

function onoff() {
    currentvalue = document.getElementById('onoff').value;
    if (currentvalue == "Off") {
        document.getElementById("onoff").value = "On";

        trad = true;
    } else {
        document.getElementById("onoff").value = "Off";

        trad = false;
    }
}

function inicio() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    c1 = new Image();
    c2 = new Image();
    c3 = new Image();
    c4 = new Image();
    c5 = new Image();
    c6 = new Image();
    c7 = new Image();
    c8 = new Image();
    c9 = new Image();
    c10 = new Image();

    c11 = new Image();
    c12 = new Image();
    c13 = new Image();
    c14 = new Image();
    c15 = new Image();
    c16 = new Image();
    c17 = new Image();
    c18 = new Image();
    c19 = new Image();
    c20 = new Image();

    c1.src = 'img/C1.png';
    c2.src = 'img/C2.png';
    c3.src = 'img/C3.png';
    c4.src = 'img/C4.png';
    c5.src = 'img/C5.png';
    c6.src = 'img/C6.png';
    c7.src = 'img/C7.png';
    c8.src = 'img/C8.png';
    c9.src = 'img/C9.png';
    c10.src = 'img/C10.png';

    c11.src = 'img/C1-2.png';
    c12.src = 'img/C2-2.png';
    c13.src = 'img/C3-2.png';
    c14.src = 'img/C4-2.png';
    c15.src = 'img/C5-2.png';
    c16.src = 'img/C6-2.png';
    c17.src = 'img/C7-2.png';
    c18.src = 'img/C8-2.png';
    c19.src = 'img/C9-2.png';
    c20.src = 'img/C10-2.png';

    canvas.addEventListener('mousedown', clicRaton, false);
    canvas.addEventListener('mouseup', sueltaRaton, false);
    canvas.addEventListener('mousemove', posicionRaton, false);

    document.getElementById('titulo').innerHTML = titulo2;
    document.getElementById('score').innerHTML = text1 + resultado;
    document.getElementById('nivel').innerHTML = text2 + level;
    document.getElementById('monedas').innerHTML = text3 + monedas;
    document.getElementById('language').innerHTML = idioma1;
    document.getElementById('redes').innerHTML = redes2;

    nuevo();

    setInterval(function () {
        principal();
    }, 1000 / fps);
}

function nuevo() {
    var px = 0;
    var py = 0;
    var valor = 0;
    var nuevo = 0;

    for (px = 0; px <= 4; px++) {
        for (py = 0; py <= 4; py++) {
            nuevo = Math.floor(Math.random() * 3);
            valor = nuevo;
            tablero[py][px] = valor;
        }
    }
}

function posicionRaton(a) {
    Rx = a.pageX;
    Ry = a.pageY;
    var px = parseInt((Rx - wX) / anchoC);
    var py = parseInt((Ry - wY) / altoC);
    unir(Rx, Ry);
}

function clicRaton(a) {
    Rx = a.pageX;
    Ry = a.pageY;
    var px = parseInt((Rx - wX) / anchoC);
    var py = parseInt((Ry - wY) / altoC);
    x1 = px;
    y1 = py;
    turno = true;
    pieza(Rx, Ry);
    seleccionar(Rx, Ry);

}

function sueltaRaton(a) {
    turno = false;
    sumar();
    pieza(Rx, Ry);
    interactuar();
    z = 20;
    cont = 0;
}

function unir(x, y) {
    var px = parseInt((x - wX) / anchoC);
    var py = parseInt((y - wY) / altoC);
    var valor = tablero[py][px];
    var vEx = 0;
    var x0 = 0;
    var y0 = 0;

    if (turno == true && z == valor) {
        valor = tablero[py][px];
        if (((x1 + 1) == px && y1 == py) || ((x1 - 1) == px && y1 == py) || ((y1 + 1) == py && x1 == px) || ((y1 - 1) == py && x1 == px) || (x1 == px && y1 == py)) {
            //Selección
            if (valor == 0) {
                valor = 10;
                x0 = x1;
                y0 = y1;
                x1 = px;
                y1 = py;
                cont++;
            } else if (valor == 1) {
                valor = 11;
                x0 = x1;
                y0 = y1;
                x1 = px;
                y1 = py;
                cont++;
            } else if (valor == 2) {
                valor = 12;
                x0 = x1;
                y0 = y1;
                x1 = px;
                y1 = py;
                cont++;
            } else if (valor == 3) {
                valor = 13;
                x0 = x1;
                y0 = y1;
                x1 = px;
                y1 = py;
                cont++;
            } else if (valor == 4) {
                valor = 14;
                x0 = x1;
                y0 = y1;
                x1 = px;
                y1 = py;
                cont++;
            } else if (valor == 5) {
                valor = 15;
                x0 = x1;
                y0 = y1;
                x1 = px;
                y1 = py;
                cont++;
            } else if (valor == 6) {
                valor = 16;
                x0 = x1;
                y0 = y1;
                x1 = px;
                y1 = py;
                cont++;
            } else if (valor == 7) {
                valor = 17;
                x0 = x1;
                y0 = y1;
                x1 = px;
                y1 = py;
                cont++;
            } else if (valor == 8) {
                valor = 18;
                x0 = x1;
                y0 = y1;
                x1 = px;
                y1 = py;
                cont++;
            } else if (valor == 9) {
                valor = 19;
                x0 = x1;
                y0 = y1;
                x1 = px;
                y1 = py;
                cont++;
            }

            tablero[py][px] = valor;

        }
    }
    //Deselección
    if (((x1 + 1) == px && y1 == py) || ((x1 - 1) == px && y1 == py) || ((y1 + 1) == py && x1 == px) || ((y1 - 1) == py && x1 == px) || (x1 == px && y1 == py)) {
        if (valor == 10) {
            if ((tablero[y1][x1] == 10 && x1 != px) || (tablero[y1][x1] == 10 && y1 != py)) {
                vEx = 0;
                tablero[y1][x1] = vEx;
                x1 = px;
                y1 = py;
                cont--;
            }
        } else if (valor == 11) {
            if ((tablero[y1][x1] == 11 && x1 != px) || (tablero[y1][x1] == 11 && y1 != py)) {
                vEx = 1;
                tablero[y1][x1] = vEx;
                x1 = px;
                y1 = py;
                cont--;
            }
        } else if (valor == 12) {
            if ((tablero[y1][x1] == 12 && x1 != px) || (tablero[y1][x1] == 12 && y1 != py)) {
                vEx = 2;
                tablero[y1][x1] = vEx;
                x1 = px;
                y1 = py;
                cont--;
            }
        } else if (valor == 13) {
            if ((tablero[y1][x1] == 13 && x1 != px) || (tablero[y1][x1] == 13 && y1 != py)) {
                vEx = 3;
                tablero[y1][x1] = vEx;
                x1 = px;
                y1 = py;
                cont--;
            }
        } else if (valor == 14) {
            if ((tablero[y1][x1] == 14 && x1 != px) || (tablero[y1][x1] == 14 && y1 != py)) {
                vEx = 4;
                tablero[y1][x1] = vEx;
                x1 = px;
                y1 = py;
                cont--;
            }
        } else if (valor == 15) {
            if ((tablero[y1][x1] == 15 && x1 != px) || (tablero[y1][x1] == 15 && y1 != py)) {
                vEx = 5;
                tablero[y1][x1] = vEx;
                x1 = px;
                y1 = py;
                cont--;
            }
        } else if (valor == 16) {
            if ((tablero[y1][x1] == 16 && x1 != px) || (tablero[y1][x1] == 16 && y1 != py)) {
                vEx = 6;
                tablero[y1][x1] = vEx;
                x1 = px;
                y1 = py;
                cont--;
            }
        } else if (valor == 17) {
            if ((tablero[y1][x1] == 17 && x1 != px) || (tablero[y1][x1] == 17 && y1 != py)) {
                vEx = 7;
                tablero[y1][x1] = vEx;
                x1 = px;
                y1 = py;
                cont--;
            }
        } else if (valor == 18) {
            if ((tablero[y1][x1] == 18 && x1 != px) || (tablero[y1][x1] == 18 && y1 != py)) {
                vEx = 8;
                tablero[y1][x1] = vEx;
                x1 = px;
                y1 = py;
                cont--;
            }
        } else if (valor == 19) {
            if ((tablero[y1][x1] == 19 && x1 != px) || (tablero[y1][x1] == 19 && y1 != py)) {
                vEx = 9;
                tablero[y1][x1] = vEx;
                x1 = px;
                y1 = py;
                cont--;
            }
        }
    }

    vEx = 0;
}

function seleccionar(x, y) {
    var px = parseInt((x - wX) / anchoC);
    var py = parseInt((y - wY) / altoC);

    var valor = tablero[py][px];

    z = valor;
}

function interactuar() {
    if (cont <= 1) {
        suma = 0;
    } else if (suma > 4 && suma < 8 || suma == 4) {
        resultado += 4;
        suma = 0;
    } else if (suma > 8 && suma < 16 || suma == 8) {
        resultado += 8;
        suma = 0;
    } else if (suma > 16 && suma < 32 || suma == 16) {
        resultado += 16;
        suma = 0;
    } else if (suma > 32 && suma < 64 || suma == 32) {
        resultado += 32;
        suma = 0;
    } else if (suma > 64 && suma < 128 || suma == 64) {
        resultado += 64;
        suma = 0;
    } else if (suma > 128 && suma < 256 || suma == 128) {
        resultado += 128;
        suma = 0;
    } else if (suma > 256 && suma < 512 || suma == 256) {
        resultado += 256;
        suma = 0;
    } else if (suma > 512 && suma < 1024 || suma == 512) {
        resultado += 512;
        suma = 0;
    } else if (suma > 1024 && suma < 2048 || suma == 1024) {
        resultado += 1024;
        suma = 0;
    } else if (suma == 2048) {
        resultado += 2048;
        suma = 0;
    } else if (suma > 2048) {
        resultado += 4096;
        suma = 0;
    }
}

function sumar() {
    if (z == 0) {
        punto = 2;
    } else if (z == 1) {
        punto = 4;
    } else if (z == 2) {
        punto = 8;
    } else if (z == 3) {
        punto = 16;
    } else if (z == 4) {
        punto = 32;
    } else if (z == 5) {
        punto = 64;
    } else if (z == 6) {
        punto = 128;
    } else if (z == 7) {
        punto = 256;
    } else if (z == 8) {
        punto = 512;
    } else if (z == 9) {
        punto = 1024;
    }

    suma = punto * cont;
}

function pieza(x, y) {

    var px = parseInt((x - wX) / anchoC);
    var py = parseInt((y - wY) / altoC);
    var valor = tablero[py][px];
    var op = tablero[py][px];
    var nuevo = 0;
    nuevo = Math.floor(Math.random() * 3);

    if (cont == 1) {
        tablero[y1][x1] = z;
    }

    if (cont > 1) {
        if (suma > 4 && suma < 8 || suma == 4) {
            op = 1;
            if (tablero[y1][x1] > 9) {
                tablero[y1][x1] = op;
            }
        } else if (suma > 8 && suma < 16 || suma == 8) {
            op = 2;
            if (tablero[y1][x1] > 9) {
                tablero[y1][x1] = op;
            }
        } else if (suma > 16 && suma < 32 || suma == 16) {
            op = 3;
            if (tablero[y1][x1] > 9) {
                tablero[y1][x1] = op;
            }
        } else if (suma > 32 && suma < 64 || suma == 32) {
            op = 4;
            if (tablero[y1][x1] > 9) {
                tablero[y1][x1] = op;
            }
        } else if (suma > 64 && suma < 128 || suma == 64) {
            op = 5;
            if (tablero[y1][x1] > 9) {
                tablero[y1][x1] = op;
            }
        } else if (suma > 128 && suma < 256 || suma == 128) {
            op = 6;
            if (tablero[y1][x1] > 9) {
                tablero[y1][x1] = op;
            }
        } else if (suma > 256 && suma < 512 || suma == 256) {
            op = 7;
            if (tablero[y1][x1] > 9) {
                tablero[y1][x1] = op;
            }
        } else if (suma > 512 && suma < 1024 || suma == 512) {
            op = 8;
            if (tablero[y1][x1] > 9) {
                tablero[y1][x1] = op;
            }
        } else if (suma > 1024 && suma < 2048 || suma == 1024) {
            op = 9;
            if (tablero[y1][x1] > 9) {
                tablero[y1][x1] = op;
            }
        }
        mon = Math.floor(Math.random() * 10);
        if (mon > 5) {
            monedas++;
        }
    }

    for (x = 4; x >= 0; x--) {
        for (y = 4; y >= 0; y--) {

            if (tablero[y][x] >= 20) {
                valor = tablero[y][x];
                valor -= 10;
                tablero[y][x] = valor;
            }

            if (tablero[y][x] >= 10 && tablero[y][x] <= 19) {
                if (y == 0) {
                    nuevo = Math.floor(Math.random() * 3);
                    valor = nuevo;

                } else if (y == 1) {
                    valor = tablero[y - 1][x];
                    if (valor <= 9) {
                        tablero[y - 1][x] += 10;
                    } else {
                        nuevo = Math.floor(Math.random() * 3);
                        valor = nuevo;
                    }

                } else if (y == 2) {
                    valor = tablero[y - 1][x];
                    if (valor <= 9) {
                        tablero[y - 1][x] += 10;
                    } else {
                        valor = tablero[y - 2][x];
                        if (valor <= 9) {
                            tablero[y - 2][x] += 10;
                        }
                    }

                } else if (y == 3) {
                    valor = tablero[y - 1][x];
                    if (valor <= 9) {
                        tablero[y - 1][x] += 10;
                    } else {
                        valor = tablero[y - 2][x];
                        if (valor <= 9) {
                            tablero[y - 2][x] += 10;
                        } else {
                            valor = tablero[y - 3][x];
                            if (valor <= 9) {
                                tablero[y - 3][x] += 10;
                            } else {
                                nuevo = Math.floor(Math.random() * 3);
                                valor = nuevo;
                            }
                        }
                    }

                } else if (y == 4) {
                    valor = tablero[y - 1][x];
                    if (valor <= 9) {
                        tablero[y - 1][x] += 10;
                    } else {
                        valor = tablero[y - 2][x];
                        if (valor <= 9) {
                            tablero[y - 2][x] += 10;
                        } else {
                            valor = tablero[y - 3][x];
                            if (valor <= 9) {
                                tablero[y - 3][x] += 10;
                            } else {
                                valor = tablero[y - 4][x];
                                if (valor <= 9) {
                                    tablero[y - 3][x] += 10;
                                } else {
                                    nuevo = Math.floor(Math.random() * 3);
                                    valor = nuevo;
                                }
                            }
                        }
                    }
                }
                tablero[y][x] = valor;

            }

        }
    }
}

function nivel() {
    if (resultado == 500 || resultado > 500 && resultado < 1000) {
        level = 2;
    } else if (resultado == 1000 || resultado > 1000 && resultado < 2000) {
        level = 3;
    } else if (resultado == 2000 || resultado > 2000 && resultado < 4000) {
        level = 4;
    } else if (resultado == 4000 || resultado > 4000 && resultado < 6000) {
        level = 5;
    } else if (resultado == 6000 || resultado > 6000 && resultado < 8000) {
        level = 6;
    } else if (resultado == 8000 || resultado > 8000 && resultado < 10000) {
        level = 7;
    } else if (resultado == 10000 || resultado > 10000 && resultado < 12500) {
        level = 8;
    } else if (resultado == 12500 || resultado > 12500 && resultado < 15000) {
        level = 9;
    } else if (resultado == 15000 || resultado > 15000) {
        level = 10;
    }
}

function continuar() {
    var px = 0;
    var py = 0;
    var v1 = 0;
    var v2 = 0;
    var v3 = 0;
    var v4 = 0;
    var comp = 0;
    var posi = 0;

    if (turno == false) {

        for (px = 0; px <= 4; px++) {
            for (py = 0; py <= 4; py++) {
                x1 = px + 1;
                y1 = py + 1;
                x2 = px - 1;
                y2 = py - 1;
                comp = tablero[py][px];

                if (py == 0) {
                    if (px == 0) {
                        v1 = tablero[py][x1];
                        v2 = tablero[y1][px];
                        if (v1 != comp && v2 != comp) {
                            posi++;
                        }
                    } else if (px > 0 && px < 4) {
                        v1 = tablero[py][x1];
                        v2 = tablero[y1][px];
                        v3 = tablero[py][x2];
                        if (v1 != comp && v2 != comp && v3 != comp) {
                            posi++;
                        }
                    } else if (px == 4) {
                        v1 = tablero[py][x2];
                        v2 = tablero[y1][px];
                        if (v1 != comp && v2 != comp) {
                            posi++;
                        }
                    }
                } else if (py == 4) {
                    if (px == 0) {
                        v1 = tablero[py][x1];
                        v2 = tablero[y2][px];
                        if (v1 != comp && v2 != comp) {
                            posi++;
                        }
                    } else if (px > 0 && px < 4) {
                        v1 = tablero[py][x1];
                        v2 = tablero[y2][px];
                        v3 = tablero[py][x2];
                        if (v1 != comp && v2 != comp && v3 != comp) {
                            posi++;
                        }
                    } else if (px == 4) {
                        v1 = tablero[py][x2];
                        v2 = tablero[y2][px];
                        if (v1 != comp && v2 != comp) {
                            posi++;
                        }
                    }
                } else if (px == 0) {
                    if (py > 0 && py < 4) {
                        v1 = tablero[py][x1];
                        v2 = tablero[y1][px];
                        v3 = tablero[y2][px];
                        if (v1 != comp && v2 != comp && v3 != comp) {
                            posi++;
                        }
                    }
                } else if (px == 4) {
                    if (py > 0 && py < 4) {
                        v1 = tablero[py][x2];
                        v2 = tablero[y1][px];
                        v3 = tablero[y2][px];
                        if (v1 != comp && v2 != comp && v3 != comp) {
                            posi++;
                        }
                    }
                } else {
                    v1 = tablero[py][x1];
                    v2 = tablero[py][x2];
                    v3 = tablero[y1][px];
                    v4 = tablero[y2][px];
                    if (v1 != comp && v2 != comp && v3 != comp && v4 != comp) {
                        posi++;
                    }
                }

            }
        }
    }
    if (posi >= 25) {
        fin = true;
    }
    if (fin == true) {

        if (oport < 2) {
            var statusConfirm1 = confirm("No quedan movimientos. \n ¿Continuar? \n Se cobraran 10 monedas.");
            if (statusConfirm1 == true && monedas >= 10) {
                reacomodar();
                monedas = monedas - 10;
            } else if (statusConfirm1 == true && monedas < 10) {
                var statusConfirm2 = confirm("No tienes monedas suficientes. \n El juego se reiniciará");
                if (statusConfirm2 == true) {
                    nuevo();
                    resultado = 0;
                    level = 1;
                    monedas = 0;
                }

            } else {
                var statusConfirm2 = confirm("Gracias por jugar. \n El juego se reiniciará.");
                if (statusConfirm2 == true) {
                    nuevo();
                    resultado = 0;
                    level = 1;
                    monedas = 0;
                }
                fin = false;
            }
            fin = false;
        } else {
            alert("El juego a terminado.");
            nuevo();
            resultado = 0;
            level = 1;
            monedas = 0;
        } fin = false;
    }

    posi = 0;

}

function reacomodar() {

    for (var x = 0; x < tablero.length - 1; x++) {
        for (var y = 0; y < tablero.length - 1; y++) {
            tablero[y][x] = tablero[y][x + 1];
        }
    }
    oport++;
}

function dibuTab() {
    for (y = 0; y < altoT; y++) {
        for (x = 0; x < anchoT; x++) {

            //normales
            if (tablero[y][x] == 0) {
                ctx.drawImage(c1, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 1) {
                ctx.drawImage(c2, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 2) {
                ctx.drawImage(c3, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 3) {
                ctx.drawImage(c4, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 4) {
                ctx.drawImage(c5, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 5) {
                ctx.drawImage(c6, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 6) {
                ctx.drawImage(c7, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 7) {
                ctx.drawImage(c8, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 8) {
                ctx.drawImage(c9, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 9) {
                ctx.drawImage(c10, anchoC * x, altoC * y, altoC, anchoC);
            }

            //selección
            if (tablero[y][x] == 10) {
                ctx.drawImage(c11, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 11) {
                ctx.drawImage(c12, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 12) {
                ctx.drawImage(c13, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 13) {
                ctx.drawImage(c14, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 14) {
                ctx.drawImage(c15, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 15) {
                ctx.drawImage(c16, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 16) {
                ctx.drawImage(c17, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 17) {
                ctx.drawImage(c18, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 18) {
                ctx.drawImage(c19, anchoC * x, altoC * y, altoC, anchoC);
            }
            if (tablero[y][x] == 19) {
                ctx.drawImage(c20, anchoC * x, altoC * y, altoC, anchoC);
            }
        }
    }
}

function borraCanvas() {
    canvas.width = wX;
    canvas.height = wX;
}

function principal() {
    for (y = 0; y < altoT; y++) {
        for (x = 0; x < anchoT; x++) {
            if (tablero[y][x] > 9 && turno == false) {
                pieza(Rx, Ry);
            }
        }
    }
    continuar();
    borraCanvas();
    dibuTab();
    nivel();

    if(trad == false){
        document.getElementById('titulo').innerHTML = titulo2;
        document.getElementById('score').innerHTML = text1 + resultado;
        document.getElementById('nivel').innerHTML = text2 + level;
        document.getElementById('monedas').innerHTML = text3 + monedas;
        document.getElementById('language').innerHTML = idioma1;
        document.getElementById('redes').innerHTML = redes2;
    }else{
        document.getElementById('titulo').innerHTML = titulo1;
        document.getElementById('score').innerHTML = text4 + resultado;
        document.getElementById('nivel').innerHTML = text5 + level;
        document.getElementById('monedas').innerHTML = text6 + monedas;
        document.getElementById('language').innerHTML = idioma2;
        document.getElementById('redes').innerHTML = redes1;
    }
}
