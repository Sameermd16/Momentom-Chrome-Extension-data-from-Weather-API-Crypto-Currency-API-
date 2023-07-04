
//unsplash api  
//* URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature
//API for cryptocurrency

const cryptoTopDiv = document.getElementById('crypto-top')
const priceDivEl = document.getElementById('price')
const timeEL = document.getElementById('time')

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

function getCurrentTime() {
    const date = new Date()
    timeEL.textContent = date.toLocaleTimeString("en-in", {timeStyle: "medium"})
}
setInterval(getCurrentTime, 1000)

