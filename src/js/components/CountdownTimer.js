class CountdownTimer {
  constructor({ selector, targetTime, pause }) {
    this.$timer = document.querySelector(selector);
    this.$timeUnits = Array.from(this.$timer.querySelectorAll('[data-value]'));
    this.$pauseBtn = pause;
    this.targetTime = targetTime + 1000;
    this.timeLeft = this.targetTime;
    this.isActive = false;
    this.intervalID = null;
    this.minutes = Math.floor((targetTime % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((targetTime % (1000 * 60)) / 1000);
    this.updateHTML = this.updateTimerView([this.minutes, this.seconds]);
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.play();
  }
  play() {
    const targetTime = this.timeLeft + Date.now();
    this.intervalID = setInterval(() => {
      const currentTime = Date.now();
      this.timeLeft =
        targetTime - currentTime > 500 ? targetTime - currentTime : 0;
      const minutes = Math.floor(
        (this.timeLeft % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);
      const timeData = [minutes, seconds];
      this.updateTimerView(timeData);
      if (this.timeLeft === 0) {
        this.stop();
      }
    }, 1000);
  }
  pause() {
    clearInterval(this.intervalID);
  }
  stop() {
    clearInterval(this.intervalID);
    this.isActive = false;
    this.$pauseBtn.disabled = true;
    if (this.timeLeft === 0) {
      alert('time is up!');
    }
    this.timeLeft = this.targetTime;
    this.updateTimerView([this.minutes, this.seconds]);
  }
  changeTime(value) {
    if (Number.isNaN(+value)) {
      return 0;
    }
    this.pause();
    this.timeLeft += +value;
    this.play();
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
