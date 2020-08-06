var start = document.querySelector("#startButt")
var timerBox = document.querySelector(".displayTimer")
var head = document.querySelector(".head")

var questAndAns = [{question: "Who", Answer: "Jared"}, {question: "", answer: ""}, {question: "", answer: ""}]

var secondsLeft = 60


start.addEventListener("click", function(){
    var timerInterval = setInterval(function(){
        secondsLeft --;
        timerBox.textContent= secondsLeft
        start.style.display = "none"
        head.style.display = "none"

        if(secondsLeft === 0){
            clearInterval(timerInterval)
            alert("Times up!")
            display.textContent = "10"
            secondsLeft = 10
        }
    }, 1000)

})