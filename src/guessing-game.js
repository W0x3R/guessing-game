class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.value = Math.round((this.min + this.max) / 2);
    return this.value;
  }

  lower() {
    return (this.max = this.value);
  }

  greater() {
    return (this.min = this.value);
  }
}

module.exports = GuessingGame;
