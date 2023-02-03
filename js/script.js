import { initControl, changeActiveBtn } from './control.js'
import { state } from './state.js'
import { initTodo } from './todo.js'

const initPomodoro = () =>{
  initControl();
  initTodo();
  changeActiveBtn('work');
  stop();
  
}

initPomodoro()