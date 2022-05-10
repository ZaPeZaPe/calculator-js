var qtdSinais = true;
var qtdPonto = true;
var calculou = false;

function insert(number){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + number;
}

function insertSinais(objeto) {
    if (document.getElementById('resultado').innerHTML === "Infinity") {
        clean();
    }
    calculou=false;
    if (qtdSinais) {
        insert(objeto);
        qtdSinais=false;
    }
}

function insertNumero(objeto) {
    if(calculou){
        clean();
        calculou=false;
    }
    insert(objeto);
    qtdSinais=true;
}

function insertPonto(objeto) {
    if(calculou){
        clean();
        calculou=false;
    }
    if (qtdPonto) {
        insert(objeto);
        qtdPonto=false;
    }
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado === "Infinity") {
        clean();
    } else  {
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var botoes = document.querySelectorAll('button');
    for (var i=0; i < botoes.length; i++) {
        botoes[i].addEventListener('click', function(event){
            switch (this.id) {
                case "C" : clean();
                           qtdPonto = true;
                           qtdSinais = true; break;
                case "<" : calculou=false;
                           back(); break;
                case "=" : calcular();
                           calculou=true; break;
                case "." : insertPonto(this.innerHTML); break;
                case "+" : insertSinais(this.innerHTML); break;
                case "-" : insertSinais(this.innerHTML); break;
                case "X" : insertSinais("*"); break;
                case "/" : insertSinais(this.innerHTML); break;
                default :  insertNumero(this.innerHTML)
            }
        })
    }
})