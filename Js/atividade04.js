// 4 - Crie cinco objetos JavaScript dentro de um Array contendo nome(texto), idade(número),
// skills (array), ou seja um total de cinco alunos. Agora crie uma função que receba estes
// cinco objetos e mais um parâmetro skill. Dependendo da skill enviada mostrar no
// console.log(), quais alunos têm a skill enviada por parâmetro, mostrar todo o objeto.
// Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar chamar a função enviando
// (alunos, “JavaScript”), precisa mostrar o Pedro e qual mais se encaixa nessa skill.

const alunos = [
  {
    nome: "Richard",
    idade: 27,
    skills: ["Javascript", "Typescript", "React"],
  },
  {
    nome: "William",
    idade: 26,
    skills: ["Javascript", "NodeJs", "Vue.JS"],
  },
  {
    nome: "Silva",
    idade: 25,
    skills: ["Dart", "Flutter", "Java"],
  },
  {
    nome: "Pedro",
    idade: 24,
    skills: ["Php", "Kotlin", "NodeJs"],
  },
  {
    nome: "Grazi",
    idade: 22,
    skills: ["C", "Java", "React"],
  },
];

const filtraPorSkill = (lista, habilidade) => {
  const listaFiltrada = lista.filter((aluno) =>
    aluno.skills.includes(habilidade)
  );

  console.log(listaFiltrada);
};

filtraPorSkill(lista, "Javasctipt");
