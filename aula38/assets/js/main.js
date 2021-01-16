const paragraphs = document.querySelector('.paragraphs').querySelectorAll('p');
const backgroundColor = getComputedStyle(document.body).backgroundColor;

for (let i of paragraphs) {
  i.style.fontSize = '18pt';
  i.style.backgroundColor = backgroundColor;
  i.style.color = 'white';
}

