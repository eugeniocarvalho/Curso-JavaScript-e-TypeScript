const exercisesContents = [{
    name: 'Soma de números',
    url: 'aula11/index.html',
    src: 'img/print11.png'
  },
  {
    name: 'Curiosidades do seu nome',
    url: 'aula13/index.html',
    src: 'img/print13.png'
  },
  {
    name: 'Funções Math',
    url: 'aula15/index.html',
    src: 'img/print15.png'
  },
  {
    name: 'Form nome, peso e altura',
    url: 'aula20/index.html',
    src: 'img/print20.png'
  },
  {
    name: 'Calculo de IMC',
    url: 'aula26/index.html',
    src: 'img/print26.png'
  },
  {
    name: 'Ano, mês, dia e horário atual',
    url: 'aula30/index.html',
    src: 'img/print30.png'
  },
  {
    name: 'Escrevendo HTML com JS',
    url: 'aula35/index.html',
    src: 'img/print35.png'
  },
  {
    name: 'Estilizando com JS',
    url: 'aula38/index.html',
    src: 'img/print38.png'
  },
  {
    name: 'Timer',
    url: 'aula47/index.html',
    src: 'img/print47.png'
  },
  {
    name: 'Lista de tarefas',
    url: 'aula48/index.html',
    src: 'img/print48.png'
  }
];

const res = document.querySelector('#resExercises');

res.innerHTML = '';

for (let i of exercisesContents) {
  const createCard = document.createElement('div');
  const article = document.createElement('article');
  const divImg = document.createElement('div');
  const divContent = document.createElement('div');

  createCard.setAttribute('class', 'l-cards');
  article.setAttribute('class', 'c-card');
  divImg.setAttribute('class', 'card-img');
  divContent.setAttribute('class', 'content');

  divImg.innerHTML = `<a href="${i.url}"><img src="${i.src}" alt="Image Placeholder" width="100%"></img></a>`
  article.appendChild(divImg)

  divContent.innerHTML = `<span>${i.name}</span>`
  article.appendChild(divContent)
  createCard.appendChild(article);
  res.appendChild(createCard);
}