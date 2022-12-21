const notas = [10, 6.8, 8, 7.5];

const media = notas.reduce((el, cc) => el + cc) / 4;

console.log(media);