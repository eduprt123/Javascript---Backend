const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//O slice vai dividir o array, recebendo como paramêtro o index de inicio, e o index de fim. Será gerado um novo array;
//Repare que o elemento do indice final, nao sera incluido.

const alunos2 = alunos.slice(0,10);
console.log(alunos2);

//podemos passar tambem um parámetro dinâmico:

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log (`Sala 1:  ${sala1}`);
console.log (`Sala 2:  ${sala2}`);