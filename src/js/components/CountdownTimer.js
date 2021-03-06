class CountdownTimer {
  constructor({ selector, targetTime, endHandler }) {
    this.$timer = document.querySelector(selector);
    this.targetTime = targetTime;
    this.timeLeft = this.targetTime;
    this.endHandler = endHandler;
    this.isActive = false;
    this.intervalID = null;
    this.render(this.convertTime(this.timeLeft));
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
      this.timeLeft = Math.ceil((targetTime - currentTime) / 1000) * 1000;
      this.render(this.convertTime(this.timeLeft));
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
    if (this.timeLeft <= 0) {
      this.endHandler();
    }
    this.isActive = false;
    this.timeLeft = this.targetTime;
    this.render(this.convertTime(this.timeLeft));
  }
  changeTime(value) {
    if (Number.isNaN(+value)) {
      return 0;
    }
    this.pause();
    this.timeLeft += +value;
    if (this.timeLeft <= 0) {
      this.stop();
      return;
    }
    this.play();
  }
  convertTime(time) {
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, '0');
    const seconds = Math.round((time % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  render(time) {
    this.$timer.textContent = time;
  }
}

export default CountdownTimer;
