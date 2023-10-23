import { BarChart, LineChart, PieChart } from './modules/Chart-Module/charts.js'





function getWeatherData() {
    const city = document.getElementById("cityInput").value
    if (city) {
        getWeather(city)
    } else {
        showErrorMessage("Please enter a valid city")
    }
}

function showErrorMessage(message) {
    const errorDiv = document.getElementById("errorMessages")
    errorDiv.style.display = 'block'
    errorDiv.innerHTML =  `
    <h1>Error</h1>
    <h2 id="errorDescription"></h2>
    <button id="tryAgain">Go Back</button>
    `
    document.getElementById("errorDescription").textContent = message
    document.getElementById('tryAgain').addEventListener("click", resetView)


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
   displayWeatherData(data, city)
} catch (error) {
    showErrorMessage('City Not Found!')
}

}

function displayWeatherData (data, city) {
    document.getElementById('cityPrompt').style.display = 'none'

    const weatherOutput = document.getElementById('weatherOutput')
    weatherOutput.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Conditions: ${data.weather[0].description}</p>

        <button id="reset">Go Back</button>
        <button id="fiveDay">Get Five Day Forecast</button>
        
    `

    document.getElementById('reset').addEventListener("click", resetView)
    document.getElementById('fiveDay').addEventListener("click", function() {
        getFiveDayForecast(city)
    })
    weatherOutput.style.display = 'block'
}

function resetView() {
    document.getElementById('cityPrompt').style.display = 'block'
    document.getElementById('weatherOutput').style.display = 'none'

    document.getElementById('chartDiv').style.display = 'none'
    document.getElementById('errorMessages').style.display = 'none'
    document.getElementById("errorDescription").textContent = ''
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
        showErrorMessage('No weather data')
     }

}

function drawCharts (data) {
    document.getElementById('chartDiv').style.display = 'block'
    

    const days = Object.keys(data.dailyAvgTemps)
    const temperatures = Object.values(data.dailyAvgTemps)
    const precipitations = Object.values(data.dailyPrecipitation)
    const conditions = Object.keys(data.weatherConditions)
    const conditionCounts = Object.values(data.weatherConditions)


    const lineChartOptions = {
        canvasId: 'temperatureChart',
        data: temperatures,
        labels: days,
        color:'#FF0000'


    }
    const lineChart = new LineChart(lineChartOptions)

    const barChartOptions = {
        canvasId: 'precipitationChart',
        data: precipitations,
        labels: days,
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFC0CB']

    }
    const barChart = new BarChart(barChartOptions)

    const pieChartOptions = {
        canvasId: 'weatherConditionsChart',
        data: conditionCounts,
        labels: conditions,
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFC0CB']

    }
    const pieChart = new PieChart(pieChartOptions)

    lineChart.draw()
    barChart.draw()
    pieChart.draw()


}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('citySubmit')
    button.addEventListener('click', getWeatherData)
    
})

    

