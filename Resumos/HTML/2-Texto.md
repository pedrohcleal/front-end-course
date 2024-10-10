As tags de texto em HTML são fundamentais para formatar e estruturar o conteúdo textual de uma página web. Aqui estão os principais tipos de tags para texto, cada uma com seu propósito específico:

### 1. **Cabeçalhos**
As tags de cabeçalho são usadas para definir títulos e subtítulos, ajudando a organizar o conteúdo hierarquicamente. Existem seis níveis de cabeçalhos, do mais importante ao menos importante:

- `<h1>`: O cabeçalho mais importante, geralmente usado para o título principal da página.
- `<h2>`: Subtítulo de nível 2, usado para seções principais.
- `<h3>`: Subtítulo de nível 3, usado para subseções.
- `<h4>`: Subtítulo de nível 4, usado para sub-subseções.
- `<h5>`: Subtítulo de nível 5.
- `<h6>`: O cabeçalho menos importante.

**Exemplo:**
```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Seção</h3>
```

### 2. **Parágrafos**
Os parágrafos são definidos pela tag `<p>`. Eles são usados para agrupar blocos de texto e criar espaçamento entre os conteúdos.

**Exemplo:**
```html
<p>Este é um parágrafo de texto.</p>
```

### 3. **Ênfases**
As tags de ênfase são utilizadas para destacar ou enfatizar partes do texto:

- `<strong>`: Indica que o texto tem forte ênfase e geralmente é exibido em negrito.
- `<em>`: Indica que o texto tem ênfase e geralmente é exibido em itálico.
- `<b>`: Aplica um estilo de negrito ao texto, mas não implica ênfase semântica.
- `<i>`: Aplica um estilo de itálico ao texto, mas também não implica ênfase semântica.

**Exemplo:**
```html
<p>Este é um texto <strong>importante</strong> e este é um texto <em>enfático</em>.</p>
```

### 4. **Listas**
As listas permitem organizar itens em grupos:

- **Lista não ordenada** (`<ul>`): Usada para itens de lista que não têm uma ordem específica, geralmente exibidos com marcadores.
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  ```

- **Lista ordenada** (`<ol>`): Usada para itens de lista que têm uma ordem específica, geralmente exibidos com números.
  ```html
  <ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
  </ol>
  ```

### 5. **Links**
Os links são criados com a tag `<a>` e permitem a navegação entre páginas. Eles podem ter texto âncora que será clicável.

**Exemplo:**
```html
<a href="https://www.exemplo.com">Visite nosso site</a>
```

### 6. **Citações**
As citações são usadas para marcar texto que foi extraído de outras fontes:

- `<blockquote>`: Usada para citações longas, geralmente formatadas com recuo.
- `<q>`: Usada para citações curtas, que aparecem inline.

**Exemplo:**
```html
<blockquote>
  <p>Esta é uma citação longa de um autor famoso.</p>
