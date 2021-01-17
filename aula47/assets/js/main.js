function main() {
  let res = document.querySelector('#res');
  let time = new Date();
  let seconds = 0;
  let intervaltimer;

  function updateTime() {
    let time = new Date(seconds * 1000);
    return time.toLocaleTimeString('pt-br', {
      hour12: false,
      timeZone: 'GMT'
    });
  }

  document.addEventListener('click', (e) => {
    const el = e.target

    if (el.classList.contains('start'))
      startTime();

    if (el.classList.contains('pause'))
      pauseTime();

    if (el.classList.contains('reset'))
      resetTime()

  })

  function showTime() {
    res.setAttribute('style', 'color:black');
    res.innerHTML = `${updateTime(seconds)}`;
  }

  function startTime() {
    clearInterval(intervaltimer);

    intervaltimer = setInterval(() => {
      showTime();
      seconds++;
    }, 1000);
  }

  function pauseTime() {
    res.setAttribute('style', 'color:red');

    clearInterval(intervaltimer);
  }

  function resetTime() {
    res.setAttribute('style', 'color:black');

    clearInterval(intervaltimer);
    res.innerHTML = '00:00:00'
    seconds = 0;
  }
}
main();