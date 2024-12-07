import { push, pop, peek, size, clear, stack, isEmpty } from './stack.js';

const buttonValidate = document.getElementById("buttonValidate");
buttonValidate.addEventListener("click", validar);

function validar() {
    const valor = document.getElementById("elemento").value;
    const validacao = document.getElementById("validacao");
    clear();

    validacao.textContent = isBalanced(valor) ? "Balanceado" : "Não balanceado";
}

function isBalanced(valor) {
    const pares = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let i = 0; i < valor.length; i++) {
        const char = valor[i];

        if ("({[".includes(char)) {
            push(char);
        } else if (")}]".includes(char)) {
            if (isEmpty() || peek() !== pares[char]) {
                return false;
            }
            pop();
        }
    }

    return isEmpty();
}