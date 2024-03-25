let dragged
const items = document.querySelectorAll('.item')
items.forEach((item) => {
    item.addEventListener('dragstart', () => {
        console.log(item)
        dragged = item
    })
    item.addEventListener('dragover', (event) => {
        event.preventDefault()
    })
    item.addEventListener('drop', () => {
        const data = dragged.textContent
        dragged.textContent = item.textContent
        item.textContent = data
    })
})