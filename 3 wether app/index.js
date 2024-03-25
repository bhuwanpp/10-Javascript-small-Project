async function GetData(cityName) {
    const url = new URL('https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + cityName + '&days=3');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '904eb19f61msh5f935a2fc165a03p1376fajsn18201a84ff5e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}

const show = document.getElementById('show')
const title = document.getElementById('title')
const temp = document.getElementById('temp')
const feel = document.getElementById('feel')
const cloud = document.getElementById('cloud')
const cloudPercent = document.getElementById('cloudPercent')
const text = document.getElementById('text')
const humidity = document.getElementById('humidity')
let img = document.createElement("img");
async function Weather() {
    let cityName = document.getElementById('city').value
    const data = await GetData(cityName)
    console.log(data)
    title.textContent = ` ${data.location.name}`
    temp.textContent = ` Temperature : ${data.current.temp_c} °C`
    feel.textContent = ` Feels like Temp : ${data.current.feelslike_c} °C`
    humidity.textContent = `Humidity : ${data.current.humidity} %`
    cloudPercent.textContent = `Cloud ${data.current.cloud} %`
    text.textContent = `Cloud ${data.current.condition.text} `

    img.src = data.current.condition.icon
    cloud.append(img)
    console.log(img)

}

const city = document.getElementById('city')
city.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        Weather()
        city.value = ''
    }
})


