var start = document.querySelector("#startButt")
var timerBox = document.querySelector(".displayTimer")
var head = document.querySelector(".head")
var ansChoice = document.querySelector("#answers")
var question = document.querySelector("#questions")








var questAndAns = [
    {
        question: "Which book series did JK Rowling write?",

        choice1: "The Witcher",

        choice2: "Harry Potter",

        choice3: "Artemis Fowl",

        choice4: "His Dark Materials",

        correct: "2"

    },

    {
        question: "Which is not a book character heroine?",

        choice1: "Ciri",

        choice2: "Lyra",

        choice3: "Arya",

        choice4: "Dandelion", 

        correct: "4"

    },

    {
        question: "Which one is not an author?",

        choice1: "Michael J. Sullivan",

        choice2: "Phillip Pullman",

        choice3: "Jefferson Steelflex",

        choice4: "Delia Owens",

        correct: "3"

    },

    {
        question: "How many books are in the series 'His Dark materials' by Phillip Pullman?",

        choice1: "Three",

        choice2: "Five",

        choice3: "Nine",

        choice4: "Four",

        correct: "1"

    },

    {
        question: "Which author is famous for writing 'The Chronicles of Narnia'?",

        choice1: "J.R. Tolkien",

        choice2: "Christopher Paolini",

        choice3: "C.S. Lewis",

        choice4: "Jane Austen",

        correct: "3"

    },

    {
        question: "Which character was created by J.R. Tolkien?",

        choice1: "Merlin",

        choice2: "Gandalf",

        choice3: "Dumbledore",

        choice4: "Aslan",

        correct: "2"

    } ]


var secondsLeft = 60


start.addEventListener("click", function(){
    var timerInterval = setInterval(function(){
        secondsLeft --;
        timerBox.textContent= secondsLeft
        start.style.display = "none"
        head.style.display = "none"
        ansChoice.style.display = "block"
        question.style.display = "block"

        if(secondsLeft === 0){
            clearInterval(timerInterval)
            alert("Times up!")
            window.location.replace("hi-scores.html")
            
        }
    }, 1000)


})

