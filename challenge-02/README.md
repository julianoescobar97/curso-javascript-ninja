# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
	return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma(5, 10) + 5;

// Qual o valor atualizado dessa variável?
resultado; 20

// Declare uma nova variável, sem valor.
var frase;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adiciona_valor(frase) {
	frase = "Juliano";
	return "O valor da variável agora é " + frase;
}

// Invoque a função criada acima.
adiciona_valor(frase);

// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da varável agora é Juiano
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function tres_valores(a, b, c) {
	if(a != null && b != null && c != null) {
		var resultado = a * b * c;
		return resultado + 2;
	} else {
		return "Preencha todos os valores corretamente!";
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
tres_valores(10, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os campos corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tres_valores(10, 5, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//102

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function valida_tres(um, dois, tres) {
	if(um != null && dois == null && tres == null) {
		return um;
	} else if (um != null && dois != null && tres == null) {
		return um + dois;
	} else if (um != null && dois != null && tres != null) {
		var resultado = um + dois;
		return resultado / tres;
	} else if (um == null && dois == null && tres == null) {
		return false;
	} else {
		return null;
	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
valida_tres(); //Retorna false
valida_tres(10); //Retorna 10
valida_tres(10, 2); //Retorna 12
valida_tres(10, 2, 6); //Retorna 2
```
