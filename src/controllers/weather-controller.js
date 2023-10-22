
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
            computedData.dailyAvgTemps = this.computeAverageTemperature(forecastData)
            computedData.dailyPrecipitation = this.computeTotalPrecipitation(forecastData)
            computedData.weatherConditions = this.computeWeatherConditions(forecastData)
            res.json(computedData)
        } catch (error) {
            return res.status(500).json({error: 'Faulty Request'})
        }
    }

    computeAverageTemperature(data) {
        let dailyTemperatures = {}

    data.list.forEach(entry => {
        let day = entry.dt_txt.split(' ')[0]
        if (!dailyTemperatures[day]) {
            dailyTemperatures[day] = {
                sum: 0,
                count: 0
            }
        }
        dailyTemperatures[day].sum += entry.main.temp
        dailyTemperatures[day].count++
    })

    for (let day in dailyTemperatures) {
        dailyTemperatures[day] = dailyTemperatures[day].sum / dailyTemperatures[day].count
    }

    return dailyTemperatures

    }

    computeTotalPrecipitation(data) {
        let dailyPrecipitation = {}
    
        data.list.forEach(entry => {
            let day = entry.dt_txt.split(' ')[0]
            if (!dailyPrecipitation[day]) {
                dailyPrecipitation[day] = 0
            }
            if (entry.rain && entry.rain['3h']) {
                dailyPrecipitation[day] += entry.rain['3h']
            }
        })
    
        return dailyPrecipitation
    }

    computeWeatherConditions(data) {
        let conditionCounts = {}
    
        data.list.forEach(entry => {
            let condition = entry.weather[0].description
            if (!conditionCounts[condition]) {
                conditionCounts[condition] = 0
            }
            conditionCounts[condition]++
        })
    
        return conditionCounts
    }


}