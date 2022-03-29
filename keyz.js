var keyClick = document.querySelectorAll(".key").length
for (var i=0; i<keyClick; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    soundMake(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

      });
}

document.addEventListener("keypress", function(event) {
  console.log(event);
  soundMake(event.key);
  buttonAnimation(event.key);
});

function soundMake(key) {
  switch (key) {
    case "q":
    var key01 = new Audio("sound2/key01.mp3");
    key01.play();
      break;

    case "w":
    var key02 = new Audio("sound2/key02.mp3");
    key02.play();
      break;

    case "e":
    var key03 = new Audio("sound2/key03.mp3");
    key03.play();
      break;

    case "r":
    var key04 = new Audio("sound2/key04.mp3");
    key04.play();
      break;

    case "t":
    var key05 = new Audio("sound2/key05.mp3");
    key05.play();
      break;

    case "y":
    var key06 = new Audio("sound2/key06.mp3");
    key06.play();
      break;

    case "u":
    var key07 = new Audio("sound2/key07.mp3");
    key07.play();
      break;

    case "i":
    var key08 = new Audio("sound2/key08.mp3");
    key08.play();
      break;

    case "a":
    var key09 = new Audio("sound2/key09.mp3");
    key09.play();
      break;

    case "s":
    var key10 = new Audio("sound2/key10.mp3");
    key10.play();
      break;

    case "d":
    var key11 = new Audio("sound2/key11.mp3");
    key11.play();
      break;

    case "f":
    var key12 = new Audio("sound2/key12.mp3");
    key12.play();
      break;

    case "g":
    var key13 = new Audio("sound2/key13.mp3");
    key13.play();
      break;

    case "h":
    var key14 = new Audio("sound2/key14.mp3");
    key14.play();
      break;

    case "j":
    var key15 = new Audio("sound2/key15.mp3");
    key15.play();
      break;

    case "k":
    var key16 = new Audio("sound2/key16.mp3");
    key16.play();
      break;

    case "z":
    var key17 = new Audio("sound2/key17.mp3");
    key17.play();
      break;

    case "x":
    var key18 = new Audio("sound2/key18.mp3");
    key18.play();
      break;

    case "c":
    var key19 = new Audio("sound2/key19.mp3");
    key19.play();
      break;

    case "v":
    var key20 = new Audio("sound2/key20.mp3");
    key20.play();
      break;

    case "b":
    var key21 = new Audio("sound2/key21.mp3");
    key21.play();
      break;

    case "n":
    var key22 = new Audio("sound2/key22.mp3");
    key22.play();
      break;

    case "m":
    var key23 = new Audio("sound2/key23.mp3");
    key23.play();
      break;

    case "l":
    var key24 = new Audio("sound2/key24.mp3");
    key24.play();
      break;

    default:console.log(buttonInnerHTML);
}

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);
}
