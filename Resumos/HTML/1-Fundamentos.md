HTML (HyperText Markup Language) é a linguagem base utilizada para estruturar e apresentar o conteúdo na web. Abaixo estão os principais fundamentos do HTML:

### 1. **Estrutura do Documento**
Todo documento HTML segue uma estrutura básica, que consiste em tags e elementos. A estrutura mínima de um documento HTML é composta por:

- `<!DOCTYPE html>`: Define a versão do HTML. No caso, HTML5.
- `<html>`: Elemento raiz que envolve todo o conteúdo.
- `<head>`: Contém metadados (informações sobre o documento, como charset, título, links de CSS, scripts, etc.).
- `<body>`: Abriga todo o conteúdo visível da página (texto, imagens, links, etc.).

Exemplo:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Minha Página</title>
</head>
<body>
  <h1>Bem-vindo à minha página!</h1>
  <p>Este é um parágrafo de exemplo.</p>
</body>
</html>
```

### 2. **Elementos e Tags**
Elementos HTML são representados por **tags**. Uma tag de abertura e uma de fechamento (na maioria dos casos) envolvem o conteúdo:

- Tag de abertura: `<tag>`
- Tag de fechamento: `</tag>`

Por exemplo, o elemento de parágrafo:
```html
<p>Este é um parágrafo.</p>
```
Algumas tags são **autoencerradas** e não precisam de uma tag de fechamento, como imagens:
```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

### 3. **Atributos**
As tags podem ter atributos que fornecem informações adicionais sobre o elemento. Atributos são sempre colocados na tag de abertura e geralmente possuem um valor, como:

- `src` (source) para indicar a origem de uma imagem.
- `href` (hyperlink reference) para indicar o destino de um link.

Exemplo de um link com atributo `href`:
```html
<a href="https://www.exemplo.com">Clique aqui</a>
```

### 4. **Cabeçalhos e Parágrafos**
O HTML define uma hierarquia de cabeçalhos para organizar o conteúdo. Existem seis níveis de cabeçalhos, do `<h1>` (mais importante) ao `<h6>` (menos importante):
```html
<h1>Cabeçalho 1</h1>
<h2>Cabeçalho 2</h2>
...
<h6>Cabeçalho 6</h6>
```
Parágrafos são representados pela tag `<p>`:
```html
<p>Este é um parágrafo de texto.</p>
```

### 5. **Listas**
HTML oferece dois tipos principais de listas:

- **Listas ordenadas** (`<ol>`): Numeradas.
```html
<ol>
  <li>Primeiro item</li>
  <li>Segundo item</li>
</ol>
```
- **Listas não ordenadas** (`<ul>`): Com marcadores.
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### 6. **Links e Imagens**
- **Links** são criados com a tag `<a>`:
```html
<a href="https://www.exemplo.com">Visitar exemplo</a>
```
- **Imagens** são inseridas com a tag `<img>`:
```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

### 7. **Formulários**
Formulários permitem a coleta de dados dos usuários:
```html
<form action="/enviar" method="post">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">
  <input type="submit" value="Enviar">
</form>
```

### 8. **Tabelas**
Tabelas estruturam dados em linhas e colunas:
```html
<table>
  <tr>
    <th>Nome</th>
    <th>Idade</th>
  </tr>
  <tr>
    <td>João</td>
    <td>25</td>
  </tr>
</table>
```

### 9. **Comentários**
Comentários são ignorados pelo navegador e usados para anotações no código:
```html
<!-- Este é um comentário -->
```

Esses são os fundamentos principais do HTML, que, quando combinados com CSS e JavaScript, formam a base da construção de websites interativos e esteticamente agradáveis.

## Estrutura básica

A estrutura do HTML segue uma organização hierárquica de elementos e tags que define a forma como o conteúdo é exibido e interpretado pelos navegadores. Cada documento HTML possui uma estrutura básica que ajuda a organizar o conteúdo, os metadados e as ligações para recursos externos, como arquivos de CSS e JavaScript.

### 1. **<!DOCTYPE html>**
O documento HTML começa com a declaração `<!DOCTYPE html>`, que informa ao navegador que o documento está usando a versão HTML5. Isso garante que a página seja interpretada corretamente.
```html
<!DOCTYPE html>
```

### 2. **Elemento `<html>`**
O elemento `<html>` envolve todo o conteúdo da página e é o contêiner raiz. Ele define a linguagem da página usando o atributo `lang`, que pode ser configurado para diferentes idiomas, como `lang="pt-BR"` para português do Brasil.
```html
<html lang="pt-BR">
  <!-- Conteúdo da página -->
