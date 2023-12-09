import { Timer } from "./timer.js";


export class Ui {
  btnStartPomodoro = document.querySelector('#btnStart');
  btnPausePomodoro = document.querySelector('#btnPause');
  btnResumePomodoro = document.querySelector('#btnResume');
  btnResetPomodoro = document.querySelector('#btnReset');

  constructor() {
    this.timer = new Timer();

    this.btnStartPomodoro.addEventListener('click', () => {
      this.timer.startTimer(60);
    });

    this.btnPausePomodoro.addEventListener('click', () => {
      this.timer.pauseTimer();
    })

    this.btnResumePomodoro.addEventListener('click', () => {
      this.timer.resumeTimer();
    })

    this.btnResetPomodoro.addEventListener('click', () => {
      this.timer.resetTimer();
    })

  }
}
