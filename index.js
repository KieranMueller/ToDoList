let answerEl = document.querySelector(".answer")


const tasklist = []


let input = document.querySelector(".input")
input.addEventListener("input", function() {
    return input.value
    })

    
function clearItems() {
let text = "Clear entire list?" 
if(confirm(text)===true)
answerEl.innerHTML = ""   
}

function enter() {
    tasklist.push(input.value)
    if(input.value == "") {
        return alert("No text entered")
    }

    answerEl.innerHTML += `<li>${tasklist[tasklist.length - 1]}</li>`
    input.value = ""
}
