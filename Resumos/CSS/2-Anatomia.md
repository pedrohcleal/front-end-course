# Regras

As **regras do CSS** (Cascading Style Sheets) são usadas para estilizar elementos em páginas HTML. Elas consistem em dois principais componentes: **seletores** e **declarações**. Aqui está uma descrição detalhada:

### 1. **Estrutura básica de uma regra CSS**
Uma regra CSS é composta por:

- **Seletor:** Define quais elementos HTML serão afetados pela regra.
- **Declaração:** Consiste em uma propriedade CSS e um valor, separados por dois pontos, e finalizados com um ponto e vírgula.

**Exemplo básico:**
```css
h1 {
  color: blue;
  font-size: 24px;
}
```

- **Seletor:** `h1` (altera todos os elementos `<h1>`).
- **Declaração 1:** `color: blue;` (define a cor do texto como azul).
- **Declaração 2:** `font-size: 24px;` (define o tamanho da fonte em 24 pixels).

### 2. **Tipos de Seletores**

- **Seletor de tipo:** Seleciona elementos pelo nome da tag HTML. Ex: `p`, `h1`, `div`.
- **Seletor de classe:** Seleciona elementos com uma classe específica, precedido por um ponto (`.`). Ex: `.menu`.
- **Seletor de ID:** Seleciona um elemento com um ID específico, precedido por uma cerquilha (`#`). Ex: `#header`.
- **Seletores de atributo:** Seleciona elementos com um atributo específico. Ex: `input[type="text"]`.
- **Seletores descendentes/combinados:** Aplica a estilos a elementos específicos dentro de outros. Ex: `div p` (altera os `<p>` dentro de um `<div>`).

### 3. **Propriedades e valores**
As propriedades no CSS definem o aspecto visual que será modificado, e os valores atribuem a elas o comportamento ou a aparência desejada.

- **Exemplo de propriedades comuns:**
  - `color`: Define a cor do texto.
  - `background-color`: Define a cor de fundo.
  - `margin`: Define as margens em torno de um elemento.
  - `padding`: Define o espaçamento interno de um elemento.
  - `border`: Define bordas ao redor de um elemento.

### 4. **Especificidade**
A especificidade determina qual regra será aplicada quando múltiplas regras se aplicarem ao mesmo elemento. Regras mais específicas sobrepõem regras mais gerais.

A ordem de prioridade é:
1. **Estilos em linha** (dentro do HTML) têm a maior prioridade.
2. **IDs** têm mais prioridade do que classes ou tipos de elemento.
3. **Classes e pseudoclasses** (`.class`, `:hover`) têm prioridade média.
4. **Seletores de tipo** (`div`, `p`) e pseudoelementos (`::before`) têm prioridade mais baixa.

### 5. **Cascata**
O CSS é "cascading" (em cascata), o que significa que regras conflitantes são resolvidas por três princípios:
1. **Origem do estilo** (autor, usuário, navegador).
2. **Especificidade** (como explicado acima).
3. **Importância**: Regras marcadas com `!important` sobrepõem outras regras, independente da especificidade.

### 6. **Herança**
Algumas propriedades CSS são herdadas de elementos pais para filhos, como `font-size` e `color`. Outras, como `margin` e `padding`, não são herdadas, a menos que explicitamente definidas.

### 7. **Pseudo-classes e pseudo-elementos**
- **Pseudo-classes**: Selecionam elementos com base em seu estado. Ex: `:hover` (elemento em que o mouse está em cima).
- **Pseudo-elementos**: Estilizam partes específicas de elementos. Ex: `::before` (inserir conteúdo antes de um elemento).

**Exemplo:**
```css
a:hover {
  color: red;
}
```

### 8. **Unidades de medida**
O CSS utiliza várias unidades para definir tamanhos, espaçamentos e proporções, como:
- **px**: Pixels.
- **%**: Porcentagem, em relação ao tamanho do elemento pai.
- **em/rem**: Tamanhos relativos à fonte do elemento.

Essas são as bases das regras no CSS. Há muito mais detalhes à medida que você avança, como animações, flexbox, grid e media queries para responsividade.

