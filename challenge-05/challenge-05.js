/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1, 'Mel', 2, true, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array) {
    return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myArray)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newFunction(arr, indice) {
    return arr[indice];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myvar = [15, 'Olá Mundo!', false, {nome: 'Juca', idade: 24}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
newFunction(myvar, 0);
newFunction(myvar, 1);
newFunction(myvar, 2);
newFunction(myvar, 3);
newFunction(myvar, 4);

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
function book(arg) {
    var obj = {
        crepusculo: {
            quantidadePaginas: 190,
            autor: 'Fulaninho',
            editora: 'Aquela'
        },
        hp: {
            quantidadePaginas: 200,
            autor: 'JK',
            editora: 'Essa mesmo'
        },
        substituto: {
            quantidadePaginas: 336,
            autor: 'Brenna Yovanoff',
            editora: 'A mais braba'
        }
    };

    return arg !== undefined ? obj[arg] : obj;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro HP tem ' + book('hp').quantidadePaginas + ' páginas!';

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro Substituto é ' + book('substituto').autor + '.';

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro Crepusculo foi publicado pela editora ' + book('crepusculo').editora + '.';
