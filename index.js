
let countEl = document.getElementById("count_el")
let saveEl = document.getElementById("save-el")
let count = 0
let lapNum = 1

function increment() {
    count = count + 1    
    countEl.textContent = count    
}

function save() {
    let save = count + " - "
    saveEl.innerHTML += save
}

function reset() {
    count = 0
    lapNum++
    countEl.textContent = count
    saveEl.innerHTML += "<br>Lap " + lapNum + ": "
}
