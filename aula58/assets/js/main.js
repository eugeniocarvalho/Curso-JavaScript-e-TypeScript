function Calculator() {
  this.display = document.querySelector('.display');

  this.start = () => {
    clickButton();
    pressEnter();
  }

  const clickButton = () => {
    document.addEventListener('click', e => {
      const el = e.target;

      if ((el.matches('.btn-num') || el.matches('.op')) && !el.matches('.btn-calc') && !el.matches('.delete'))
        buttonToDisplay(el.textContent);

      if (el.matches('.clear'))
        buttonClear();

      if (el.matches('.btn-calc'))
        buttonCalculate();

      if (el.matches('.delete'))
        buttonDelete();
    });
  };

  const buttonCalculate = () => {
    let val = this.display.value;
    
    try {
      const result = /[a-zA-Z]+/.test(val)
      
      if (!result) {
        val = eval(val);
        
        this.display.value = val;
      } else {
        buttonClear;
        return;
      }
    } catch (error) {
      buttonClear;
    }
  };

  const buttonToDisplay = (val) => this.display.value += val;
  
  const buttonDelete = () => this.display.value = this.display.value.slice(0, -1);

  const buttonClear = () => this.display.value = '';

  const pressEnter = () => document.addEventListener('keyup', e => e.keyCode === 13 ? buttonCalculate() : '');
}

const calculator = new Calculator();

calculator.start();