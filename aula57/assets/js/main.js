function createCalculator() {
  return {
    display: document.querySelector('.display'),

    start() {
      this.clickButton();
      this.pressEnter();
    },

    clickButton() {
      document.addEventListener('click', e => {
        const el = e.target;

        if ((el.matches('.btn-num') || el.matches('.op')) && !el.matches('.btn-calc') && !el.matches('.delete')) {
          this.buttonToDisplay(el.textContent);
        }

        if (el.matches('.clear'))
          this.buttonClear();

        if (el.matches('.btn-calc')) {
          this.buttonCalculate();
        }

        if (el.matches('.delete'))
          this.buttonDelete();
      })
    },

    buttonToDisplay(val) {
      this.display.value += val;
    },

    buttonCalculate() {
      let val = this.display.value;

      try {
        const result = /[a-zA-Z]+/.test(val)

        if (!result) {
          val = eval(val);

          this.display.value = val;
        } else {
          this.buttonClear();
          return;
        }

      } catch (error) {
        this.buttonClear();
      }
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13)
          this.buttonCalculate()
      })
    },

    buttonDelete() {
      this.display.value = this.display.value.slice(0, -1);
    },

    buttonClear() {
      this.display.value = '';
    }
  }
}

const calculator = createCalculator();

calculator.start();