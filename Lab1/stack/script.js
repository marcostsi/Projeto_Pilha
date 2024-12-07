import { push, pop, peek, isEmpty, size, stack } from '../stack.js';

const buttonPush = document.querySelector("#buttonPush");
const buttonPop = document.querySelector("#buttonPop");
const buttonPeek = document.querySelector("#buttonPeek");
const buttonSize = document.querySelector("#buttonSize");
const buttonIsEmpty = document.querySelector("#buttonIsEmpty");

buttonPush.addEventListener("click", () => pushValue());
buttonPop.addEventListener("click", () => popValue());
buttonPeek.addEventListener("click", () => peekValue());
buttonSize.addEventListener("click", () => sizeValue());
buttonIsEmpty.addEventListener("click", () => isEmptyValue());


function pushValue() {
    let valor = document.getElementById("elemento").value;
    if (valor) {
        push(valor);
        updateMeuArray();
    }
}


function popValue() {
    pop();
    updateMeuArray();
}


function peekValue() {
    alert(`Topo da pilha: ${peek()}`);
}


function sizeValue() {
    alert(`Tamanho da pilha: ${size()}`);
}


function isEmptyValue() {
    alert(`IsEmpty: ${isEmpty()}`);
}


function updateMeuArray() {
    document.getElementById("meuArray").innerHTML = ""
    for (const i of stack) {
        document.getElementById("meuArray").innerHTML += `<div class="valor_array p-5">${i}</div>`
    }
    
}