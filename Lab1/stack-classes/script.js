import {Stack } from './stack.js'

const s = new Stack()

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
        s.push(valor);
        updateMeuArray();
    }
}


function popValue() {
    s.pop();
    updateMeuArray();
}


function peekValue() {
    alert(`Topo da pilha: ${s.peek()}`);
}

// Size
function sizeValue() {
    alert(`Tamanho da pilha: ${s.size()}`);
}


function isEmptyValue() {
    alert(`IsEmpty: ${s.isEmpty()}`);
}


function updateMeuArray() {

    document.getElementById("meuArray").innerHTML = ""
    for (const i of s.stack) {
        document.getElementById("meuArray").innerHTML += `<div class="valor_array p-5">${i}</div>`
    }
}