</blockquote>
<p>Segundo o autor, <q>esta é uma citação curta.</q></p>
```

### 7. **Código e Preformatted Text**
As tags para código são usadas para exibir código de programação ou texto que não deve ser formatado:

- `<code>`: Usada para indicar um trecho de código.
- `<pre>`: Usada para texto pré-formatado, preservando espaços e quebras de linha.

**Exemplo:**
```html
<pre>
function helloWorld() {
    console.log("Hello, World!");
}
</pre>
<p>Veja este código: <code>console.log("Hello, World!");</code></p>
```

### 8. **Divisores e Quebras de Linha**
- `<hr>`: Insere uma linha horizontal, geralmente usada para dividir seções de conteúdo.
- `<br>`: Insere uma quebra de linha, permitindo que o texto continue na linha seguinte.

**Exemplo:**
```html
<p>Primeira linha.<br>Segunda linha.</p>
<hr>
<p>Texto após a linha horizontal.</p>
```

### 9. **Anotações e Notas de Rodapé**
- `<sup>`: Usada para texto em sobrescrito (como em fórmulas químicas).
- `<sub>`: Usada para texto em subscrito.

**Exemplo:**
```html
<p>Água: H<sub>2</sub>O</p>
<p>Matemática: x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup></p>
```

### Tags sem conteúdo

As tags sem conteúdo, também conhecidas como **tags vazias** ou **tags auto-fechadas**, são elementos HTML que não têm um conteúdo interno e não necessitam de uma tag de fechamento. Elas são usadas para inserir elementos que não exigem texto ou outras tags dentro delas. Aqui estão algumas das principais tags sem conteúdo:

### 1. **`<br>` (Quebra de Linha)**
A tag `<br>` é usada para inserir uma quebra de linha no texto. Quando esta tag é encontrada, o texto que a segue é exibido na linha seguinte.

**Exemplo:**
```html
<p>Esta é a primeira linha.<br>Esta é a segunda linha.</p>
```

### 2. **`<hr>` (Linha Horizontal)**
A tag `<hr>` é utilizada para criar uma linha horizontal que pode ser usada para separar seções de conteúdo. É comumente usada como um divisor visual.

**Exemplo:**
```html
<h2>Seção 1</h2>
<p>Conteúdo da seção 1.</p>
<hr>
<h2>Seção 2</h2>
<p>Conteúdo da seção 2.</p>
```

### 3. **`<img>` (Imagem)**
A tag `<img>` é usada para incorporar imagens em uma página. Ela requer um atributo `src` para indicar a URL da imagem e um atributo `alt` para fornecer uma descrição alternativa da imagem.

**Exemplo:**
```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

### 4. **`<input>` (Entrada de Formulário)**
A tag `<input>` é utilizada em formulários para permitir a entrada de dados do usuário. Ela pode ter vários tipos, como texto, senha, checkbox, radio, entre outros, definidos pelo atributo `type`.

**Exemplo:**
```html
<input type="text" placeholder="Digite seu nome">
<input type="checkbox" id="termos">
<label for="termos">Aceito os termos</label>
```

### 5. **`<link>` (Vinculação de Recursos)**
A tag `<link>` é usada para vincular arquivos externos ao documento HTML, como arquivos de estilo CSS. Geralmente, é utilizada dentro do elemento `<head>`.

**Exemplo:**
```html
<link rel="stylesheet" href="styles.css">
```

### 6. **`<meta>` (Metadados)**
A tag `<meta>` é utilizada para fornecer metadados sobre o documento, como a descrição da página, palavras-chave, autor e informações de codificação de caracteres. Assim como a tag `<link>`, ela é geralmente encontrada dentro do `<head>`.

**Exemplo:**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 7. **`<base>` (Base de URL)**
A tag `<base>` é usada para especificar a URL base para todas as URLs relativas na página. Assim como as outras tags vazias, ela também é colocada dentro do `<head>`.

**Exemplo:**
```html
<base href="https://www.exemplo.com/">
```

### 8. **`<area>` (Área de Imagem)**
A tag `<area>` é usada em conjunto com a tag `<map>` para definir áreas clicáveis em uma imagem. Ela é usada para criar mapas de imagem.

**Exemplo:**
```html
<img src="imagem.jpg" usemap="#mapa">
<map name="mapa">
  <area shape="rect" coords="34,44,270,350" href="link.html" alt="Descrição">
</map>
```

### 9. **`<source>` (Fonte de Mídia)**
A tag `<source>` é usada para especificar múltiplas fontes para elementos de mídia, como `<audio>` e `<video>`, permitindo que o navegador escolha a melhor fonte disponível.

**Exemplo:**
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  Seu navegador não suporta vídeo.
</video>
```

### 10. **`<track>` (Legendas para Mídia)**
A tag `<track>` é usada dentro de elementos de vídeo e áudio para especificar faixas de texto, como legendas e descrições.

**Exemplo:**
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track src="legendas.vtt" kind="subtitles" srclang="pt" label="Português">
</video>
```

