// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
function procesarPedido(pedido) {
    const nombreCliente = pedido.shift();  // Saca el primer elemento (nombre del cliente)
    pedido.unshift('bebida');  // Añade "bebida" al inicio del array
    pedido.push(nombreCliente);  // Añade el nombre del cliente al final
    return pedido;  // Devuelve el array modificado (opcional si deseas ver el resultado)
}

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
function sumarPares(numeros) {
    let suma = 0;
    numeros.forEach(numero => {
        if (numero % 2 === 0) {  // Verifica si el número es par
            suma += numero;
        }
    });
    return suma;
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras.
function palabrasTerminanConA(palabras) {
    return palabras.every(palabra => palabra.endsWith('a'));  // Verifica si todas las palabras terminan con "a"
}

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras`.
function buscaPalabras(words, word) {
    const index = words.indexOf(word);  // Encuentra el índice de la palabra
    if (index === -1) return [];  // Si no encuentra la palabra, devuelve un array vacío
    return words.slice(index + 1);  // Devuelve las palabras a partir del índice
}

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript`.
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const j = matrix[i].indexOf('JavaScript');  // Busca "JavaScript" en la fila
        if (j !== -1) {
            return [i, j];  // Devuelve la posición si lo encuentra
        }
    }
    return [-1, -1];  // Si no lo encuentra, devuelve [-1, -1]
}

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages`.
function findMinMaxPages(books) {
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) minIndex = i;  // Encuentra el índice del libro con menos páginas
        if (books[i] > books[maxIndex]) maxIndex = i;  // Encuentra el índice del libro con más páginas
    }
    return [minIndex, maxIndex];  // Devuelve un array con ambos índices
}

// Ejemplos de prueba
console.log(procesarPedido(['Juan', 'pizza', 'ensalada'])); // -> ["bebida", "pizza", "ensalada", "Juan"]
console.log(sumarPares([1, 2, 3, 4, 5])); // -> 6 (2 + 4)
console.log(palabrasTerminanConA(['casa', 'silla', 'mesa'])); // -> true
console.log(buscaPalabras(['hola', 'mundo', 'JavaScript'], 'mundo')); // -> ["JavaScript"]

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
];
console.log(findJavaScript(matrix)); // -> [0, 2]

const libros = [350, 120, 540, 275, 390, 130, 670];
console.log(findMinMaxPages(libros)); // -> [1, 6]

