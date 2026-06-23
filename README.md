# 🌐 Cadastro de Usuários com ViaCEP e Web Storage

Projeto desenvolvido em **HTML, CSS e JavaScript** com o objetivo de praticar o consumo de uma **Web API** e o armazenamento de dados no navegador.

## 📖 Descrição

Esta aplicação permite cadastrar um usuário informando nome, e-mail e CEP. Ao digitar o CEP, o sistema consulta automaticamente a API do ViaCEP e preenche os campos de endereço.

Além disso, os dados do formulário são armazenados no **Local Storage**, permanecendo salvos mesmo após atualizar ou fechar a página.

## 🚀 Funcionalidades

* Cadastro de usuário.
* Consulta automática de endereço pelo CEP utilizando a API ViaCEP.
* Preenchimento automático de rua, bairro, cidade e estado.
* Salvamento automático dos dados utilizando Web Storage API (Local Storage).
* Restauração dos dados ao recarregar a página.
* Opção de limpar os dados salvos.

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Fetch API
* Web Storage API (Local Storage)
* API ViaCEP

## 📂 Estrutura do Projeto

```text
cadastro-usuarios-api/
├── index.html
├── styles.css
├── scripts.js
└── README.md
```

## ▶️ Como Executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/GabrielAlb155/cadastro-usuarios-api.git
   ```

2. Abra a pasta do projeto no VS Code.

3. Execute o arquivo `index.html` ou utilize a extensão **Live Server**.

## 👨‍💻 Autor

Gabriel Albuquerque