</html>
```

### 3. **Elemento `<head>`**
O `<head>` contém metadados, ou seja, informações sobre o documento que não são exibidas diretamente na página, mas são essenciais para o navegador e motores de busca. Aqui estão alguns elementos comuns no `<head>`:

- **`<meta charset="UTF-8">`**: Define a codificação de caracteres do documento, geralmente UTF-8, para suportar caracteres especiais.
- **`<title>`**: Define o título da página que aparece na aba do navegador.
- **Links externos**: Instruções para o navegador buscar arquivos CSS ou JavaScript externos, como:
  ```html
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
  ```

Exemplo completo do `<head>`:
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Página</title>
  <link rel="stylesheet" href="styles.css">
</head>
```

### 4. **Elemento `<body>`**
O elemento `<body>` contém todo o conteúdo visível da página, como textos, imagens, vídeos, links, listas, tabelas, formulários e muito mais. Tudo o que é exibido ao usuário estará dentro da tag `<body>`.
```html
<body>
  <h1>Bem-vindo!</h1>
  <p>Este é o conteúdo da minha página.</p>
</body>
```

### 5. **Hierarquia de Cabeçalhos**
Dentro do `<body>`, é comum usar os cabeçalhos para definir a estrutura de títulos e subtítulos do conteúdo. Os cabeçalhos vão de `<h1>` a `<h6>`, sendo `<h1>` o título mais importante e `<h6>` o menos importante.

Exemplo de hierarquia de cabeçalhos:
```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Seção</h3>
```

### 6. **Elementos de Conteúdo**
O corpo do HTML inclui diferentes tipos de elementos para estruturar o conteúdo, como parágrafos, listas, imagens e links. Alguns exemplos:

- **Parágrafos**: Definidos com a tag `<p>`:
  ```html
  <p>Este é um parágrafo.</p>
  ```
- **Imagens**: Usam a tag `<img>` e podem ser decoradas com um atributo `alt` que descreve a imagem:
  ```html
  <img src="imagem.jpg" alt="Descrição da imagem">
  ```
- **Links**: Criados com a tag `<a>`, permitindo a navegação entre páginas:
  ```html
  <a href="https://www.exemplo.com">Visitar Exemplo</a>
  ```

### 7. **Listas**
As listas são úteis para agrupar itens de forma ordenada ou não ordenada:
- **Lista não ordenada** (`<ul>`) usa marcadores:
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  ```
- **Lista ordenada** (`<ol>`) usa números:
  ```html
  <ol>
    <li>Primeiro</li>
    <li>Segundo</li>
  </ol>
  ```

### 8. **Formulários**
Formulários HTML permitem a coleta de dados do usuário e enviá-los para processamento:
```html
<form action="/submit" method="post">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">
  <input type="submit" value="Enviar">
</form>
```

### 9. **Rodapé e Navegação**
É comum incluir rodapés e seções de navegação dentro do `<body>`, que organizam melhor o conteúdo:
- **Rodapé** (`<footer>`): Inclui informações adicionais, como direitos autorais ou links.
- **Navegação** (`<nav>`): Agrupa links de navegação do site.

Exemplo de rodapé:
```html
<footer>
  <p>&copy; 2024 Minha Página</p>
</footer>
```

### 10. **Fechamento**
Ao final, o elemento `<html>` é fechado, indicando o término do documento:
```html
</html>
```

### Exemplo Completo de Estrutura HTML:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Página</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Bem-vindo à Minha Página!</h1>
  <p>Este é um exemplo de documento HTML.</p>
  
  <h2>Seções</h2>
  <ul>
    <li>Seção 1</li>
    <li>Seção 2</li>
  </ul>

  <form action="/submit" method="post">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
    <input type="submit" value="Enviar">
  </form>

  <footer>
    <p>&copy; 2024 Minha Página</p>
  </footer>
</body>
</html>
```

Essa estrutura oferece uma base sólida para qualquer página web, permitindo adicionar estilos com CSS e interatividade com JavaScript.

