var score = 0;
var time = 30;
var randomNum;

function bubblesCreator () {
  var bubbles = '';
  for (let i = 0; i < 100; i++) {
    var randomNum = Math.floor (Math.random () * 10);
    bubbles += ` <div class="bubble">${randomNum}</div>`;
  }

  var bottomPannel = document.querySelector ('#btmPanel');
  bottomPannel.innerHTML = bubbles;
}

bubblesCreator ();

function timer () {
  var timeInterval = setInterval (function () {
    if (time > 0) {
      time--;
      document.querySelector ('#timerVal').textContent = time;
    } else {
      clearInterval (timeInterval);
      var bottomPannel = document.querySelector ('#btmPanel');
      bottomPannel.innerHTML = `Game Over ! <br> <br>
                                Your Score is ${score}`;

      document.querySelector ('#hitValue').innerHTML = '';
      const button = document.createElement ('button');
      button.textContent = 'play again';

      bottomPannel.appendChild (button);

      button.addEventListener ('click', () => {
        window.location.reload ();
      });
    }
  }, 1000);
}

timer ();

function increaseScore () {
  score += 10;
  document.querySelector ('#scoreValue').innerText = score;
}

function hitBubble () {
  randomNum = Math.floor (Math.random () * 10);
  document.querySelector ('#hitValue').innerHTML = randomNum;

  document
    .querySelector ('#btmPanel')
    .addEventListener ('click', function (event) {
      var bubbleNum = Number (event.target.textContent);
      playClickSound ();

      // console.log(bubbleNum);

      if (randomNum === bubbleNum) {
        increaseScore ();
        bubblesCreator ();
        hitBubble ();
      }
    });

  console.log (score);
}
hitBubble ();

const clickSound = new Audio ('bubbleDrop.mp3');
function playClickSound () {
  clickSound.currentTime = 0; // Reset to the start
  clickSound.play (); // Play the audio
}
