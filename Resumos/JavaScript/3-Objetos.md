Em JavaScript, um **objeto** é uma estrutura que permite armazenar **dados e funcionalidades** (como variáveis e funções) em pares de chave-valor. Objetos são um dos tipos mais importantes em JavaScript, usados para representar entidades do mundo real, como usuários, produtos, entre outros.

### Definindo um Objeto
Um objeto pode ser criado usando **literal de objeto** ou com o **construtor** `Object`.

#### Exemplo usando literal:
```js
let pessoa = {
  nome: 'João',
  idade: 30,
  profissao: 'Engenheiro',
  falar: function() {
    console.log('Olá, meu nome é ' + this.nome);
  }
};
```
- **Chaves**: Podem ser strings ou símbolos que identificam os valores.
- **Valores**: Podem ser qualquer tipo de dado, como strings, números, arrays, ou mesmo funções (conhecidas como métodos).

#### Exemplo usando `Object`:
```js
let carro = new Object();
carro.marca = 'Toyota';
carro.modelo = 'Corolla';
carro.ano = 2020;
```

### Acessando Propriedades
Você pode acessar as propriedades de um objeto usando **notação de ponto** (`.`) ou **notação de colchetes** (`[]`).

#### Exemplo de acesso:
```js
console.log(pessoa.nome); // Acesso com notação de ponto
console.log(pessoa['idade']); // Acesso com notação de colchetes
```
- A **notação de colchetes** é útil quando o nome da chave é dinâmico ou contém caracteres especiais:
  ```js
  let chave = 'idade';
  console.log(pessoa[chave]); // Saída: 30
  ```

### Adicionando e Alterando Propriedades
Propriedades podem ser adicionadas ou modificadas dinamicamente após a criação do objeto.
```js
pessoa.altura = 1.75; // Adiciona uma nova propriedade
pessoa.idade = 31; // Modifica uma propriedade existente
```

### Removendo Propriedades
Você pode remover propriedades de um objeto usando o operador `delete`.
```js
delete pessoa.profissao;
```

### Verificar se Propriedade Existe
Para verificar se um objeto contém uma determinada propriedade, você pode usar o operador **`in`** ou o método **`hasOwnProperty()`**.
```js
console.log('nome' in pessoa); // true
console.log(pessoa.hasOwnProperty('altura')); // true
```

### Métodos de Objetos
Quando uma propriedade de um objeto é uma função, ela é chamada de **método**.

#### Exemplo:
```js
pessoa.falar = function() {
  console.log('Oi, eu sou o ' + this.nome);
};

pessoa.falar(); // Saída: "Oi, eu sou o João"
```

Aqui, o uso de **`this`** refere-se ao próprio objeto (neste caso, `pessoa`), permitindo acessar outras propriedades do objeto dentro de seus métodos.

### Percorrendo Objetos
Você pode percorrer as propriedades de um objeto com o loop **`for...in`**.

#### Exemplo:
```js
for (let chave in pessoa) {
  console.log(chave + ': ' + pessoa[chave]);
}
// Saída: 
// nome: João
// idade: 31
// altura: 1.75
```

### Clonando Objetos
Objetos podem ser clonados (copiados) de várias maneiras. No entanto, objetos em JavaScript são copiados por **referência**, então, ao modificar uma cópia, o objeto original também será modificado. Para uma cópia "rasa", podemos usar:

#### Usando `Object.assign()`:
```js
let pessoaCopia = Object.assign({}, pessoa);
```

#### Usando Spread Operator (`...`):
```js
let pessoaCopia = { ...pessoa };
```

Esses métodos criam uma **cópia rasa** do objeto, ou seja, cópias das referências de propriedades aninhadas (como objetos ou arrays dentro do objeto) ainda apontam para os mesmos dados.

### Objetos Aninhados
Objetos podem conter outros objetos como valores, formando uma estrutura aninhada.

#### Exemplo:
```js
let empresa = {
  nome: 'Tech Corp',
  localizacao: {
    cidade: 'São Paulo',
    pais: 'Brasil'
  },
  empregados: 100
};

console.log(empresa.localizacao.cidade); // Saída: São Paulo
```

### Métodos Úteis de Objetos
O objeto `Object` tem métodos nativos úteis para trabalhar com objetos:

- **`Object.keys(obj)`**: Retorna um array com as **chaves** (nomes das propriedades) do objeto.
  ```js
  Object.keys(pessoa); // ["nome", "idade", "altura"]
  ```

- **`Object.values(obj)`**: Retorna um array com os **valores** das propriedades do objeto.
  ```js
  Object.values(pessoa); // ["João", 31, 1.75]
  ```

- **`Object.entries(obj)`**: Retorna um array de arrays, onde cada subarray contém o **par chave-valor** do objeto.
  ```js
  Object.entries(pessoa); // [["nome", "João"], ["idade", 31], ["altura", 1.75]]
  ```

- **`Object.freeze(obj)`**: Congela o objeto, impedindo qualquer modificação nas suas propriedades.
  ```js
  Object.freeze(pessoa);
  pessoa.altura = 1.80; // Não vai alterar o objeto
  ```

- **`Object.seal(obj)`**: Sela o objeto, permitindo que as propriedades existentes sejam modificadas, mas não permite adicionar ou remover propriedades.
  ```js
  Object.seal(pessoa);
  ```
  