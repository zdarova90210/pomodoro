import {Ui} from './ui.js'

export class Timer {
  constructor(time) {
    this.intervalId = null;
    this.seconds = time;
    this.uiInstance = new Ui(this);
  }

  startTimer(time) {
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
        this.uiInstance.timerTextContainer.innerText = this.seconds;
        console.log(this.seconds);
      }
    }, 1000);
  }

  pauseTimer() {
    console.log('pauseTimer');
    clearInterval(this.intervalId);
  }

  resumeTimer() {
    console.log('resumeTimer');
    this.startTimer()
  }


  resetTimer() {
    console.log('resetTimer');
    clearInterval(this.intervalId);
    this.seconds = null;
  }
}
