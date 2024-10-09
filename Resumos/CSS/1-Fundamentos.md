CSS (Cascading Style Sheets) é a linguagem utilizada para descrever a apresentação visual e o layout de páginas web. Ele trabalha em conjunto com o HTML, controlando a aparência de elementos, como cores, tamanhos, posicionamentos, e outros aspectos de design.

Aqui estão os principais fundamentos do CSS:

### 1. **Seletores**
Seletores são usados para definir quais elementos do HTML serão estilizados. Existem diferentes tipos de seletores:

- **Seletor de elemento/tag**: Aplica o estilo a todos os elementos de um tipo.
  ```css
  p {
    color: blue;
  }
  ```
  Aplica a cor azul a todos os parágrafos (`<p>`).

- **Seletor de classe**: Estiliza elementos que possuem uma classe específica. Uma classe é definida com o prefixo `.`.
  ```css
  .destaque {
    background-color: yellow;
  }
  ```
  Aplica um fundo amarelo a todos os elementos com a classe `destaque`.

- **Seletor de ID**: Aplica o estilo a um único elemento com o ID específico, usando o prefixo `#`.
  ```css
  #titulo {
    font-size: 24px;
  }
  ```
  Define o tamanho da fonte de um elemento com o ID `titulo` como 24 pixels.

- **Seletores de pseudo-classes**: Aplicam estilos a estados específicos de elementos, como quando o mouse passa sobre eles:
  ```css
  a:hover {
    color: red;
  }
  ```
  Altera a cor de um link (`<a>`) para vermelho quando o cursor passa sobre ele.

### 2. **Propriedades e Valores**
CSS utiliza **propriedades** para definir estilos específicos, e cada propriedade recebe um ou mais **valores**. As propriedades mais comuns incluem:

- **`color`**: Define a cor do texto.
  ```css
  h1 {
    color: green;
  }
  ```

- **`background-color`**: Define a cor de fundo de um elemento.
  ```css
  div {
    background-color: lightblue;
  }
  ```

- **`font-size`**: Ajusta o tamanho da fonte.
  ```css
  p {
    font-size: 16px;
  }
  ```

- **`margin` e `padding`**: Controlam os espaços externos (margem) e internos (preenchimento) de um elemento.
  ```css
  div {
    margin: 20px;
    padding: 10px;
  }
  ```

- **`border`**: Define bordas ao redor de um elemento.
  ```css
  img {
    border: 2px solid black;
  }
  ```

### 3. **Modelo de Caixa (Box Model)**
O modelo de caixa é o conceito central para o layout em CSS, onde cada elemento é representado como uma caixa retangular. O box model consiste em:

- **Content**: A área de conteúdo (o que está dentro da caixa).
- **Padding**: O espaço entre o conteúdo e a borda.
- **Border**: A borda ao redor do padding.
- **Margin**: O espaço externo entre a borda do elemento e outros elementos.

```css
div {
  width: 300px;
  padding: 20px;
  border: 5px solid red;
  margin: 10px;
}
```

### 4. **Cascata e Especificidade**
CSS segue uma hierarquia de regras chamada **cascata**. Se múltiplas regras forem aplicadas ao mesmo elemento, o navegador determina qual regra deve ser aplicada com base em:

- **Especificidade**: Quanto mais específico o seletor, maior prioridade ele tem. IDs têm mais especificidade do que classes, e classes têm mais do que seletores de elemento.
  - Exemplo: `#titulo` (ID) tem prioridade sobre `.classe` (classe), que tem prioridade sobre `h1` (tag).

- **Ordem das Regras**: Se duas regras têm a mesma especificidade, a regra declarada mais abaixo no código será aplicada.

### 5. **Layouts**
CSS oferece diversas maneiras de organizar o layout de uma página, como:

- **Display**: A propriedade `display` define como os elementos são exibidos:
  - `block`: O elemento ocupa toda a largura disponível (ex: `<div>`).
  - `inline`: O elemento ocupa apenas o espaço necessário para seu conteúdo (ex: `<span>`).
  - `inline-block`: Combina características de `block` e `inline`.
  - `flex`: Cria layouts flexíveis para distribuir o espaço entre itens.
    ```css
    .container {
      display: flex;
      justify-content: space-between;
    }
    ```

- **Position**: Controla o posicionamento de um elemento na página:
  - `static`: O padrão, sem posicionamento especial.
  - `relative`: O elemento é posicionado em relação à sua posição normal.
  - `absolute`: Posicionado em relação ao elemento ancestral mais próximo com `position` diferente de `static`.
  - `fixed`: Fica fixo na tela, mesmo quando o usuário rola a página.
    ```css
    .box {
      position: absolute;
      top: 50px;
      left: 100px;
    }
    ```

- **Grid Layout**: Oferece uma maneira de criar layouts complexos usando linhas e colunas.
  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
  }
  ```

### 6. **Media Queries (Design Responsivo)**
Media queries permitem que o layout se adapte a diferentes tamanhos de tela, criando um **design responsivo**.

```css
@media (max-width: 600px) {
  body {
    background-color: lightgrey;
  }
}
```
Esse exemplo muda a cor de fundo para cinza claro em telas menores que 600 pixels de largura.

### 7. **Unidades de Medida**
CSS usa várias unidades para definir tamanhos e dimensões:

- **Relativas**:
  - `%`: Percentual em relação ao elemento pai.
  - `em`: Tamanho relativo à fonte do elemento pai.
  - `rem`: Tamanho relativo à fonte raiz (`<html>`).

- **Absolutas**:
  - `px`: Pixels.
  - `pt`: Pontos (usado em impressão).

### 8. **Herança**
Algumas propriedades CSS são herdadas dos elementos-pai para os elementos-filhos. Por exemplo, a cor e a fonte são herdadas:
```css
body {
  color: black;
  font-family: Arial, sans-serif;
}
```
Todos os elementos dentro de `<body>` herdarão a cor preta e a fonte Arial, a menos que sejam sobrescritos.

---

Esses são os fundamentos do CSS, essenciais para controlar a aparência e o layout de páginas web. O CSS, quando bem aplicado, proporciona uma experiência visual agradável, funcional e responsiva para os usuários.