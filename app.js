//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigo;
let listaAmigos = [];
let listaHtml = document.getElementById('listaAmigos');
let botaoExibir = document.getElementById('exibirLista');

function adicionarAmigo(){
        let amigo = document.getElementById('amigo').value;
        if (amigo != ""){
            listaAmigos.push(amigo);
            document.getElementById('amigo').value = "";
            botaoExibir.removeAttribute('disabled');
        }else {
            alert("O campo não pode estar vazio!");
        }
}

function exibirLista(){
    listaHtml.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++){
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = listaAmigos[i];
        listaHtml.appendChild(novoAmigo);
    }
}

function limparLista(){
    listaHtml.innerHTML = '';
    listaAmigos = [];
    botaoExibir.setAttribute('disabled', 'true');
}