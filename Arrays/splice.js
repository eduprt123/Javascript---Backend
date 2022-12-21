const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//remover nomes especificos passando o index do elemento.
//No método splice, é passado o indice inicial do elemento, e quantos elementos a partir dele serão removidos.

nomes.splice(1,2, 'Rodrigo'); // A partir do indice 1, serão removidos 2 elementos:

console.log(nomes);

//O splice também permite passar um novo elemento para ser adicionado no lugar em que os elementos foram removidos.

