import { state } from './state.js'
import { showTime, startTimer } from './timer.js';

const btnStart = document.querySelector('.control__btn_start');
const btnStop = document.querySelector('.control__btn_stop');
const navBtns = document.querySelectorAll('.navigation__btn');

export const changeActiveBtn = (dataUse) => {
  state.status = dataUse;
  // state.timeLeft = state[state.status] * 60;
  // showTime(state.timeLeft);
  //! comment repeat
// const btn = document.querySelector(`[data-use="${dataUse}"]`);
for (let i = 0; i < navBtns.length; i++) {

  if (navBtns[i].dataset.use === dataUse) {
    navBtns[i].classList.add('navigation__btn_active');
  }else {
    navBtns[i].classList.remove('navigation__btn_active');
  }
 
}

}

export const stop = () => {
  clearTimeout(state.timerId);
  state.isActive = false;
  btnStart.textContent = 'Start';
  state.timeLeft = state[state.status] * 60;
  showTime(state.timeLeft);
}

export const initControl = () => {
  btnStart.addEventListener('click', () => {
    // state.isActive = true;
    // btnStart.textContent = 'Pause';
    // startTimer();
    if (state.isActive) {
      clearTimeout(state.timerId);
      state.isActive = false;
      btnStart.textContent = 'Start';
    } else {
        state.isActive = true;
        btnStart.textContent = 'Pause';
        startTimer();
    }

    
  });
  btnStop.addEventListener('click', stop);

  for (let i = 0; i < navBtns.length;  i++) {

    navBtns[i].addEventListener('click', () => {
      changeActiveBtn(navBtns[i].dataset.use)
      stop();
    })
    
  }


  showTime(state.timeLeft);
}

