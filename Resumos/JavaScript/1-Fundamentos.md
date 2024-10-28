## Operadores

Operadores em JavaScript são símbolos ou palavras-chave que realizam operações sobre valores ou variáveis. Eles permitem manipular dados, realizar cálculos e tomadas de decisão, sendo fundamentais para controlar o fluxo e a lógica de um programa. Aqui estão os principais tipos de operadores em JavaScript:

### 1. Operadores Aritméticos
Realizam operações matemáticas entre valores:
- `+` (adição): Soma valores. Ex: `5 + 2 // 7`
- `-` (subtração): Subtrai valores. Ex: `5 - 2 // 3`
- `*` (multiplicação): Multiplica valores. Ex: `5 * 2 // 10`
- `/` (divisão): Divide valores. Ex: `5 / 2 // 2.5`
- `%` (módulo): Retorna o resto da divisão. Ex: `5 % 2 // 1`
- `**` (exponenciação): Eleva um valor a uma potência. Ex: `2 ** 3 // 8`

### 2. Operadores de Atribuição
Atribuem valores a variáveis, com algumas variações para simplificar operações comuns:
- `=`: Atribui um valor. Ex: `let x = 5`
- `+=`: Soma e atribui. Ex: `x += 3 // x = x + 3`
- `-=`: Subtrai e atribui. Ex: `x -= 3 // x = x - 3`
- `*=`: Multiplica e atribui. Ex: `x *= 3 // x = x * 3`
- `/=`: Divide e atribui. Ex: `x /= 3 // x = x / 3`
- `%=`: Módulo e atribui. Ex: `x %= 3 // x = x % 3`

### 3. Operadores de Comparação
Comparam valores e retornam `true` ou `false`:
- `==`: Igualdade (com conversão de tipo). Ex: `5 == '5' // true`
- `===`: Estritamente igual (sem conversão de tipo). Ex: `5 === '5' // false`
- `!=`: Diferente (com conversão de tipo). Ex: `5 != '5' // false`
- `!==`: Estritamente diferente. Ex: `5 !== '5' // true`
- `>`: Maior que. Ex: `5 > 3 // true`
- `<`: Menor que. Ex: `5 < 3 // false`
- `>=`: Maior ou igual. Ex: `5 >= 5 // true`
- `<=`: Menor ou igual. Ex: `3 <= 5 // true`

### 4. Operadores Lógicos
Combinam valores booleanos:
- `&&`: E lógico. Retorna `true` se ambos os operandos forem `true`. Ex: `(5 > 3) && (2 < 4) // true`
- `||`: OU lógico. Retorna `true` se pelo menos um dos operandos for `true`. Ex: `(5 > 3) || (2 > 4) // true`
- `!`: NÃO lógico. Inverte o valor booleano. Ex: `!(5 > 3) // false`

### 5. Operadores de Incremento e Decremento
Aumentam ou diminuem o valor de uma variável em uma unidade:
- `++`: Incremento. Ex: `let x = 5; x++ // 6`
- `--`: Decremento. Ex: `let y = 5; y-- // 4`

### 6. Operadores de Concatenação de Strings
O operador `+` também é usado para concatenar strings:
- Ex: `"Hello, " + "World!" // "Hello, World!"`

### 7. Operador Ternário
É uma alternativa compacta para a estrutura `if-else`, com a sintaxe: `condição ? valorSeVerdadeiro : valorSeFalso`.
- Ex: `let result = (5 > 3) ? "Maior" : "Menor" // "Maior"`

### 8. Operadores Bitwise
Manipulam os bits de números:
- `&`: E bit a bit. Ex: `5 & 1 // 1`
- `|`: OU bit a bit. Ex: `5 | 1 // 5`
- `^`: XOR bit a bit. Ex: `5 ^ 1 // 4`
- `~`: NÃO bit a bit. Ex: `~5 // -6`
- `<<`: Deslocamento à esquerda. Ex: `5 << 1 // 10`
- `>>`: Deslocamento à direita. Ex: `5 >> 1 // 2`

Esses operadores são amplamente utilizados em diferentes áreas da programação e são essenciais para controle de fluxo, manipulação de dados e operações matemáticas em JavaScript.
