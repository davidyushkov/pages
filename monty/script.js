'use strict';

const app = document.getElementById('app');
const doors = document.querySelector('.doors');

const makeDoor = (num, mount) => {
  const door = document.createElement('div');
  door.classList.add('door');
  door.id = `door-${num}`;
  mount.appendChild(door);
}

const getRandom = (max) => Math.floor(Math.random() * max) + 1;

const removeDoors = () => {
  for(let i = 1; i <= 3; i++) {
    const door = document.getElementById(`door-${i}`);
    if(door) {
      doors.removeChild(door);
    }
  }
}

const makeDoors = () => {
  removeDoors();
  for(let i = 1; i <= 3; i++) {
    makeDoor(i, doors);
  }
}

const setDoors = (prizeId) => {
  const prizeDoor = document.getElementById(`door-${prizeId}`);
  prizeDoor.classList.add('prize');
  for(let i = 1; i <= 3; i++) {
    if(i !== prizeId) {
      document.getElementById(`door-${i}`).classList.add('goat');
    }
  }
}

// end of helpers

const setClickEvent = () => {
  const allDoors = document.querySelectorAll('.door');
  allDoors.forEach(door => door.addEventListener('click', firstSelection));
}

const removeSelectEvent = () => {
  const allDoors = document.querySelectorAll('.door');
  allDoors.forEach(door => door.removeEventListener('click', firstSelection));
}

function firstSelection(e) {
  resetSelected();
  e.target.classList.add('selected');
  openOneGoat();
}

const resetSelected = () => {
  document.querySelectorAll('.door').forEach(door => {
    door.classList.remove('selected');
  });
}

const openOneGoat = () => {
  const goats = document.querySelectorAll('.goat');
  goats.forEach(goat => {
    if(!goat.classList.contains('selected') && !document.querySelector('.open')) {
      goat.classList.add('open');
    }
  });
  removeSelectEvent();
  addMenu(app);
  setBtnEvents();
}

const getResult = (btnClicked) => {
  const selected = document.querySelector('.selected');
  const resultText = document.createElement('h2');
  resultText.classList.add('result');
  let result = false;
  if(selected.classList.contains('prize')) {
    resultText.textContent = 'Win!';
    result = true;
  } else {
    resultText.textContent = 'Lose!';
  }

  changeState(btnClicked, result);

  app.appendChild(resultText);
  return result;
}

const finishGame = (btnClicked) => {
  document.querySelectorAll('.door').forEach(door => {
    door.classList.add('open');
  });
  app.removeChild(document.querySelector('.menu'));
  getResult(btnClicked);
  addReGameMenu();
  startRegameEvent();
}

//end of events

//menu

const addMenu = (mount) => {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.innerHTML = `
    <div class='btns'>
      <button class='btn change'>Change</button>
      <button class='btn nope'>Nope</button>
    </div>
  `;
  mount.appendChild(menu);
}


const setBtnEvents = () => {

  document.querySelector('.change').addEventListener('click', (e) => {
    const currentSelected = document.querySelector('.selected');
    document.querySelectorAll('.door').forEach(goat => {
      if(!goat.classList.contains('open')) {
        goat.classList.add('selected');
      }
    });
    currentSelected.classList.remove('selected');
    finishGame('yes');
  });

  document.querySelector('.nope').addEventListener('click', (e) => {
    finishGame('no');
  });

}


//end of menu

// state changes

const increseYesCount = () => {
  const yesCount = document.querySelector('.yes-count');
  yesCount.textContent = +yesCount.textContent + 1;
}

const increseYesWins = () => {
  const yesWins = document.querySelector('.yes-wins');
  yesWins.textContent = +yesWins.textContent + 1;
}

const increseYesLoses = () => {
  const yesLoses = document.querySelector('.yes-loses');
  yesLoses.textContent = +yesLoses.textContent + 1;
}

const increseNoCount = () => {
  const yesCount = document.querySelector('.no-count');
  yesCount.textContent = +yesCount.textContent + 1;
}

const increseNoWins = () => {
  const noWins = document.querySelector('.no-wins');
  noWins.textContent = +noWins.textContent + 1;
}

const increseNoLoses = () => {
  const noLoses = document.querySelector('.no-loses');
  noLoses.textContent = +noLoses.textContent + 1;
}

const changeState = (btnClicked, result) => {
  if(btnClicked === 'yes') {
    increseYesCount();
    if(result)
      increseYesWins();
    else
      increseYesLoses();
  } else if(btnClicked === 'no') {
    increseNoCount();
    if(result)
      increseNoWins();
    else
      increseNoLoses();
  }
}

// end of state

// menu regame
const addReGameMenu = () => {
  const regame = document.createElement('div');
  regame.classList.add('regame');
  regame.innerHTML = `
    <button class='btn re'>Regame?</button>
  `;
  app.appendChild(regame);
}

const startRegameEvent = () => {
  document.querySelector('.re').addEventListener('click', (e) => {
    game();
    app.removeChild(document.querySelector('.regame'));
    app.removeChild(document.querySelector('.result'));
  });
}


// end of menu regame


// the game

const game = () => {
  makeDoors();
  setDoors(getRandom(3));
  setClickEvent();
}

game();
