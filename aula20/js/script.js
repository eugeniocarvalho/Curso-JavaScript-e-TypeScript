function main() {
  const form = document.querySelector('.form');
  const res = document.querySelector('#res');
  const peoples = []

  function sendData(event) {
    event.preventDefault();

    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;

    peoples.push({
      firstName,
      lastName,
      weight,
      height
    });

    console.log(peoples)
    res.innerHTML += `<p>${firstName} ${lastName} ${weight} ${height}</p>`;
  }

  form.addEventListener('submit', sendData);
}

main();