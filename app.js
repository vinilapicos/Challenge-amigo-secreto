//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigo;
let listaAmigos = [];
let listaHtml = document.getElementById('listaAmigos');
let botaoExibir = document.getElementById('exibirLista');
let botaoLimpar = document.getElementById('limparLista');
let botaoSortear = document.getElementById('sortearAmigo');
let resultadoAmigo = document.getElementById('resultado');

function adicionarAmigo(){
        let amigo = document.getElementById('amigo').value;
        if (amigo.trim() !== ""){
            listaAmigos.push(amigo);
            document.getElementById('amigo').value = "";
            habilitarBotao();
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
    resultadoAmigo.innerHTML = "";
    listaAmigos = [];
    desabilitarBotao();
}

function sortearAmigo(){
    if (listaAmigos.length == 0){
        desabilitarBotao();
        resultadoAmigo.innerHTML = "";
    }   else{
            let indiceAleatorio = parseInt(Math.random() * listaAmigos.length);
            resultadoAmigo.innerHTML = listaAmigos[indiceAleatorio];
            listaAmigos.splice(indiceAleatorio, 1);
            exibirLista();
            }
}

function habilitarBotao(){
    botaoExibir.removeAttribute('disabled');
    botaoLimpar.removeAttribute('disabled');
    botaoSortear.removeAttribute('disabled');
}

function desabilitarBotao(){
    botaoExibir.setAttribute('disabled', 'true');
    botaoLimpar.setAttribute('disabled', 'true');
    botaoSortear.setAttribute('disabled', 'true');
}