// 3 - Crie um objeto para colocar nome e duas notas. Atribua nome e duas notas para o
// primeiro objeto, que será nosso primeiro aluno. Agora crie mais um objeto para colocar
// informações do nosso segundo aluno. Mostre as informações de cada aluno no console. Mostre
// também a média do primeiro aluno e a média do segundo aluno. Por fim mostre a média desta
// turma de 2 alunos.

const alunos = [];

let aluno1 = {
  nome: "Richard",
  nota1: 7,
  nota2: 9,
};

let aluno2 = {
  nome: "William",
  nota1: 10,
  nota2: 8,
};

alunos.push(aluno1);
alunos.push(aluno2);

alunos.forEach((aluno, index) => {
  console.log(aluno.nome);
  console.log(aluno.nota1);
  console.log(aluno.nota2);

  const media = (aluno.nota1 + aluno.nota2) / 2;
  alunos[index].media = media;
});

const mediaTurma =
  alunos.reduce((curr, next) => curr + next.media, 0) / alunos.length;
console.log("Média da turma:", mediaTurma);
