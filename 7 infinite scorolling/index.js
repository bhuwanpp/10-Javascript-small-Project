const api = 'https://jsonplaceholder.typicode.com/posts'
async function getData() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('error fetching data', error)
    }
}


const div = document.getElementById("div")
async function App() {
    const data = await getData()
    data.forEach(titles => {
        const titleList = document.createElement('p')
        titleList.textContent = titles.title;
        div.append(titleList);
    });
}
App()
window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        App()
    }
}

