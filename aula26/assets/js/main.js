function main() {
  const form = document.querySelector('.imcForm');

  function imc(weight, height) {
    return weight / height ** 2;
  };

  function calculateIMC(event) {
    const formWeight = Number(document.querySelector('#input-weight').value);
    const formHeight = Number(document.querySelector('#input-height').value);
    const res = document.querySelector('#res');
    const resImc = imc(formWeight, formHeight);

    res.setAttribute('style', 'display: block;');
    event.preventDefault();

    if (formWeight > 200)
      res.innerHTML = `<p style="background-color: rgba(255, 4, 4, .8);border-radius: .15rem;">Peso inválido</p>`;
    else
      if (formHeight > 3)
        res.innerHTML = `<p style="background-color: rgba(255, 4, 4, 0.8);border-radius: .15rem;">Altura inválida</p>`;
      else {
        if (resImc < 18.5)
          res.innerHTML = `<p>Seu IMC é <b>${resImc.toFixed(2)}</b> (Abaixo do peso)</p>`;
        else if (imc < 24.9)
          res.innerHTML = `<p>Seu IMC é <b>${resImc.toFixed(2)}</b> (Peso normal)</p>`;
        else if (imc < 29.9)
          res.innerHTML = `<p>Seu IMC é <b>${resImc.toFixed(2)}</b> (Sobrepeso)</p>`;
        else if (imc < 34.9)
          res.innerHTML = `<p>Seu IMC é <b>${resImc.toFixed(2)}</b> (Obesidade de grau 1)</p>`;
        else if (imc < 39.9)
          res.innerHTML = `<p>Seu IMC é <b>${resImc.toFixed(2)}</b> (Obesidade de grau 2)</p>`;
        else
          res.innerHTML = `<p>Seu IMC é <b>${resImc.toFixed(2)}</b> (Obesidade de grau 3)</p>`;
      }
  };

  form.addEventListener('submit', calculateIMC);
};

main();