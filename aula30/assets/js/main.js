function main() {
  function getWeekDay() {
    const weekDay = new Date().getDay();

    switch (weekDay) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Segunda-feira';
      case 2:
        return 'Terça-feira';
      case 3:
        return 'Quarta-feira';
      case 4:
        return 'Quinta-feira';
      case 5:
        return 'Sexta-feira';
      case 6:
        return 'Sábado';
      default:
        return 'dia inválido';
    }
  }

  function getMonth() {
    const month = new Date().getMonth();

    switch (month) {
      case 0:
        return 'Janeiro';
      case 1:
        return 'Fevereiro';
      case 2:
        return 'Março';
      case 3:
        return 'Abril';
      case 4:
        return 'Maio';
      case 5:
        return 'Junho';
      case 6:
        return 'Julho';
      case 7:
        return 'Agosto';
      case 8:
        return 'Setembro';
      case 9:
        return 'Outubro';
      case 10:
        return 'Novembro';
      case 11:
        return 'Dezembro';
      default:
        return 'Mês inválido';
    }
  }

  function getHour() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();

  return `${hour}:${minute}`
  }

  const weekDay = getWeekDay();
  const day = new Date().getDate();
  const month = getMonth();
  const year = new Date().getFullYear();
  const hour = getHour();

  const res = document.querySelector('#res');
  res.innerHTML = `${weekDay}, ${day} de ${month}, de ${year} ${hour}`;
};

main();