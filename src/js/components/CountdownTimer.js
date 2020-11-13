class CountdownTimer {
  constructor({ selector, targetTime }) {
    this.$timer = document.querySelector(selector);
    this.$timeUnits = Array.from(this.$timer.querySelectorAll('[data-value]'));
    this.targetTime = Date.now() + 1000 + targetTime;
  }
  start() {
    const intervalID = setInterval(() => {
      const currentTime = Date.now();
      const timeLeft = this.targetTime - currentTime;
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      const timeData = [minutes, seconds];
      this.updateTimerView(timeData);
      if (timeLeft < 1000) {
        clearInterval(intervalID);
        console.log('time is up!');
      }
    }, 1000);
  }
  updateTimerView(arr) {
    this.$timeUnits.forEach(
      (timeUnit, i) => (timeUnit.textContent = this.pad(arr[i]))
    );
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

export default CountdownTimer;
