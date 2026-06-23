const campos = ["nome", "email", "cep", "rua", "bairro", "cidade", "estado"];

const form = document.getElementById("formCadastro");
const cepInput = document.getElementById("cep");
const mensagem = document.getElementById("mensagem");
const botaoLimpar = document.getElementById("limpar");

window.addEventListener("load", carregarDados);

campos.forEach((campo) => {
  document.getElementById(campo).addEventListener("input", salvarDados);
});

cepInput.addEventListener("input", () => {
  let cep = cepInput.value.replace(/\D/g, "");

  if (cep.length > 5) {
    cepInput.value = cep.slice(0, 5) + "-" + cep.slice(5, 8);
  } else {
    cepInput.value = cep;
  }

  if (cep.length === 8) {
    buscarCep(cep);
  }
});

async function buscarCep(cep) {
  mensagem.textContent = "Buscando endereço...";

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      mensagem.textContent = "CEP não encontrado.";
      limparEndereco();
      return;
    }

    document.getElementById("rua").value = dados.logradouro;
    document.getElementById("bairro").value = dados.bairro;
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("estado").value = dados.uf;

    salvarDados();
    mensagem.textContent = "Endereço preenchido automaticamente!";
  } catch (erro) {
    mensagem.textContent = "Erro ao buscar CEP. Verifique sua internet.";
  }
}

function salvarDados() {
  campos.forEach((campo) => {
    localStorage.setItem(campo, document.getElementById(campo).value);
  });
}

function carregarDados() {
  campos.forEach((campo) => {
    const valorSalvo = localStorage.getItem(campo);

    if (valorSalvo) {
      document.getElementById(campo).value = valorSalvo;
    }
  });
}

function limparEndereco() {
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  salvarDados();
  mensagem.textContent = "Dados salvos com sucesso!";
});

botaoLimpar.addEventListener("click", () => {
  localStorage.clear();
  form.reset();
  mensagem.textContent = "Dados apagados.";
});