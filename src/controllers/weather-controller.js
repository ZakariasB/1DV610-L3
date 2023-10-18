
export class WeatherController {

    async getWeather() {
        const city = req.body.city

        try {
            const weatherApiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
            
            const data = await weatherApiResponse.json()
            res.json(data)
        } catch (error) {
            return res.status(500).json({error: 'Faulty Request'})
        }
   
    }
}