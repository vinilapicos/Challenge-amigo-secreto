# Sorteador de Amigo Secreto

![Status: Concluído](https://img.shields.io/badge/status-concluído-brightgreen)
![Tecnologias](https://img.shields.io/badge/tech-HTML%20%7C%20CSS%20%7C%20JS-yellow)

<br>

## 📜 Índice

1.  [Sobre o Projeto](#1-sobre-o-projeto)
2.  [Layout da Aplicação](#2-layout-da-aplicação)
3.  [Principais Funcionalidades](#3-principais-funcionalidades)

<br>

## 1. Sobre o Projeto

O **Sorteador de Amigo Secreto** é uma aplicação web front-end desenvolvida como um exercício prático para solidificar conceitos fundamentais de **JavaScript**, **HTML** e **CSS**. O projeto simula a clássica brincadeira de amigo secreto, permitindo ao usuário gerenciar uma lista de participantes e realizar sorteios de forma interativa e justa.

A motivação principal foi criar uma ferramenta funcional e com uma interface agradável, focando na manipulação direta do DOM (Document Object Model) e na implementação de uma lógica de estado para controlar a interatividade dos botões.

---

## 2. Layout da Aplicação

A interface foi projetada para ser limpa e intuitiva, com todos os controles acessíveis em uma única tela. A estilização inclui uma imagem de fundo que cobre toda a página de forma fixa e responsiva.

---

## 3. Principais Funcionalidades

| Funcionalidade | Descrição |
| :--- | :--- |
| **Adição de Participantes** | Campo de texto para inserir nomes. A validação `.trim()` impede que nomes compostos apenas por espaços sejam adicionados. |
| **Exibição Dinâmica da Lista**| A lista de amigos na tela é atualizada em tempo real a cada adição ou remoção, refletindo sempre o estado atual dos dados. |
| **Sorteio Justo** | Utiliza `Math.random()` para garantir um sorteio de índice aleatório e seguro. Após o sorteio, o participante é removido da lista de futuros sorteados. |
| **Reinício do Jogo** | A função "Limpar" zera completamente o estado da aplicação: o array de dados é esvaziado, as listas na tela são limpas e os botões de ação são desabilitados. |
| **UI Reativa (Botões Inteligentes)** | Os botões de ação são habilitados e desabilitados conforme o contexto. O botão de sorteio, por exemplo, só é ativado quando há pelo menos dois participantes na lista. |

---
