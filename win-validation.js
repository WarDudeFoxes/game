let result;

export function winsValidation() {
  const iconEl = document.querySelectorAll('i');
  const resultElem = document.querySelector('.result');

  let score = JSON.parse(localStorage.getItem('game-score')) || {
    x_score: 0,
    o_score: 0
  }
  //THIS IS THE SCORE OBJECT COMMING FROM LOCAL STORAGE OR THE DEFAULT 

  const x_score_display = document.querySelector('.x-score span');
  const o_score_display = document.querySelector('.o-score span');
  
  //BELOW ARE THE VALIADATION FOR A WIN CHECK
  const row1Validation = ((iconEl[0].className === 'fa-regular fa-x') && (iconEl[1].className === 'fa-regular fa-x') && (iconEl[2].className === 'fa-regular fa-x')) || ((iconEl[0].className === 'fa-regular fa-circle') && (iconEl[1].className === 'fa-regular fa-circle') && (iconEl[2].className === 'fa-regular fa-circle'));

  const row2Validation = ((iconEl[3].className === 'fa-regular fa-x') && (iconEl[4].className === 'fa-regular fa-x') && (iconEl[5].className === 'fa-regular fa-x')) || ((iconEl[3].className === 'fa-regular fa-circle') && (iconEl[4].className === 'fa-regular fa-circle') && (iconEl[5].className === 'fa-regular fa-circle'));

  const row3Validation = ((iconEl[6].className === 'fa-regular fa-x') && (iconEl[7].className === 'fa-regular fa-x') && (iconEl[8].className === 'fa-regular fa-x')) || ((iconEl[6].className === 'fa-regular fa-circle') && (iconEl[7].className === 'fa-regular fa-circle') && (iconEl[8].className === 'fa-regular fa-circle'));

  const column1Validation = ((iconEl[0].className === 'fa-regular fa-x') && (iconEl[3].className === 'fa-regular fa-x') && (iconEl[6].className === 'fa-regular fa-x')) || ((iconEl[0].className === 'fa-regular fa-circle') && (iconEl[3].className === 'fa-regular fa-circle') && (iconEl[6].className === 'fa-regular fa-circle'));

  const column2Validation = ((iconEl[1].className === 'fa-regular fa-x') && (iconEl[4].className === 'fa-regular fa-x') && (iconEl[7].className === 'fa-regular fa-x')) || ((iconEl[1].className === 'fa-regular fa-circle') && (iconEl[4].className === 'fa-regular fa-circle') && (iconEl[7].className === 'fa-regular fa-circle'));

  const column3Validation = ((iconEl[2].className === 'fa-regular fa-x') && (iconEl[5].className === 'fa-regular fa-x') && (iconEl[8].className === 'fa-regular fa-x')) || ((iconEl[2].className === 'fa-regular fa-circle') && (iconEl[5].className === 'fa-regular fa-circle') && (iconEl[8].className === 'fa-regular fa-circle'));

  const diagonal1Validation = ((iconEl[0].className === 'fa-regular fa-x') && (iconEl[4].className === 'fa-regular fa-x') && (iconEl[8].className === 'fa-regular fa-x')) || ((iconEl[0].className === 'fa-regular fa-circle') && (iconEl[4].className === 'fa-regular fa-circle') && (iconEl[8].className === 'fa-regular fa-circle'));

  const diagonal2Validation = ((iconEl[2].className === 'fa-regular fa-x') && (iconEl[4].className === 'fa-regular fa-x') && (iconEl[6].className === 'fa-regular fa-x')) || ((iconEl[2].className === 'fa-regular fa-circle') && (iconEl[4].className === 'fa-regular fa-circle') && (iconEl[6].className === 'fa-regular fa-circle'));



  //BELOW IS A VALIDATION CHECK TO KNOW IF THE X OR O WON
  if (row1Validation) {
    if ((iconEl[0] && iconEl[1] && iconEl[2]).className === 'fa-regular fa-x') {
      //IF X WON
      score.x_score++;
      x_score_display.innerHTML = score.x_score;
      document.querySelector('.result-message').classList.add('show');

      resultElem.innerHTML =  `X WON`;
    } else if ((iconEl[0] && iconEl[1] && iconEl[2]).className === 'fa-regular fa-circle') {
      //IF O WON
      score.o_score++;
      o_score_display.innerHTML = score.o_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML = `O WON`;
    }
    //SAVING SCORE TO STORAGE IF THE CONDITION MATCH
    saveScoreToStorage(score);
  
  } else if (row2Validation) {
    if ((iconEl[3] && iconEl[4] && iconEl[5]).className === 'fa-regular fa-x') {
      //IF X WON
      score.x_score++;
      x_score_display.innerHTML = score.x_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML =  `X WON`;

    } else if ((iconEl[3] && iconEl[4] && iconEl[5]).className === 'fa-regular fa-circle') {
      //IF O WON
      score.o_score++;
      o_score_display.innerHTML = score.o_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML = `O WON`;
    }
    //SAVING SCORE TO STORAGE IF THE CONDITION MATCH
    saveScoreToStorage(score);

  } else if (row3Validation) {
    if ((iconEl[6] && iconEl[7] && iconEl[8]).className === 'fa-regular fa-x') {
      //IF X WON
      score.x_score++;
      x_score_display.innerHTML = score.x_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML =  `X WON`;

    } else if ((iconEl[6] && iconEl[7] && iconEl[8]).className === 'fa-regular fa-circle') {
      //IF O WON
      score.o_score++;
      o_score_display.innerHTML = score.o_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML = `O WON`;
    }
    //SAVING SCORE TO STORAGE IF THE CONDITION MATCH
    saveScoreToStorage(score);

  } else if (column1Validation) {
    if ((iconEl[0] && iconEl[3] && iconEl[6]).className === 'fa-regular fa-x') {
      //IF X WON
      score.x_score++;
      x_score_display.innerHTML = score.x_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML =  `X WON`;

    } else if ((iconEl[0] && iconEl[3] && iconEl[6]).className === 'fa-regular fa-circle') {
      //IF O WON
      score.o_score++;
      o_score_display.innerHTML = score.o_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML = `O WON`;
    }
    //SAVING SCORE TO STORAGE IF THE CONDITION MATCH
    saveScoreToStorage(score);

  } else if (column2Validation) {
    if ((iconEl[1] && iconEl[4] && iconEl[7]).className === 'fa-regular fa-x') {
      //IF X WON
      score.x_score++;
      x_score_display.innerHTML = score.x_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML =  `X WON`;

    } else if ((iconEl[1] && iconEl[4] && iconEl[7]).className === 'fa-regular fa-circle') {
      //IF O WON
      score.o_score++
      o_score_display.innerHTML = score.o_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML = `O WON`;
    }
    //SAVING SCORE TO STORAGE IF THE CONDITION MATCH
    saveScoreToStorage(score);

  } else if (column3Validation) {
    if ((iconEl[2] && iconEl[5] && iconEl[8]).className === 'fa-regular fa-x') {
      //IF X WON
      score.x_score++;
      x_score_display.innerHTML = score.x_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML =  `X WON`;

    } else if ((iconEl[2] && iconEl[5] && iconEl[8]).className === 'fa-regular fa-circle') {
      //IF O WON
      score.o_score++;
      o_score_display.innerHTML = score.o_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML = `O WON`;
    }
    //SAVING SCORE TO STORAGE IF THE CONDITION MATCH
    saveScoreToStorage(score);

  } else if (diagonal1Validation) {
    if ((iconEl[0] && iconEl[4] && iconEl[8]).className === 'fa-regular fa-x') {
      //IF X WON
      score.x_score++;
      x_score_display.innerHTML = score.x_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML =  `X WON`;

    } else if ((iconEl[0] && iconEl[4] && iconEl[8]).className === 'fa-regular fa-circle') {
      //IF O WON
      score.o_score++;
      o_score_display.innerHTML = score.o_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML = `O WON`;
    }
    saveScoreToStorage(score);

  } else if (diagonal2Validation) {
    if ((iconEl[2] && iconEl[4] && iconEl[6]).className === 'fa-regular fa-x') {
      //IF X WON
      score.x_score++;
      x_score_display.innerHTML = score.x_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML =  `X WON`;

    } else if ((iconEl[2] && iconEl[4] && iconEl[6]).className === 'fa-regular fa-circle') {
      //IF O WON
      score.o_score++
      o_score_display.innerHTML = score.o_score;
      document.querySelector('.result-message').classList.add('show');
      resultElem.innerHTML = `O WON`;
    }
    //SAVING SCORE TO STORAGE IF THE CONDITION MATCH
    saveScoreToStorage(score);
  }

  // HERE I CHECK IF (NOT WIN) WITH THE (drawCheck) AND ALSO I CHECK IF ALL THE iconEl ALL CONTAIN THE  THE CLASS 'fa-regular fa-x' ||  'fa-regular fa-circle'
  //ALL THIS JUST TONKNOW IF NO WINNER...NO WINNER? THE DRAW MESSAGE POPs UP
  let emthyClass;

  const drawCheck = !row1Validation && !row2Validation && !row3Validation && !column1Validation && !column2Validation && !column3Validation && !diagonal1Validation && !diagonal2Validation;

  iconEl.forEach(elem => {
    if ((elem.className !== 'fa-regular fa-x') && (elem.className !== 'fa-regular fa-circle')) {
      emthyClass = elem
    };
  });
  
  if (drawCheck && !emthyClass) {
    document.querySelector('.result-message').classList.add('show');
    resultElem.innerHTML = `DRAW`;
  };

  return score;
};

//HERE I SAVED THE SCORE TO THE LOCALSTORAGE
export function saveScoreToStorage(score) {
  localStorage.setItem('game-score', JSON.stringify(score));
};