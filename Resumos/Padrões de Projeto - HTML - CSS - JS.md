No desenvolvimento front-end usando **HTML**, **CSS** e **JavaScript**, os arquivos são geralmente organizados para separar a estrutura, o estilo e a funcionalidade da página. Isso facilita a manutenção e a legibilidade do código. Aqui está uma visão comum de como os arquivos são divididos:

### 1. **HTML (HyperText Markup Language)**:
- **Função**: Define a estrutura da página e o conteúdo.
- **Extensão**: `.html`
- **Conteúdo**: Tags para cabeçalhos, parágrafos, listas, imagens, links, etc.
- **Exemplo**:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Website</title>
      <link rel="stylesheet" href="styles.css">
  </head>
  <body>
      <header>
          <h1>Welcome to My Website</h1>
      </header>
      <script src="script.js"></script>
  </body>
  </html>
  ```

### 2. **CSS (Cascading Style Sheets)**:
- **Função**: Controla o design visual da página, como cores, layout, tipografia e espaçamento.
- **Extensão**: `.css`
- **Conteúdo**: Regras de estilo que afetam os elementos definidos no HTML.
- **Exemplo**:
  ```css
  body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
  }

  header {
      background-color: #333;
      color: white;
      padding: 10px;
      text-align: center;
  }

  h1 {
      font-size: 24px;
  }
  ```

### 3. **JavaScript (JS)**:
- **Função**: Gerencia a interatividade da página, como eventos (cliques, envios de formulários), manipulação de DOM (Document Object Model) e lógica de negócio no front-end.
- **Extensão**: `.js`
- **Conteúdo**: Código de funções, eventos e manipulação de elementos da página.
- **Exemplo**:
  ```javascript
  document.querySelector('h1').addEventListener('click', function() {
      alert('Header clicked!');
  });
  ```

### Estrutura de Pastas Comum:
```bash
project/
│
├── index.html         # Arquivo principal de HTML
├── styles.css         # Arquivo CSS que estiliza a página
├── script.js          # Arquivo JavaScript que adiciona interatividade
└── assets/
    ├── images/        # Imagens usadas no projeto
    └── fonts/         # Fontes customizadas, se houver
```

Essa organização ajuda a manter a estrutura de uma aplicação front-end clara e facilita o trabalho em equipe e a escalabilidade do projeto.