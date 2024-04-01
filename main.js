const alunosSala = [
    { nome: 'Camila', nota: 6},
    { nome: 'Lucas', nota: 4},
    { nome: 'Hebert', nota: 8},
    { nome: 'Yasmin', nota: 7},
    { nome: 'Natalia', nota: 6},
    { nome: 'Vagner', nota: 6},
    { nome: 'Nathan', nota: 5},
    { nome: 'Vinicius', nota: 7},
    { nome: 'Eduardo', nota: 9},
    { nome: 'Priscila', nota: 5},
];

function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

const estudantesAprovadosArray = alunosAprovados(alunosSala);
console.log(estudantesAprovadosArray);