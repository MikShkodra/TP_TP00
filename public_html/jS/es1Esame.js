function printHello() {
    // recupero input testo & assegno alla variabile il value
    let sogg = document.getElementById("id_hello").value;

//recupero oggetto finale per il testo da printare -->  sp_hello
    let d = new Date();
    let msg = "Today is" + d + ". Hello I'm " + sogg + " and I wish to have a nice day! :P ";

//assegno al contenuto span la variabile più la frase 
    document.getElementById("sp_hello").innerHTML = msg;
    document.getElementById("id_hello").value= "";
}

function moveName() {
    // recupero input testo & assegno alle variabili il value
    let bu1 = document.getElementById("burri1").value;
    let bu2 = document.getElementById("burri2").value;
    let bu3 = document.getElementById("burri3").value;
    
    document.getElementById("burri1").value = bu3;
    document.getElementById("burri2").value= bu1;
    document.getElementById("burri3").value = bu2;
}

// mi serve un array per gli iTem & cost

var ar_iTem = ["scissor", "cutter", "tape", "gloves", "meter"];
var ar_cost = [7, 4, 3, 5, 2];
var tot_iTem = 5;

function addiTem() {
    ar_iTem.push(document.getElementById("in_iTem").value);
    ar_cost.push(document.getElementById("in_cost").value) * 1;

    prep_outPut();
}

function prep_outPut() {
    num_iTem = ar_iTem.length;

    document.getElementById("out_array").innerHTML = print_iTem();
    document.getElementById("tot").innerHTML = print_Tot();
    document.getElementById("num").innerHTML = num_iTem;
}

function print_iTem() {
    let text = "";
    for (i = 0; i < ar_iTem.length; i++) {
        text += "<div id'out_array'" + i + "'><b>#" + (i + 1) + "</b>  &nbsp;  " + ar_iTem[i] + " costa " + ar_cost[i] + " €<br/></div>";
    }
    return text;
}

function print_Tot() {
    let totale = 0;
    for (i = 0; i < ar_iTem.length; i++) {
        totale += ar_cost[i] * 1;
    }
    return totale;
}

function getMedia() {
    let somma = 0;
    let media = 0;
    for (i = 0; i < ar_cost.length; i++) {
        somma += ar_cost[i] * 1;
    }

    document.getElementById("div_media").innerHTML = somma / ar_cost.length;
}

function getMax() {
    let max = 0;
    max = Math.max.apply(null, ar_cost);
    document.getElementById("div_max").innerHTML = max;
}

function getMin() {
    document.getElementById("div_min").innerHTML = Math.min.apply(null, ar_cost);
}