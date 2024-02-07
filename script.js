let display = document.querySelector(".display");

display.disabled = true;


function addCaracter(caracter) {

     display.value = display.value + caracter;

};

function limparDisplay() {

    display.value = "";

};

function inverterValor() {

    display.value = display.value * (-1);

};


function calcular() {

   display.value = eval(display.value);


};


