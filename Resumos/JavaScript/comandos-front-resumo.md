Aqui está uma lista de comandos (funções, métodos e conceitos) mais usados em **JavaScript** com foco no front-end:

### 1. **Declaração de Variáveis**
- `let`: Declara uma variável com escopo de bloco, que pode ser reatribuída.
  - Exemplo: `let nome = "João";`
- `const`: Declara uma constante, cujo valor não pode ser reatribuído.
  - Exemplo: `const idade = 25;`
- `var`: Declara uma variável com escopo de função (menos utilizado).
  - Exemplo: `var sobrenome = "Silva";`

### 2. **Tipos de Dados e Operadores**
- Tipos primitivos: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`.
- Operadores aritméticos: `+`, `-`, `*`, `/`, `%`, `++`, `--`.
  - Exemplo: `let total = 10 + 5;`
- Operadores de comparação: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
  - Exemplo: `if (idade >= 18) { ... }`
- Operadores lógicos: `&&` (e), `||` (ou), `!` (não).
  - Exemplo: `if (condicao1 && condicao2) { ... }`

### 3. **Manipulação do DOM (Document Object Model)**
- `document.getElementById(id)`: Seleciona um elemento pelo seu ID.
  - Exemplo: `document.getElementById("meuElemento");`
- `document.querySelector(seletor)`: Seleciona o primeiro elemento que corresponde ao seletor CSS.
  - Exemplo: `document.querySelector(".minhaClasse");`
- `document.querySelectorAll(seletor)`: Seleciona todos os elementos que correspondem ao seletor CSS.
  - Exemplo: `document.querySelectorAll("p");`
- `element.innerHTML`: Define ou obtém o conteúdo HTML de um elemento.
  - Exemplo: `document.getElementById("meuElemento").innerHTML = "Novo conteúdo";`
- `element.textContent`: Define ou obtém o conteúdo de texto (sem tags HTML).
  - Exemplo: `element.textContent = "Texto atualizado";`
- `element.style`: Modifica estilos CSS de um elemento.
  - Exemplo: `element.style.color = "red";`
- `element.classList.add()`: Adiciona uma classe CSS a um elemento.
  - Exemplo: `element.classList.add("active");`
- `element.classList.remove()`: Remove uma classe CSS de um elemento.
  - Exemplo: `element.classList.remove("active");`
- `element.classList.toggle()`: Adiciona ou remove uma classe, dependendo de sua presença.
  - Exemplo: `element.classList.toggle("hidden");`
  
### 4. **Eventos**
- `addEventListener(evento, função)`: Associa um evento a um elemento HTML.
  - Exemplo: `button.addEventListener("click", function() { alert("Botão clicado!"); });`
- Eventos comuns: `click`, `mouseover`, `mouseout`, `keyup`, `keydown`, `submit`, `load`.
  - Exemplo: 
    ```javascript
    document.querySelector("#form").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o comportamento padrão
      console.log("Formulário enviado");
    });
    ```

### 5. **Manipulação de Atributos**
- `element.setAttribute(attr, valor)`: Define um atributo para um elemento HTML.
  - Exemplo: `element.setAttribute("src", "imagem.jpg");`
- `element.getAttribute(attr)`: Obtém o valor de um atributo.
  - Exemplo: `element.getAttribute("href");`
- `element.removeAttribute(attr)`: Remove um atributo de um elemento.
  - Exemplo: `element.removeAttribute("disabled");`

### 6. **Manipulação de Elementos no DOM**
- `document.createElement(tag)`: Cria um novo elemento HTML.
  - Exemplo: `let novoElemento = document.createElement("div");`
- `element.appendChild(novoElemento)`: Adiciona um elemento filho a outro elemento.
  - Exemplo: `parentElement.appendChild(novoElemento);`
- `element.removeChild(filho)`: Remove um elemento filho.
  - Exemplo: `parentElement.removeChild(filho);`
- `element.insertAdjacentHTML(posição, html)`: Insere HTML em uma posição específica.
  - Posições: `beforebegin`, `afterbegin`, `beforeend`, `afterend`.
  - Exemplo: `element.insertAdjacentHTML("beforeend", "<p>Texto inserido</p>");`

### 7. **Estruturas de Controle**
- `if`, `else if`, `else`: Estruturas condicionais.
  - Exemplo:
    ```javascript
    if (idade >= 18) {
      console.log("Maior de idade");
    } else {
      console.log("Menor de idade");
    }
    ```
- `switch`: Estrutura condicional múltipla.
  - Exemplo:
    ```javascript
    switch (cor) {
      case "vermelho":
        console.log("Cor vermelha");
        break;
      case "azul":
        console.log("Cor azul");
        break;
      default:
        console.log("Outra cor");
    }
    ```
- `for`: Laço de repetição.
  - Exemplo:
    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    ```
