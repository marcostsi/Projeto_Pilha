
import { push, pop, peek, size, clear, stack, isEmpty } from './stack.js';


const buttonValidate = document.querySelector("#buttonValidate");
buttonValidate.addEventListener("click", () => validar()); 


function validar() {
    const valor = document.getElementById("elemento").value;
    const isValid = isBalanced(valor);
    const validacao = document.getElementById("validacao");
    clear()

    console.log(isValid)
    if (isValid) {
        validacao.textContent = "Balanceado";
    } else {
        validacao.textContent = "Não balanceado";
    }
}


function isBalanced(valor) {
    const abertos = "({[";
    const fechados = ")}]";
    const colchetes = {
        ")": "(",
        "}": "{",
        "]": "["

    };

    for (let char of valor) {
        if (abertos.includes(char)) {
            push(char);
            console.log(char)

        } else if (fechados.includes(char)) {
            console.log(char)
            if (isEmpty()) {
                return false;
            }
            pop()
            
        }
    }

    
    return isEmpty()
}