function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  let imgID = ev.target.id;
  let divID = ev.target.parentElement.id;
  console.log("drag img #" + imgID + " from div #" + divID);
  ev.dataTransfer.setData("imgID", imgID);
  ev.dataTransfer.setData("DivID", divID);
}

function drop(ev) {
  let target = (ev.target.tagName == "DIV") ? ev.target : ev.target.parentElement;
  console.log("droped in #" + target.id);

  let img = target.firstChild;
  if (img) {
    console.log("found img #" + img.id);
    let originID = ev.dataTransfer.getData("DivID");
    document.getElementById(originID).appendChild(img);
  }

  ev.preventDefault();
  let data = ev.dataTransfer.getData("imgID");
  console.log("image id was " + data);
  target.appendChild(document.getElementById(data));

  let solved = true;
  let divs = document.querySelectorAll("#text div");
  for (let i = 0; i < divs.length; i++) {
    let expectedID = "image" + (i + 1);
    let imageID = divs[i].firstChild ? divs[i].firstChild.id : "unknown";
    console.log("check div #" + divs[i].id + "; expect id to be " + expectedID + "; actually: " + imageID);
    if (expectedID !== imageID) {
      solved = false;
    }
  }

  if (solved) {
    console.log("Puzzle solved!");
  } else {
    console.log("Puzzle not solved yet.");
  }
}

function shuffle() {
  let puzzlePieces = document.querySelectorAll('.puzzle-piece');

  for (let i = puzzlePieces.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = puzzlePieces[i];
    puzzlePieces[i] = puzzlePieces[j];
    puzzlePieces[j] = temp;
  }

  updatePuzzle();
}

function updatePuzzle() {
   {
    let puzzleContainer = document.querySelector('#puzzle-container');
    let puzzlePieces = document.querySelectorAll('.puzzle-piece');
  
    // Remove all puzzle pieces from the container
    puzzlePieces.forEach(function(piece) {
      puzzleContainer.removeChild(piece);
    });
  
    // Add the puzzle pieces back to the container in the new order
    puzzlePieces.forEach(function(piece) {
      puzzleContainer.appendChild(piece);
    });
  }
  
}
 // Adding all the event listeners to the event 
 piece.addEventListener('dragstart', drag);
 piece.addEventListener('dragover', allowDrop);
 piece.addEventListener('drop', drop);


let shuffleButton = document.querySelector('.shuffle-button');

shuffleButton.addEventListener('click', shuffle);








    




    
    


  

  