## External, internal e inline CSS

O CSS pode ser aplicado a uma página HTML de três maneiras principais: **inline**, **internal** e **external**. Cada uma tem suas características, vantagens e desvantagens. Vamos detalhá-las:

### 1. **External CSS (CSS externo)**
O CSS externo é definido em um arquivo separado com extensão `.css`. Esse arquivo é vinculado à página HTML usando a tag `<link>` dentro do `<head>`.

#### Exemplo:
Arquivo `styles.css`:
```css
body {
  background-color: #f0f0f0;
}

h1 {
  color: blue;
  font-size: 36px;
}
```

Arquivo `index.html`:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de CSS Externo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Olá Mundo!</h1>
</body>
</html>
```

#### Vantagens:
- **Manutenção facilitada:** Estilos podem ser reutilizados em várias páginas, tornando mais fácil a gestão de grandes sites.
- **Separação de conteúdo e estilo:** O código HTML fica mais limpo e organizado.
- **Carregamento mais rápido:** Uma vez carregado, o arquivo CSS pode ser armazenado em cache pelo navegador, melhorando o desempenho.

#### Desvantagens:
- **Requisição adicional ao servidor:** Cada arquivo externo gera uma requisição HTTP, o que pode impactar o tempo de carregamento, especialmente se houver muitos arquivos.

---

### 2. **Internal CSS (CSS interno)**
O CSS interno é aplicado diretamente dentro da página HTML, utilizando a tag `<style>` dentro do `<head>` da página.

#### Exemplo:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de CSS Interno</title>
    <style>
        body {
            background-color: #f0f0f0;
        }

        h1 {
            color: blue;
            font-size: 36px;
        }
    </style>
</head>
<body>
    <h1>Olá Mundo!</h1>
</body>
</html>
```

#### Vantagens:
- **Facilidade de uso para uma única página:** Útil quando você deseja aplicar estilos apenas em uma página específica, sem criar um arquivo externo.
- **Imediato e simples:** Evita a necessidade de criar um arquivo CSS separado.

#### Desvantagens:
- **Não reutilizável:** Não pode ser compartilhado entre várias páginas, o que pode resultar em duplicação de código.
- **Menos eficiente:** Aumenta o tamanho do arquivo HTML, o que pode resultar em tempos de carregamento mais longos.

---

### 3. **Inline CSS (CSS embutido)**
No CSS inline, o estilo é aplicado diretamente ao elemento HTML, usando o atributo `style` dentro da tag. Cada elemento estilizado precisa ter seus estilos definidos individualmente.

#### Exemplo:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de CSS Inline</title>
</head>
<body>
    <h1 style="color: blue; font-size: 36px;">Olá Mundo!</h1>
</body>
</html>
```

#### Vantagens:
- **Aplicação rápida e direta:** Ideal para ajustes rápidos ou para estilizar um único elemento.
- **Prioridade alta:** Como o CSS inline tem maior especificidade, pode sobrepor regras internas ou externas, se necessário.

#### Desvantagens:
- **Difícil de manter:** Para grandes projetos, aplicar estilos diretamente aos elementos pode se tornar confuso e difícil de gerenciar.
- **Inconsistência:** Pode resultar em estilos inconsistentes se usado de maneira indiscriminada.
- **Repetição:** Não permite reutilização, obrigando a repetição de estilos para elementos similares.

---

### Comparação entre os três métodos:

| Característica           | External CSS  | Internal CSS  | Inline CSS   |
|--------------------------|---------------|---------------|--------------|
| **Arquivo separado**      | Sim           | Não           | Não          |
| **Reutilização**          | Alta          | Baixa         | Nenhuma      |
| **Facilidade de manutenção** | Alta       | Média         | Baixa        |
| **Impacto no carregamento** | Cacheável (rápido após o primeiro carregamento) | Aumenta o tamanho do HTML | Aumenta o tamanho do HTML |
| **Especificidade**        | Baixa         | Média         | Alta         |

Em projetos maiores e bem estruturados, a abordagem mais comum é usar **External CSS** para facilitar a manutenção e melhorar o desempenho. **Internal CSS** é utilizado para casos específicos, como ao testar rapidamente estilos em uma única página. **Inline CSS** deve ser evitado, exceto para alterações rápidas ou exceções.

### Ordem do CSS

A ordem de aplicação das regras de CSS, também conhecida como **cascata** no CSS, segue um conjunto de princípios que determinam qual estilo será aplicado quando houver várias regras que podem afetar o mesmo elemento. Esses princípios incluem **especificidade**, **origem do estilo** e **ordem de declaração**.

### 1. **Especificidade**
A especificidade determina a importância de cada regra CSS com base nos tipos de seletores usados. Quanto mais específico o seletor, maior a prioridade da regra. A especificidade é calculada de acordo com o seguinte critério:

- **Estilos em linha (inline CSS)**: Têm a maior prioridade. Ex: `<p style="color: red;">Texto</p>`.
- **IDs**: Seletores de ID têm alta prioridade. Ex: `#id { color: red; }`.
- **Classes, pseudoclasses e atributos**: Seletores de classe, pseudoclasses (`:hover`, `:focus`) e seletores de atributo têm prioridade média. Ex: `.classe { color: red; }`.
- **Elementos e pseudoelementos**: Seletores de tipo (nome de tags) e pseudoelementos (`::before`, `::after`) têm a menor prioridade. Ex: `h1 { color: red; }`.

