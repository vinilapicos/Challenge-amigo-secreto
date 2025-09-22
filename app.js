//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigo;
let listaAmigos = [];

function adicionarAmigo(){
        let amigo = document.getElementById('amigo').value;
        if (amigo != ""){
            listaAmigos.push(amigo);
            document.getElementById('amigo').value = "";
        }else {
            alert("O campo não pode estar vazio!");
        }
}