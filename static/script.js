function getWeatherData() {
    const city = document.getElementById("cityInput").value
    if (city) {
        getWeather(city)
    } else {
        showErrorMessage("Please enter a valid city")
    }
}

async function getWeather(city) {
 try {
   const response = await fetch('http://localhost:3000/api/weather', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ city: city})
   })

   if (!response.ok) {
    throw new Error('No Network Response')
   }

   const data = await response.json()
   displayWeatherData(data)
} catch (error) {
    console.error('There was a problem with the fetch operation')
}

}

function displayWeatherData (data) {
    document.getElementById('cityPrompt').style.display = 'none'

    const weatherOutput = document.getElementById('weatherOutput')
    weatherOutput.innerHTML = `
        <h2>Weather in ${data.city}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Conditions: ${data.weather[0].description}</p>

        <button onclick="resetView()">Go Back</button>
        <button onclick="getFiveDayForecast(data.city)">Get Five Day Forecast</button>
        
    `
    weatherOutput.style.display = 'block'
}

function resetView() {
    document.getElementById('cityPrompt').style.display = 'block'
    document.getElementById('weatherOutput').style.display = 'none'
}

 async function getFiveDayForecast(city) {

    try {
        const response = await fetch('http://localhost:3000/api/weather/fiveday', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({ city: city})
        })
     
        if (!response.ok) {
         throw new Error('No Network Response')
        }
     
        const data = await response.json()
        drawCharts(data)
     } catch (error) {
         console.error('There was a problem with the fetch operation')
     }

}

function drawCharts () {
    
}
