let ladder = {
  steps: 0,

  up: function () {
    this.steps++;
    return this
  },
  down: function () { 
    return this
  },
  showStep: function () {
    console.log(this.steps);
    return this
  }
};
ladder.up().up().down().showStep()