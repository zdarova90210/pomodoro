import { Ui } from "./ui.js";

export class Timer {
  intervalId = null;
  seconds = 60;

  static startTimer(time = 60) {
    console.log(time);
    console.log('startTimer');
    if (!time && !this.seconds) {
      throw new Error('Please set time before start pomodoro.')
    }

    if (!this.seconds) {
      this.seconds = time;
    }

    // Clear any existing interval
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }

    // Start a new interval
    this.intervalId = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(this.intervalId);
      } else {
        this.seconds--;
        Ui.timerTextContainer.innerText = this.seconds;
        console.log(this.seconds);
      }
    }, 1000);
  }

  static pauseTimer() {
    console.log('pauseTimer');
    clearInterval(this.intervalId);
  }

  static resumeTimer() {
    console.log('resumeTimer');
    this.startTimer()
  }


  static resetTimer() {
    console.log('resetTimer');
    clearInterval(this.intervalId);
    this.seconds = null;
  }
}
