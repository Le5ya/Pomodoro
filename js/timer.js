import { state } from './state.js';
import { changeActiveBtn } from './control.js';
import { alarm } from './alarm.js';
import { addZero } from './util.js'

const minutesElem = document.querySelector('.time__minutes');
const secondsElem = document.querySelector('.time__seconds');

export const showTime = (seconds) => {
  minutesElem.textContent = addZero(Math.floor(seconds / 60));
  secondsElem.textContent = addZero(seconds % 60);
}

 export const startTimer = () => {
   state.timeLeft -= 1;

   showTime(state.timeLeft);

   if (state.timeLeft > 0 && state.isActive) {
    state.timerId = setTimeout(startTimer, 1000);
   }


  // showTime(state.timeLeft);


  if (state.timeLeft <= 0) {
   alarm();
   console.log(state.activeTodo);;

   if (state.status === 'work') {
    state.activeTodo.pomodoro += 1;

    if (state.activeTodo.pomodoro % state.count !== 0) {
      state.status = 'break'
    } else {
      state.status = 'relax'
    }

      state.status = 'break'
   }else {
    state.status = 'work'
   }
  //  alarm();*var
   state.timeLeft = state[state.status] * 60;
   console.log(state.activeTodo);
   changeActiveBtn(state.status);
   startTimer();
  }
 }