const x = '&#x274C;';
const o = '&#11093;';

let contador = 0;
let quadrado = document.querySelectorAll('.quadrado');
let check = document.querySelector('#posicao-tabela');
let resX = document.querySelector('#res-x');
let resO = document.querySelector('#res-o');
let vitX = 0;
let vitO = 0;
const q = {
    q1: document.getElementById('qdr1'),
    q2: document.getElementById('qdr2'),
    q3: document.getElementById('qdr3'),
    q4: document.getElementById('qdr4'),
    q5: document.getElementById('qdr5'),
    q6: document.getElementById('qdr6'),
    q7: document.getElementById('qdr7'),
    q8: document.getElementById('qdr8'),
    q9: document.getElementById('qdr9'),
}

check.addEventListener('click', deuVelha);

for (let i in quadrado) {
    quadrado[i].addEventListener('click', function() {
        vez(i);
        fimPartida();
    })
}
function marcaCirculo (i) {
    quadrado[i].innerHTML = o;
    quadrado[i].classList.add('o');
}

function marcaX (i) {
    quadrado[i].innerHTML = x;
    quadrado[i].classList.add('x')
}

function vez (i) { 
    if (quadrado[i].innerHTML.length !== 0) {
        return alert('Quadrado já marcado');
    }
    contador++;
    if (contador % 2 == 0) {
        marcaCirculo(i)
    } else {
        marcaX(i)
    }
}

/*function deuVelha () {
    let controle = 0;
    for(let i in quadrado) {
        if (quadrado[i].innerHTML.length !== 0) {
            controle++
        }
    }
    if (controle == 9) {alert('Deu velha!')}
} */

function fimPartida () { 
   vitoriaO();
   vitoriaX();
}

function vitoriaX () {
    if (q.q1.classList.contains('x') && q.q2.classList.contains('x') && q.q3.classList.contains('x')) {
        alert(`Vitória do ${q.q1.innerHTML}`);
        zeraPartida();
    } else if (q.q4.classList.contains('x') && q.q4.classList.contains('x') && q.q6.classList.contains('x')) {
        alert(`Vitória do ${q.q4.innerHTML}`);
        zeraPartida();
    } else if (q.q7.classList.contains('x') && q.q8.classList.contains('x') && q.q9.classList.contains('x')) {
        alert(`Vitória do ${q.q7.innerHTML}`);
        zeraPartida();
    } else if (q.q1.classList.contains('x') && q.q4.classList.contains('x') && q.q7.classList.contains('x')) {
        alert(`Vitória do ${q.q1.innerHTML}`);
        zeraPartida();
    } else if (q.q2.classList.contains('x') && q.q5.classList.contains('x') && q.q8.classList.contains('x')) {
        alert(`Vitória do ${q.q2.innerHTML}`);
        zeraPartida();
    } else if (q.q3.classList.contains('x') && q.q6.classList.contains('x') && q.q9.classList.contains('x')) {
        alert(`Vitória do ${q.q3.innerHTML}`);
        zeraPartida();
    } else if (q.q1.classList.contains('x') && q.q5.classList.contains('x') && q.q9.classList.contains('x')) {
        alert(`Vitória do ${q.q1.innerHTML}`);
        zeraPartida();
    } else if (q.q3.classList.contains('x') && q.q5.classList.contains('x') && q.q7.classList.contains('x')) {
        alert(`Vitória do ${q.q3.innerHTML}`);
        zeraPartida();
    }
}

function vitoriaO () {
    if (q.q1.classList.contains('o') && q.q2.classList.contains('o') && q.q3.classList.contains('o')) {
        alert(`Vitória do ${q.q1.innerHTML}`);
        zeraPartida();
    } else if (q.q4.classList.contains('o') && q.q5.classList.contains('o') && q.q6.classList.contains('o')) {
        alert(`Vitória do ${q.q4.innerHTML}`);
        zeraPartida();
    } else if (q.q7.classList.contains('o') && q.q8.classList.contains('o') && q.q9.classList.contains('o')) {
        alert(`Vitória do ${q.q7.innerHTML}`);
        zeraPartida();
    } else if (q.q1.classList.contains('o') && q.q4.classList.contains('o') && q.q7.classList.contains('o')) {
        alert(`Vitória do ${q.q1.innerHTML}`);
        zeraPartida();
    } else if (q.q2.classList.contains('o') && q.q5.classList.contains('o') && q.q8.classList.contains('o')) {
        alert(`Vitória do ${q.q2.innerHTML}`);
        zeraPartida();
    } else if (q.q3.classList.contains('o') && q.q6.classList.contains('o') && q.q9.classList.contains('o')) {
        alert(`Vitória do ${q.q3.innerHTML}`);
        zeraPartida();
    } else if (q.q1.classList.contains('o') && q.q5.classList.contains('o') && q.q9.classList.contains('o')) {
        alert(`Vitória do ${q.q1.innerHTML}`);
        zeraPartida();
    } else if (q.q3.classList.contains('o') && q.q5.classList.contains('o') && q.q7.classList.contains('o')) {
        alert(`Vitória do ${q.q3.innerHTML}`);
        zeraPartida();
    }
}

function deuVelha() {
    if (contador >= 9) {
        alert ('Deu velha!')
        vitX--
        return zeraPartida();
    }
}

function zeraPartida () {
    if (contador % 2 == 0) {
        vitO++;
        resO.innerHTML = vitO; 
    } else {
        vitX++;
        resX.innerHTML = vitX;
    }
    contador = 0;
    for(let i in quadrado) {
        quadrado[i].innerHTML = '';
        quadrado[i].classList.remove('x');
        quadrado[i].classList.remove('o');
    }
}

/* 
    1 2 3
    4 5 6
    7 8 9

    possibilidades de vitoria:
    123, 456, 789, 147, 258, 369, 159, 357
    012  345  678  036  147  258  048  246

    qArr = [q1,q2,q3,q4,q5,q6,q7,q8,q9]
    if (qArr[])
    
//const possibilidades = [123, 456, 789, 147, 258, 369, 159, 357]
*/
