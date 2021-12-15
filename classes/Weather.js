class Weather{
    constructor(city) {
        this.city = city
        this.key = "af78b67dd6b16d7d18e20153c2d8dfff"
    }

     async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }

    changeCity(city){
        this.city = city
    }
}