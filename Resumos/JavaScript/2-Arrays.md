# Arrays

Arrays em JavaScript são estruturas de dados que armazenam múltiplos valores em uma única variável, permitindo que você organize e manipule coleções de dados. Eles podem conter qualquer tipo de dado, incluindo números, strings, objetos, e até mesmo outros arrays (arrays multidimensionais).

### Características principais:

1. **Declaração**:
   Arrays podem ser declarados usando colchetes (`[]`) ou com o construtor `Array()`:
   ```js
   let arr1 = [1, 2, 3, 4]; // Declaração com colchetes
   let arr2 = new Array(1, 2, 3, 4); // Declaração com o construtor
   ```

2. **Acessando elementos**:
   Os elementos de um array são acessados pelo índice, que começa em `0`. O primeiro elemento está na posição `0`, o segundo na posição `1`, e assim por diante:
   ```js
   console.log(arr1[0]); // Saída: 1
   console.log(arr1[3]); // Saída: 4
   ```

3. **Métodos principais**:
   Arrays em JavaScript têm vários métodos integrados para manipulação de dados, incluindo:
   - `push()`: Adiciona um ou mais elementos ao final do array.
   - `pop()`: Remove o último elemento do array.
   - `shift()`: Remove o primeiro elemento do array.
   - `unshift()`: Adiciona um ou mais elementos ao início do array.
   - `splice()`: Adiciona ou remove elementos em uma posição específica.
   - `slice()`: Retorna uma cópia de uma parte do array.
   - `forEach()`: Executa uma função para cada elemento do array.
   - `map()`: Cria um novo array com os resultados de uma função aplicada a cada elemento.
   - `filter()`: Cria um novo array com todos os elementos que atendem a uma condição.
   - `reduce()`: Reduz o array a um único valor com base em uma função.

4. **Comprimento do array**:
   O comprimento (número de elementos) de um array pode ser obtido pela propriedade `length`:
   ```js
   console.log(arr1.length); // Saída: 4
   ```

5. **Arrays podem conter diferentes tipos de dados**:
   Um array pode armazenar tipos mistos de dados, como números, strings, objetos, etc.:
   ```js
   let mixedArray = [1, "string", { key: "value" }, [1, 2]];
   ```

6. **Iterando sobre um array**:
   Você pode percorrer os elementos de um array usando laços como `for`, `forEach()`, `map()` e outros:
   ```js
   arr1.forEach(function(item, index) {
       console.log(`Index: ${index}, Item: ${item}`);
   });
   ```

### Exemplo prático:
```js
let fruits = ['Apple', 'Banana', 'Orange'];

// Adicionando elementos
fruits.push('Mango');
console.log(fruits); // ['Apple', 'Banana', 'Orange', 'Mango']

// Removendo o último elemento
fruits.pop();
console.log(fruits); // ['Apple', 'Banana', 'Orange']

// Acessando elementos
console.log(fruits[1]); // 'Banana'

// Iterando sobre o array
fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

### Arrays multidimensionais:
Arrays podem conter outros arrays, criando matrizes de várias dimensões:
```js
let matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];
console.log(matrix[1][2]); // Saída: 6 (linha 1, coluna 2)
```

## Acessando elementos

### Acessando Elementos em Arrays (JavaScript)

Em JavaScript, os elementos de um array são acessados pelo **índice**, que sempre começa em `0`. O índice representa a posição do elemento dentro do array.

#### Exemplo de acesso básico:
```js
let array = [10, 20, 30, 40, 50];

console.log(array[0]); // Saída: 10
console.log(array[2]); // Saída: 30
console.log(array[4]); // Saída: 50
```

#### Acessar o último elemento:
Para acessar o último elemento de um array, você pode usar `array.length - 1`, pois o índice do último elemento será o comprimento total menos um:
```js
let array = [10, 20, 30, 40, 50];

console.log(array[array.length - 1]); // Saída: 50
```

#### Acessando elementos negativos (não nativo em JS):
JavaScript não tem suporte nativo para índices negativos como Python, onde você pode acessar elementos de trás para frente (ex: `-1` para o último). No entanto, pode-se simular essa funcionalidade:
```js
let array = [10, 20, 30, 40, 50];

// Simulação de índice negativo
console.log(array.at(-1)); // Saída: 50
console.log(array.at(-2)); // Saída: 40
```
O método `.at()` em JavaScript pode acessar índices negativos, uma nova funcionalidade útil.

### Slices em JavaScript (sem suporte direto como Python)

Em Python, o operador de fatia (slice `[:]`) permite acessar subpartes de listas ou arrays usando o formato `[start:stop:step]`. Em JavaScript, não existe suporte nativo para slicing no estilo Python, mas podemos usar o método `.slice()` para obter partes do array.

#### Sintaxe de `.slice()` em JavaScript:
```js
array.slice(início, fim);
```
- **início**: Índice de onde começa a fatia.
- **fim**: Índice onde termina a fatia (não inclui o valor desse índice).

#### Exemplo de slice:
```js
let array = [10, 20, 30, 40, 50];