- `while`: Laço de repetição com condição no início.
  - Exemplo:
    ```javascript
    let i = 0;
    while (i < 5) {
      console.log(i);
      i++;
    }
    ```

### 8. **Funções**
- Declaração de função:
  - Exemplo:
    ```javascript
    function somar(a, b) {
      return a + b;
    }
    ```
- Função anônima:
  - Exemplo:
    ```javascript
    const multiplicar = function(a, b) {
      return a * b;
    };
    ```
- Funções arrow (ES6):
  - Exemplo:
    ```javascript
    const dividir = (a, b) => a / b;
    ```

### 9. **Manipulação de Arrays**
- `array.push(item)`: Adiciona um item ao final do array.
  - Exemplo: `array.push("novo item");`
- `array.pop()`: Remove o último item do array.
  - Exemplo: `array.pop();`
- `array.shift()`: Remove o primeiro item do array.
  - Exemplo: `array.shift();`
- `array.unshift(item)`: Adiciona um item no início do array.
  - Exemplo: `array.unshift("novo item");`
- `array.forEach(função)`: Itera sobre cada item do array.
  - Exemplo:
    ```javascript
    array.forEach(item => {
      console.log(item);
    });
    ```
- `array.map(função)`: Cria um novo array aplicando uma função a cada item.
  - Exemplo:
    ```javascript
    const novoArray = array.map(item => item * 2);
    ```
- `array.filter(função)`: Cria um novo array com os itens que atendem a uma condição.
  - Exemplo:
    ```javascript
    const filtrado = array.filter(item => item > 10);
    ```

### 10. **Manipulação de Objetos**
- Declaração de objetos:
  - Exemplo:
    ```javascript
    const pessoa = {
      nome: "João",
      idade: 30,
      falar: function() {
        console.log("Olá!");
      }
    };
    ```
- Acesso a propriedades:
  - Exemplo: `console.log(pessoa.nome);`
- Atribuição de novas propriedades:
  - Exemplo: `pessoa.altura = 1.75;`
- Métodos de objetos:
  - Exemplo: `pessoa.falar();`

### 11. **Trabalhando com JSON**
- `JSON.stringify(objeto)`: Converte um objeto JavaScript em uma string JSON.
  - Exemplo: `const jsonString = JSON.stringify(pessoa);`
- `JSON.parse(string)`: Converte uma string JSON em um objeto JavaScript.
  - Exemplo: `const objeto = JSON.parse(jsonString);`

### 12. **Requisições HTTP/AJAX (Fetch API)**
- `fetch(url)`: Faz uma requisição HTTP.
  - Exemplo:
    ```javascript
    fetch("https://api.exemplo.com/dados")
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Erro:", error));
    ```

### 13. **Armazenamento Local (Local Storage)**
- `localStorage.setItem(chave, valor)`: Armazena um valor no armazenamento local.
  - Exemplo: `localStorage.setItem("nome", "João");`
- `localStorage.getItem(chave)`: Obtém um valor do armazenamento local.
  - Exemplo: `const nome = localStorage.getItem("nome");`
- `localStorage.removeItem(chave)`: Remove

 um item do armazenamento local.
  - Exemplo: `localStorage.removeItem("nome");`

Esses são comandos essenciais para o desenvolvimento front-end em JavaScript.