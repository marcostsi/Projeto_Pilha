import LinkedStack from './linkedStack.js';

const stack = new LinkedStack()


document.getElementById("buttonPush").addEventListener("click", ()=>{
    const valor = document.getElementById("elemento").value

    if(valor){
        stack.push(valor)
        updateMeuArray()
    }

})

document.getElementById("buttonPop").addEventListener("click", ()=>{

    stack.pop()
    updateMeuArray()

})

document.getElementById("buttonPeek").addEventListener("click", ()=>{

    alert(`Topo da pilha: ${stack.peek()}`);

})

document.getElementById("buttonSize").addEventListener("click", ()=>{
   
    alert(`Topo da pilha: ${stack.size()}`);

})

document.getElementById("buttonIsEmpty").addEventListener("click", ()=>{
    
    alert(`IsEmpty: ${stack.isEmpty()}`);

})


function updateMeuArray() {
    let temp = stack.top
    document.getElementById("meuArray").innerHTML = "";
    while (temp != null) {
        document.getElementById("meuArray").innerHTML += `<div class="valor_array p-5">${temp.value}</div>`
        temp = temp.prev
    }
}