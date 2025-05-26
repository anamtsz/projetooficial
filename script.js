// Mensagem de boas-vindas
let nomeUsuario = prompt("Digite seu nome");
alert("Seja bem-vindo ao site da Equipe Campal, " + nomeUsuario + "! Clique em 'OK' para escolher uma fruta ou planta.");

// Função para mostrar conteúdo e aplicar background
function mostrar(fruta, botao) {
  // Esconde logo
  document.getElementById("logo-inicial").style.display = "none";

  // Esconde todos os conteúdos
  let conteudos = document.querySelectorAll(".conteudo");
  conteudos.forEach(c => c.style.display = "none");

  // Remove classe ativa de todos os botões
  let botoes = document.querySelectorAll(".botoes button");
  botoes.forEach(b => b.classList.remove("ativo-uva", "ativo-babosa", "ativo-hortela"));

  // Mostra a fruta clicada
  document.getElementById(fruta).style.display = "block";

  // Adiciona classe ativa ao botão correspondente
  if (fruta === "uva") {
    botao.classList.add("ativo-uva");
    document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/juicy-purple-grape-bunch-fresh-from-nature-organic-growth_670382-151083.jpg')";
  } else if (fruta === "babosa") {
    botao.classList.add("ativo-babosa");
    document.body.style.backgroundImage = "url('https://www.coisasdaroca.com/wp-content/uploads/2017/08/v-9.jpg')";
  } else if (fruta === "hortela") {
    botao.classList.add("ativo-hortela");
    document.body.style.backgroundImage = "url('https://conteudo.imguol.com.br/blogs/171/files/2020/01/iStock-517852002.jpg')";
  }

  // Ajusta estilo do background
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
}

// Função para mostrar equipe
function mostrarEquipe() {
  document.getElementById("equipe").style.display = "block";
  document.getElementById("botoes-frutas").style.display = "none";
  document.getElementById("btn-equipe").style.display = "none";

  // Esconde conteúdos e logo
  document.querySelectorAll(".conteudo").forEach(c => c.style.display = "none");
  document.getElementById("logo-inicial").style.display = "none";

  // Remove background
  document.body.style.backgroundImage = "";
}

// Função para voltar à tela principal
function voltar() {
  document.getElementById("equipe").style.display = "none";
  document.getElementById("botoes-frutas").style.display = "flex";
  document.getElementById("btn-equipe").style.display = "block";

  // Esconde conteúdos
  document.querySelectorAll(".conteudo").forEach(c => c.style.display = "none");

  // Mostra logo
  document.getElementById("logo-inicial").style.display = "flex";

  // Limpa background e botões ativos
  document.body.style.backgroundImage = "";
  document.querySelectorAll(".botoes button").forEach(b => {
    b.classList.remove("ativo-uva", "ativo-babosa", "ativo-hortela");
  });
}

// Modal para ampliar imagens
function abrirModal(imagem) {
  let modal = document.getElementById("modal");
  let modalImg = modal.querySelector("img");
  let modalTexto = modal.querySelector("p");

  modal.style.display = "flex";
  modalImg.src = imagem.src;
  modalTexto.textContent = imagem.alt;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}
