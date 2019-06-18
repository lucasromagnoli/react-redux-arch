# Instalando as dependências

> yarn add redux react-redux
> yarn add react-router-dom

# Reactotron

> yarn add reactotron-react-js reactotron-redux

# Redux

- O estado é imutavel, então... Toda vez precisamos re-escrever o mesmo.

# Configurando o Redux

- Instalar as dependências
- Crias as pastas/arquivos:
  - store [Onde fica os arquivos de configurações da store e os actions/reducers]
    - index.js [Responsável por criar o store e configurar os middlewares]
    - reducers [Responsável por armazenar os reducers em si e o arquivo que unifica todos os reducers em apenas um]
      - index.js [Responsável por unificar os reducers.]
    - actions [Onde fica armazenado as actions que os reducers vão escutar]
