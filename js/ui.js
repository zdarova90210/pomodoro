export class Ui {
  btnStart = document.querySelector('#btnStart');
  btnPause = document.querySelector('#btnPause');
  btnResume = document.querySelector('#btnResume');
  btnReset = document.querySelector('#btnReset');
  timerTextContainer = document.querySelector('#timerText');
  taskTextContainer = document.querySelector('#taskText');

  constructor(timer) {
    this.timer = timer;

    this.btnStart.addEventListener('click', () => {
      this.timer.startTimer(60);
    });

    this.btnPause.addEventListener('click', () => {
      this.timer.pauseTimer();
    })

    this.btnResume.addEventListener('click', () => {
      this.timer.resumeTimer();
    })

    this.btnReset.addEventListener('click', () => {
      this.timer.resetTimer();
    })
  }
}
