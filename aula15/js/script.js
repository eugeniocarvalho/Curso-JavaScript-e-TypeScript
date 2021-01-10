function number() {
  const promptNumber = Number(prompt('Digite um numero'))
  const res = document.querySelector('#res')

  res.innerHTML = `<p>Raiz quadrada:${Math.sqrt(promptNumber)}</p>
    <p>${promptNumber} ${Number.isInteger(promptNumber) ? 'é inteiro' : 'não é inteiro'} </p>
    <p>É NaN: ${Number.isNaN(promptNumber)}</p>
    <p>Arredondando para baixo: ${Math.floor(promptNumber)}</p>
    <p>Arrendondando para cima: ${Math.ceil(promptNumber)}</p>
    <p>Com duas casas decimais: ${promptNumber.toFixed(2)}</p>`
}

number()