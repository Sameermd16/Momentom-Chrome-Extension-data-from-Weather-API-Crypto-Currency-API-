
//unsplash api  
//* URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature
//API for cryptocurrency

const cryptoTopDiv = document.getElementById('crypto-top')
const priceDivEl = document.getElementById('price')
const timeEL = document.getElementById('time')
const weatherDiv = document.getElementById('weather')

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(response => response.json())
    .then(data => {                 //returning an object with key:value pairs 
        // console.log(data)
        // console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById('author').textContent = `Photo by: ${data.user.name}`
        // throw Error('im an error')
    }).catch(() => {
        document.body.style.backgroundImage = `url(desert.jpg)`
        //report the error to some kind of service
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(response => {
        // console.log(response)
        // console.log(response.ok)
        if(!response.ok) {
            throw Error("Something went wrong")
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        cryptoTopDiv.innerHTML = `
                                <img src="${data.image.small}"/>  
                                <span>${data.name}</span>
                                `
        priceDivEl.innerHTML = `
            <p>🎯:&#8377; ${data.market_data.current_price.inr}</p>
            <p>👆:&#8377; ${data.market_data.high_24h.inr}</p>
            <p>👇:&#8377; ${data.market_data.low_24h.inr}</p>
        `                
    })
    .catch(err => console.error(err))


setInterval(getCurrentTime, 1000)
function getCurrentTime() {
    const date = new Date()
    timeEL.textContent = date.toLocaleTimeString("en-in", {timeStyle: "medium"})
}

 navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=17.46&lon=78.55&units=metric")
       .then(response => {
        if(!response.ok) {
            throw Error("Weather data not found") 
        }
        return response.json()
       })
       .then(data => {
           console.log(data)
           weatherDiv.innerHTML = `
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon" /> 
                <p>${Math.round(data.main.temp)}°C</p>
                <p>${data.name}</p>
                `
       })
       .catch(err => console.error(err))
 })














 // {
//     "manifest_version": 3,
//     "name": "Momentom",
//     "version": "1.0.0",
//     "description": "Make your dull chrome home page background to awesome nature images background with time, weather & crypto price details",
//     "author": "sameerthemc@gmail.com",
//     "icons": {
//         "16": "time.png",
//         "48": "time.png",
//         "128": "time.png"
//     },
//     "action": {
//         "default_icon": {
//             "16": "time.png",
//             "48": "time.png",
//             "128": "time.png"
//         },
//         "default_title": "Momentom"
//     }
// }
