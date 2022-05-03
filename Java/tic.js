
var cell = new Array(9);
for (var i=0; i<9; i++) cell[i] = 0;
var items=document.querySelectorAll(".item");


function Cross(value) {
  items[value].innerHTML="X";

}

function Zero(value) {
  items[value].innerHTML="O";

}

function CheckVictory() {
  if (cell[0] == cell[1] && cell[1] == cell[2] && cell[2] > 0) return true;
  if (cell[3] == cell[4] && cell[4] == cell[5] && cell[5] > 0) return true;
  if (cell[6] == cell[7] && cell[7] == cell[8] && cell[8] > 0) return true;
  if (cell[6] == cell[3] && cell[3] == cell[0] && cell[0] > 0) return true;
  if (cell[7] == cell[4] && cell[4] == cell[1] && cell[1] > 0) return true;
  if (cell[8] == cell[5] && cell[5] == cell[2] && cell[2] > 0) return true;
  if (cell[6] == cell[4] && cell[4] == cell[2] && cell[2] > 0) return true;
  if (cell[0] == cell[4] && cell[4] == cell[8] && cell[8] > 0) return true;
}

function CompTurn() {
  for (i=0; i<9; i++) if (cell[i] == 0) PutHere = i;
  for (i=0; i<3; i++) {
  if (cell[0] == cell[1] && cell[2] == 0 && cell[0] == i) PutHere = 2;
  if (cell[0] == cell[2] && cell[1] == 0 && cell[0] == i) PutHere = 1;
  if (cell[1] == cell[2] && cell[0] == 0 && cell[2] == i) PutHere = 0;
  if (cell[3] == cell[4] && cell[5] == 0 && cell[3] == i) PutHere = 5;
  if (cell[3] == cell[5] && cell[4] == 0 && cell[3] == i) PutHere = 4;
  if (cell[4] == cell[5] && cell[3] == 0 && cell[5] == i) PutHere = 3;
  if (cell[6] == cell[7] && cell[8] == 0 && cell[6] == i) PutHere = 8;
  if (cell[6] == cell[8] && cell[7] == 0 && cell[6] == i) PutHere = 7;
  if (cell[7] == cell[8] && cell[6] == 0 && cell[8] == i) PutHere = 6;

  if (cell[6] == cell[3] && cell[0] == 0 && cell[6] == i) PutHere = 0;
  if (cell[6] == cell[0] && cell[3] == 0 && cell[6] == i) PutHere = 3;
  if (cell[3] == cell[0] && cell[6] == 0 && cell[3] == i) PutHere = 6;
  if (cell[7] == cell[4] && cell[1] == 0 && cell[7] == i) PutHere = 1;
  if (cell[7] == cell[1] && cell[4] == 0 && cell[7] == i) PutHere = 4;
  if (cell[4] == cell[1] && cell[7] == 0 && cell[4] == i) PutHere = 7;
  if (cell[8] == cell[5] && cell[2] == 0 && cell[8] == i) PutHere = 2;
  if (cell[8] == cell[2] && cell[5] == 0 && cell[8] == i) PutHere = 5;
  if (cell[5] == cell[2] && cell[8] == 0 && cell[5] == i) PutHere = 8;

  if (cell[6] == cell[4] && cell[2] == 0 && cell[6] == i) PutHere = 2;
  if (cell[6] == cell[2] && cell[4] == 0 && cell[6] == i) PutHere = 4;
  if (cell[4] == cell[2] && cell[6] == 0 && cell[4] == i) PutHere = 6;
  if (cell[0] == cell[4] && cell[8] == 0 && cell[0] == i) PutHere = 8;
  if (cell[0] == cell[8] && cell[4] == 0 && cell[0] == i) PutHere = 4;
  if (cell[4] == cell[8] && cell[0] == 0 && cell[4] == i) PutHere = 0;
  }
  Zero(PutHere);
  cell[PutHere] = 2;
  if (CheckVictory() == true) {
    alert("JavaScript the BEST!!!");
    GameOver();
  }
}

function GameOver() {
  for (i=0; i<9; i++)
  {
    cell[i] = 0;
    items[i].innerHTML='';
  }
}

function CheckNobody() {
  no = false;
  for (i=0; i<9; i++) if (cell[i] == 0) no = true;
  if (no == false) {
    alert("Draw");
    GameOver();
  }
}

function Place(value) {
  if (cell[value] == 0) {
    Cross(value);
    cell[value] = 1;
    if (CheckVictory() == true) {
      alert("Congrats!!! You won");
      GameOver();
    }
    else {
      CheckNobody();
      CompTurn();
      CheckNobody();
    }
  }
}