console.log(array.slice(1, 4)); // Saída: [20, 30, 40]
// Pega os elementos do índice 1 até o índice 4, mas sem incluir o índice 4.
```

#### Fatiar sem especificar o final:
Quando não especificamos o final do fatiamento, o `.slice()` pega todos os elementos até o fim do array:
```js
console.log(array.slice(2)); // Saída: [30, 40, 50]
// Começa no índice 2 e vai até o final.
```

#### Slice com valores negativos:
Você também pode usar índices negativos com `.slice()` para contar de trás para frente:
```js
console.log(array.slice(-3)); // Saída: [30, 40, 50]
// Começa a fatiar três elementos a partir do final.
```

## Métodos em arrays

Aqui está uma lista dos principais métodos usados com **arrays em JavaScript**:

### 1. **Adicionar e remover elementos**:
- **`push(elemento)`**: Adiciona um ou mais elementos ao **final** do array.
  ```js
  array.push(10);
  ```

- **`pop()`**: Remove e retorna o **último** elemento do array.
  ```js
  array.pop();
  ```

- **`unshift(elemento)`**: Adiciona um ou mais elementos ao **início** do array.
  ```js
  array.unshift(10);
  ```

- **`shift()`**: Remove e retorna o **primeiro** elemento do array.
  ```js
  array.shift();
  ```

- **`splice(início, deleteCount, item1, item2, ...)`**: Adiciona ou remove elementos a partir de uma posição específica.
  - Remove ou substitui elementos existentes.
  ```js
  array.splice(1, 2); // Remove dois elementos a partir do índice 1
  array.splice(2, 0, 'novo'); // Adiciona 'novo' no índice 2 sem remover nada
  ```

### 2. **Fatiamento e concatenar arrays**:
- **`slice(início, fim)`**: Retorna uma **fatia** (subarray) do array, sem modificar o original.
  ```js
  array.slice(1, 3); // Retorna elementos de índice 1 até 3 (não incluindo 3)
  ```

- **`concat(array2, array3, ...)`**: Concatena (junta) dois ou mais arrays, retornando um **novo array**.
  ```js
  array.concat([4, 5], [6, 7]);
  ```

### 3. **Encontrar elementos**:
- **`indexOf(elemento)`**: Retorna o **primeiro índice** em que o elemento aparece no array, ou `-1` se não for encontrado.
  ```js
  array.indexOf(10);
  ```

- **`lastIndexOf(elemento)`**: Retorna o **último índice** em que o elemento aparece no array.
  ```js
  array.lastIndexOf(10);
  ```

- **`includes(elemento)`**: Verifica se o array **contém** um determinado valor. Retorna `true` ou `false`.
  ```js
  array.includes(10);
  ```

- **`find(callback)`**: Retorna o **primeiro elemento** que satisfaz a condição do callback (função).
  ```js
  array.find(element => element > 10);
  ```

- **`findIndex(callback)`**: Retorna o **índice** do primeiro elemento que satisfaz a condição do callback.
  ```js
  array.findIndex(element => element > 10);
  ```

### 4. **Iteração e transformação**:
- **`forEach(callback)`**: Executa uma função para **cada elemento** do array.
  ```js
  array.forEach(element => console.log(element));
  ```

- **`map(callback)`**: Cria um **novo array** com os resultados da função aplicada a cada elemento.
  ```js
  let newArray = array.map(element => element * 2);
  ```

- **`filter(callback)`**: Cria um **novo array** contendo apenas os elementos que **satisfazem a condição** da função.
  ```js
  let filteredArray = array.filter(element => element > 10);
  ```

- **`reduce(callback, valorInicial)`**: Reduz o array a um **único valor**, com base na função callback.
  ```js
  let sum = array.reduce((accumulator, current) => accumulator + current, 0);
  ```

- **`reduceRight(callback, valorInicial)`**: Similar ao `reduce()`, mas processa o array da direita para a esquerda.
  ```js
  let sumRight = array.reduceRight((accumulator, current) => accumulator + current, 0);
  ```

### 5. **Ordenar e reverter**:
- **`sort([compareFunction])`**: Ordena os elementos do array. Sem argumento, ordena como strings.
  ```js
  array.sort(); // Ordem alfabética ou numérica como string
  array.sort((a, b) => a - b); // Para ordenar números corretamente
  ```

- **`reverse()`**: Inverte a ordem dos elementos no array.
  ```js
  array.reverse();
  ```

### 6. **Juntar e dividir elementos**:
- **`join(separador)`**: Junta todos os elementos do array em uma **string**, separados pelo valor fornecido.
  ```js
  let joined = array.join(', '); // "1, 2, 3"
  ```

- **`toString()`**: Converte o array em uma **string**.
  ```js
  let arrayString = array.toString(); // "1,2,3"
  ```

### 7. **Outros métodos úteis**:
- **`Array.isArray(objeto)`**: Verifica se o valor fornecido é um **array**. Retorna `true` ou `false`.
  ```js
  Array.isArray([1, 2, 3]); // true
  ```

- **`fill(valor, início, fim)`**: Preenche todos os elementos do array com um valor específico.
  ```js
  array.fill(0); // Preenche o array inteiro com 0
  ```

- **`copyWithin(alvo, início, fim)`**: Copia uma parte do array para outra posição dentro do próprio array.
  ```js
  array.copyWithin(2, 0, 2); // Copia os primeiros dois elementos para a partir do índice 2
  ```

