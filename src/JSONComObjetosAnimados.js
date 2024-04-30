const aluno = {
    nome: "Pedro",
    idade: 20,
    curso: {
      nome: "Engenharia",
      semestre: 3
    },
    notas: {
      matematica: 8,
      fisica: 7,
      quimica: 9, 
    }
  };
  
  const jsonAluno = JSON.stringify(aluno);
  console.log(jsonAluno);
  