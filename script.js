const display = document.querySelector(".display");

let valorDisplay = display.textContent;






function addCaracter(caracter){

    
    

    valorDisplay = valorDisplay + caracter;
    

};

function limparDisplay(){

    valorDisplay = "";

};

function inverterValor(){

    valorDisplay = valorDisplay * (-1);

};