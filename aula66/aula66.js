const numeros = [5, 50, 20, 10, 1, 2, 5, 6, 13, 55, 3, 23];

const dobro = numeros.map((numero) => numero ** 2);

console.log(dobro)

const pessoas = [
  {"nome": 'Luiz', idade: 33},
  {"nome": 'Roberta', idade: 12},
  {"nome": 'Ana', idade: 45},
  {"nome": 'John', idade: 24},
  {"nome": 'Marcos', idade: 63},
]


const apenasNome = pessoas.map(pessoa => pessoa.nome);
console.log(apenasNome);

const objApenasIdade = pessoas.map(pessoa => ({'idade': pessoa.idade}));
console.log(objApenasIdade);

const addIdPessoas = pessoas.map((pessoa, index) => {
  const newObject = {...pessoa};

  newObject["id"] = index + 1;

  return newObject;
});
console.log(addIdPessoas);

console.log(pessoas)