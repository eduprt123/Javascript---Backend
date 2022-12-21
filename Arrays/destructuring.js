//Juntando arrays em um array so:
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];
console.log(numeros);

//atribuindo por destructuring usando rest operator: 
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];
//repare que nesse caso, pela ordem, num1 = 1, num2 = 2 e outrosNumeros = [3, 4, 5];
console.log(num1, num2, outrosNumeros);

//Passando um valor padrão => Muito utilizado para quando não houver certeza do dado que se esta trabalhando.
const [nomePessoa = 'Ju'] = [];
//Como o array sera vazio, o resultado será 'Ju;
console.log(nomePessoa);

//Passando novos parametros para objetos:
const pessoa = {
    nome: 'Ju',
    idade: 25
}

//passando os dados de pessoa para um novo array, com dados adicionais:
const pessoaComTelefone = {...pessoa, telefone: 123456789}

console.log(pessoa);
console.log(pessoaComTelefone);

//pegando variaveis do objeto com desctructuring:
const { nome, idade, telefone } = pessoaComTelefone;
console.log(nome, idade, telefone )

