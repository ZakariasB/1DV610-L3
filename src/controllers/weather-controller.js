
export class WeatherController {

    async getWeather(req, res) {
        const city = req.body.city

        try {
            const weatherApiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
            
            const data = await weatherApiResponse.json()
            res.json(data)
        } catch (error) {
            return res.status(500).json({error: 'Faulty Request'})
        }
   
    }

    async getFiveDayForecast(req, res) {
        const city = req.body.city;
    
        try {
            const forecastApiResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.API_KEY}`)
    
            const forecastData = await forecastApiResponse.json()
            const computedData = {}
            computedData.temperature = calculateFiveDayAverageTemperature()
            computedData.precipitation = calculateFiveDayAveragePrecipitation()
            computedData.weatherConditions = calculateWeatherConditions()
            res.json(computedData)
        } catch (error) {
            return res.status(500).json({error: 'Faulty Request'})
        }
    }

    calculateFiveDayAverageTemperature() {

    }

    calculateFiveDayAveragePrecipitation() {

    }

    calculateWeatherConditions() {
        
    }


}