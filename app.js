//LS object
const ls = new LS()

//init city data
const initCity = ls.getCity()

//Weather object
const weather = new Weather(initCity)

//UI object
const ui = new UI()

//Events
const form = document.querySelector("#change-city")
form.addEventListener("submit", changeWeather)

//Change weather
function changeWeather(event){
    const city = document.querySelector("#city-name").value
    weather.changeCity(city)
    ls.setCity(city)
    getWeather()
    document.querySelector("#city-name").value = ""
    event.preventDefault()
}

//Get city weather
function getWeather(){
    weather.getWeather()
        .then(data => {
            console.log(data)
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}

getWeather()