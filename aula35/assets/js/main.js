const elements = [{ tag: 'p', text: 'Frase 1' },
{ tag: 'div', text: 'Frase 2' },
{ tag: 'footer', text: 'Frase 3' },
{ tag: 'sections', text: 'Frase 4' },
];
const res = document.querySelector('.container');
const createdDiv = document.createElement('div');

function addChild(tag, text) {
  createdElement = document.createElement(tag);
  createdElement.innerText = text;

  return createdElement;
}

for (i in elements) {
  let {tag, text} = elements[i];

  createdDiv.appendChild(addChild(tag, text));
}

res.appendChild(createdDiv);