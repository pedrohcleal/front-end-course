As tabelas em HTML são usadas para organizar dados em linhas e colunas. Elas são úteis para exibir informações tabulares, como horários, preços e listas de produtos. Uma tabela HTML é composta de várias tags que definem a estrutura e o conteúdo. Vamos entender a estrutura básica e os principais elementos envolvidos.

### Estrutura Básica de uma Tabela

A estrutura básica de uma tabela em HTML é definida pela tag `<table>`, e cada tabela é dividida em três principais componentes:

1. **Cabeçalho**: Definido pela tag `<thead>`, contém a linha de cabeçalhos da tabela.
2. **Corpo**: Definido pela tag `<tbody>`, contém o conteúdo principal da tabela, ou seja, as linhas e colunas.
3. **Rodapé (opcional)**: Definido pela tag `<tfoot>`, usado para resumir ou calcular totais ao final da tabela.

### Principais Tags Usadas em Tabelas

- **`<table>`**: Define o início de uma tabela.
- **`<thead>`**: Agrupa as linhas do cabeçalho da tabela.
- **`<tbody>`**: Agrupa as linhas do corpo da tabela.
- **`<tfoot>`**: Agrupa as linhas do rodapé da tabela (opcional).
- **`<tr>`**: Define uma linha na tabela.
- **`<th>`**: Define uma célula de cabeçalho (título de uma coluna ou linha), geralmente com formatação em negrito.
- **`<td>`**: Define uma célula de dados da tabela.

### Exemplo de Tabela Simples

```html
<table border="1">
  <thead>
    <tr>
      <th>Produto</th>
      <th>Preço</th>
      <th>Quantidade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arroz</td>
      <td>R$ 10,00</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Feijão</td>
      <td>R$ 8,00</td>
      <td>3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total</td>
      <td>8</td>
    </tr>
  </tfoot>
</table>
```

**Resultado Renderizado:**

| Produto | Preço  | Quantidade |
|---------|--------|------------|
| Arroz   | R$ 10,00 | 5        |
| Feijão  | R$ 8,00  | 3        |
| **Total** |          | 8        |

### Atributos Comuns

- **`border`**: Define a espessura da borda da tabela. O exemplo acima usa `border="1"` para criar uma borda ao redor das células.
- **`colspan`**: Faz com que uma célula ocupe mais de uma coluna. Usado no exemplo acima na célula "Total".
- **`rowspan`**: Faz com que uma célula ocupe mais de uma linha.

**Exemplo de `colspan` e `rowspan`:**

```html
<table border="1">
  <tr>
    <th>Nome</th>
    <th colspan="2">Contato</th>
  </tr>
  <tr>
    <td>João</td>
    <td>Email</td>
    <td>Telefone</td>
  </tr>
  <tr>
    <td rowspan="2">Maria</td>
    <td>Email</td>
    <td>Telefone</td>
  </tr>
  <tr>
    <td>Endereço</td>
    <td>Telefone</td>
  </tr>
</table>
```

### Estilizando Tabelas com CSS

As tabelas podem ser estilizadas usando CSS para torná-las mais atraentes e legíveis.

- **`border-collapse`**: Junta as bordas da tabela em uma única linha, ao invés de deixar bordas duplas.
- **`padding`**: Adiciona espaçamento interno nas células.
- **`text-align`**: Define o alinhamento do texto nas células.
- **`background-color`**: Define a cor de fundo das células.

**Exemplo de Estilização com CSS:**

```html
<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid black;
  }
  th {
    background-color: #f2f2f2;
  }
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
</style>

<table>
  <tr>
    <th>Produto</th>
    <th>Preço</th>
    <th>Quantidade</th>
  </tr>
  <tr>
    <td>Arroz</td>
    <td>R$ 10,00</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Feijão</td>
    <td>R$ 8,00</td>
    <td>3</td>
  </tr>
</table>
```

### Tabelas Acessíveis

Para melhorar a acessibilidade de tabelas, especialmente para leitores de tela, é importante usar os seguintes atributos:

- **`scope`**: Define o escopo de uma célula de cabeçalho, indicando se ela se refere a uma coluna ou linha.
  
**Exemplo:**
```html
<th scope="col">Produto</th>
<th scope="row">João</th>
```

### Conclusão

As tabelas em HTML são uma maneira eficaz de organizar dados estruturados. Usando tags como `<table>`, `<tr>`, `<th>` e `<td>`, você pode criar uma estrutura de tabela básica, que pode ser personalizada com atributos HTML e estilizada com CSS. Ao implementar tabelas, considere boas práticas de acessibilidade e estilos para garantir uma apresentação clara e acessível dos dados.