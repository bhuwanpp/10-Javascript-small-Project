const input = document.getElementById("input")
const p = document.getElementById('display')
const clear = document.getElementById('clear')
input.addEventListener("keypress", handleInput)
let inputs = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
p.innerHTML = inputs.join('<br>')
clear.addEventListener("click", () => {
    localStorage.clear()
    location.reload(true)
})


function handleInput(e) {
    if (e.key === "Enter") {
        if (e.target.value.length > 0) {
            inputs.push(e.target.value)
        }
        localStorage.setItem('tasks', JSON.stringify(inputs))
        let local = JSON.parse(localStorage.getItem('tasks'))
        input.value = ''
        p.innerHTML = local.join('<br>')

    }
}


