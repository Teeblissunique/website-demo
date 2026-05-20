let currentQuestion = 0
let answer = []
let time  = 300
let timer
let studentName = ""

function startExam(){

    studentName = document.getElementById("name").Value

    if (studentName == ""){
        alert ("Enter Your Name")
        return
    }

    document.getElementById("login").style.display="none"
    document.getElementById("quiz").style.display="block"
    document.getElementById("student").innerText= studentName


    startTimer()
    loadQuestion()
}

function startTimer () {
    timer = setInterval(function() {
        time--

        document.getElementById("timer").innerText = "Time: " + time

        if(time<=0){
            submitExam()
        }
    }, 1000)
}
function loadQuestion(){
    
    let q= questions[currentQuestion]

    document.getElementById("question").innerText=(currentQuestion+ 1) + "." +q.question
    let optionsHTML =""

    q.options.forEach((opt, index) =>{

        optionsHTML += `<div class="option" onclick= "selectOption(${index})"> ${opt} </div>`
    })
    document.getElementById("options").innerHTML= optionsHTML
}
function selectOption(index){
    answer[currentQuestion] = index
}
function next() {
    if(currentQuestion< questions.lenght - 1){

        currentQuestion++
        loadQuestion()
    }
}
function previous(){
    if (currentQuestion>0){
        currentQuestion--
        loadQuestion()
    }
}
function submitExam(){
    clearInterval(timer)
    let score = 0

    questions.forEach((q, index) => {
        if (answers[index]==q.answer){
            score++
        }
    })

    document.getElementById("quiz").style.display="none"
    document.getElementById("result").style.display="block"
    document.getElementById("score").innerText=studentName+ "Your Score is " + score "out of " +questions.lenght
}