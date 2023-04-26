var userInput;
var userPicture = document.querySelector(".userPic");
let userScore = 0;
var compInput;
var compPicture = document.querySelector(".compPic");
let compScore = 0
let hands = document.querySelectorAll(".choice");
var winner;
var result = document.querySelector(".result");

const compOptions = [
    "Rock",
    "Paper",
    "Scissors"

]


//Star Game. Get User Input
function userPick(el) {
    document.querySelector(".userPic").src = `media/Rock.svg`;
    document.querySelector(".compPic").src = `media/Rock1.svg`;
    // var dataSrc = event.target.getAttribute('data-modal-src');
    userInput = el.getAttribute('value');
    console.log(userInput);
    //Get Computer Input
    function compPick() {

        // random input from Computer
        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        var rndInt = randomInt(0, 2);
        // console.log(rndInt);
        // console.log(compInput = compOptions[rndInt]);
        var compInput = compOptions[rndInt]

        return compInput;
    }
    compInput = compPick();
    compPick();
    console.log(compInput);
    //Animation (add class)
    for (let i = 0; i < hands.length; i++) {
        const hand = hands[i];
        hand.classList.add("hands");
    }
    //Add animation event listener, show new images and scores once animation stops

    function init() {
        for (let i = 0; i < hands.length; i++) {
            hands[i].addEventListener('animationend', (ev) => {
                // document.querySelector(".result").style.display = "flex";
                document.querySelector(".result").innerHTML = `<p><strong>${winner}</strong></p>`;
                document.querySelector(".userPic").src = `media/${userInput}.svg`;
                document.querySelector(".compPic").src = `media/${compInput}1.svg`;
                for (let i = 0; i < hands.length; i++) {
                    const hand = hands[i];
                    hand.classList.remove("hands");
                }
                document.querySelector(".userScore").innerHTML = userScore;
                document.querySelector(".compScore").innerHTML = compScore;
                // console.log("animation end", ev);
            })
        }
    }
    init();


    // Declare Winner
    function declareWinner(compInput, userInput) {
        if (compInput == userInput) {
            return "Draw!";
        }
        else if (compInput == "Rock") {
            return (userInput == "Paper") ? "You Win!" : "You Lose!"
        }
        else if (compInput == "Paper") {
            return (userInput == "Scissors") ? "You Win!" : "You Lose!"
        }
        else if (compInput == "Scissors") {
            return (userInput == "Rock") ? "You Win!" : "You Lose!"
        }
        return '';
    }
    winner = declareWinner(compInput, userInput);
    declareWinner();
    // console.log(winner);
    // console.log(userScore);
    // console.log(compScore);

    if (winner == "You Win!") {
        userScore += 1;
    } else if (winner == "You Lose!") {
        compScore += 1;
    } else if (winner == "Draw!") {
        //do nothing
    }


}

//reset game & score
function reset() {
    userScore = 0;
    compScore = 0;
    document.querySelector(".userScore").innerHTML = userScore;
    document.querySelector(".compScore").innerHTML = compScore;
    document.querySelector(".userPic").src = `media/Rock.svg`;
    document.querySelector(".compPic").src = `media/Rock1.svg`;
    document.querySelector(".result").innerHTML = "<p><strong>Let's Play!!</strong></p>";
}
