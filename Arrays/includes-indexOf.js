const alunos = [ 'Joao', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];


//Criando uma função para verificar se um aluno existe:

function exibeAlunoENota(nomeDoAluno) {
    //desestruturando as listas em novos arrays.

    const [alunos, medias] = listaDeAlunosEMedias;
    //Acessando a lista com os nomes dos alunos, e verificando, se o aluno passado por parametro esta incluso.
    if(alunos.includes(nomeDoAluno)) {
        
        //Se o aluno existe, vamos pegar o index dele no array:
        const indice = alunos.indexOf(nomeDoAluno);
        //Com o index dele, podemos pegar a nota do aluno, no array de nota utilizando o index.
        const mediaDoAluno = medias[indice];
    
        console.log(`O aluno: ${nomeDoAluno} tem a média ${mediaDoAluno}`);
    } else {
        console.log('Aluno não encontrado');
    }
}

exibeAlunoENota('Ana')