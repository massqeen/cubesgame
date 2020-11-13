import refs from '../refs';

class CountdownTimer {
  constructor({ selector, targetTime }) {
    this.$timer = document.querySelector(selector);
    this.$timeUnits = Array.from(this.$timer.querySelectorAll('[data-value]'));
    this.targetTime = targetTime;
    this.isActive = false;
    this.minutes = Math.floor((targetTime % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((targetTime % (1000 * 60)) / 1000);
    this.updateHTML = this.updateTimerView([this.minutes, this.seconds]);
  }
  start() {
    this.targetTime += Date.now() + 1000;
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    refs.start.disabled = true;
    const intervalID = setInterval(() => {
      const currentTime = Date.now();
      const timeLeft =
        this.targetTime - currentTime > 500 ? this.targetTime - currentTime : 0;
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      const timeData = [minutes, seconds];
      this.updateTimerView(timeData);
      if (timeLeft === 0) {
        this.stop(intervalID);
      }
    }, 1000);
  }
  updateTimerView(arr) {
    this.$timeUnits.forEach(
      (timeUnit, i) => (timeUnit.textContent = this.pad(arr[i]))
    );
  }
  stop(intervalID) {
    clearInterval(intervalID);
    this.isActive = false;
    refs.start.disabled = false;
    alert('time is up!');
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

export default CountdownTimer;