### Exemplo de cálculo de especificidade:

- Estilo em linha: `1000` pontos.
- Seletor de ID: `100` pontos.
- Seletor de classe, pseudoclasse, ou atributo: `10` pontos.
- Seletor de tipo (nome de tag) ou pseudoelemento: `1` ponto.

#### Exemplo prático:
```css
p { color: blue; }            /* Especificidade: 1 */
.class-name { color: green; }  /* Especificidade: 10 */
#id { color: red; }            /* Especificidade: 100 */
```

Se um elemento `<p>` tiver todas essas regras aplicadas, a regra com o seletor de ID prevalecerá (`color: red`), pois tem a maior especificidade.

### 2. **Origem do estilo**
O CSS é aplicado de diferentes fontes, e a ordem de prioridade dessas fontes também afeta a cascata:

1. **Estilos do navegador (user agent styles)**: São os estilos padrões que o navegador aplica a todos os elementos HTML (como a margem padrão de um `<body>`).
2. **Estilos do usuário**: Definidos pelo usuário nas configurações do navegador (raro).
3. **Estilos do autor**: Definidos no código CSS pelo desenvolvedor (interno, externo ou inline).

Em geral, os **estilos do autor** têm prioridade sobre os **estilos do navegador** e os **estilos do usuário**.

### 3. **Regras importantes (`!important`)**
A declaração `!important` em uma regra CSS sobrepõe todas as outras, independentemente da especificidade. É usada para forçar a aplicação de uma regra, mas deve ser usada com cautela, pois pode dificultar a manutenção do código.

#### Exemplo:
```css
p { color: blue !important; }
p { color: red; }
```
Aqui, o texto será azul, mesmo que uma regra posterior defina a cor como vermelha, devido ao `!important`.

### 4. **Ordem de declaração (cascata)**
Se duas regras tiverem a mesma especificidade e não usarem `!important`, a última regra declarada no código CSS prevalecerá. Isso ocorre porque o CSS é "cascading", ou seja, as regras "caem" uma sobre a outra na ordem em que aparecem.

#### Exemplo:
```css
p { color: blue; }
p { color: red; }
```
Neste caso, o texto será vermelho, pois a última regra (a que define `color: red`) sobrepõe a anterior.

### Resumo da ordem de prioridade no CSS:

1. **Estilos em linha** (maior prioridade).
2. **Estilos com `!important`**.
3. **Especificidade do seletor** (ID > classe > tipo de elemento).
4. **Ordem de declaração** (última regra definida prevalece, se houver empates na especificidade).
5. **Estilos do navegador (user agent styles)** (menor prioridade).

Ao entender essas regras, você consegue resolver conflitos no CSS e garantir que os estilos corretos sejam aplicados conforme o esperado.