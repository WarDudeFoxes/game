import { winsValidation } from "./win-validation.js";
import { saveScoreToStorage } from "./win-validation.js";

const x_class = 'fa-regular fa-x';
const circle_class = 'fa-regular fa-circle';
let classSwitch;

//WHEN YOU CLICK ON THE BOX THE EVENT BELOW IS TRIGGER, IF YOU CLICK ON THE CUBE BOX THE EVENT WILL TRIGGERED ONCE I USED THE ONCE OBJECT {ONCE : TRUE}
document.querySelectorAll('.js-cube').forEach(cube => {
  cube.addEventListener('click', () => {
    //ABOVE YOU WILL SEE SOME DEFINED VERIABLE , BELOW I USE A TONARY OPERATOR 
    let class_name = classSwitch ? circle_class : x_class;

    //THIS IS TO CHAGE THE VALUE OF CLASSSWITCH TO + || -
    classSwitch = !classSwitch;

    cube.firstChild.className = class_name;

    //THE FUCTION WHICH I CALLED BELLOW IS CREATED IN ANOTHER FILE, JUST TO KEEP MY CODE ORGANISE , I USED MODULE  
    winsValidation();
  }, {once: true})
})

//WHEN YOU CLICK ON THE RESTART BUTTON
document.querySelector('.restart-game').addEventListener('click', () => {
  location.reload()
})

//IN THE WINVALIDATION FUNCTION I RETURN THE SCORE OBJECT
const score = winsValidation()

//HERE I DISPLAY THE SCORE ON THE PAGE
updateScore();
function updateScore() {
  document.querySelector(".x-score span").innerHTML = score.x_score
  document.querySelector(".o-score span").innerHTML = score.o_score
}

document.querySelector('.reset-score').addEventListener('click', () => {
  localStorage.removeItem('game-score');
  updateScore();
  location.reload();
})