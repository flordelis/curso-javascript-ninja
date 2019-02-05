/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var myvar = [2, 7,8, 9, 0, 36];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function getArray(array) {
    return array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
getArray(myvar)[1];
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function getArray(array, index) {
    if (index>= 0 && index <= array.length) {
        return array[index];
    }   
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var misc = [5, 'arroz', undefined, null, true, {nome: 'Maria', idade:15}];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
getArray(misc, 0);
getArray(misc, 1);
getArray(misc, 2);
getArray(misc, 3);
getArray(misc, 4);
getArray(misc, 5);
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book(name) {

    var book = {
        sonhos : { 
            quantidadePaginas : 123,
            author : "Ana Silveira",
            editora: 'alterego'
        },
        caipira : { 
            quantidadePaginas : 323,
            author : "Manoel Santos",
            editora: 'booking'
        },
        buldoge : { 
            quantidadePaginas : 523,
            author : "Rosa Forars",
            editora: 'addint'
        }
    }
   
    return name?book[name]:book;
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

var bookname = "sonhos";
console.log("O livro "+ bookname +" tem "+ book(bookname).quantidadePaginas + " páginas!");
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log("O autor do livro "+ bookname +" é "+ book(bookname).author);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log("O livro "+ bookname +" foi publicado pela editora "+ book(bookname).editora);