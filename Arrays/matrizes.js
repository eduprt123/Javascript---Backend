const alunos = [ 'Joao', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

//Criando uma lista de listas:

const listaDeAlunosEMedias = [alunos, medias];
console.log(listaDeAlunosEMedias);

//Para acessar o elemento de uma lista, é necessário passar a posição da lista que contém o elemento, e 
//a posição do elemento que deseja acessar na lista.
//ex:

console.log(
    `O aluno da posição 1 da lista de alunos é ${listaDeAlunosEMedias[0][1]}`
    ); //Juliana

console.log(`E sua média é: ${listaDeAlunosEMedias[1][1]}`);
//8

//Repare que é passado o index da lista, na lista mais externa, e o index do elemento na lista que foi acessada.