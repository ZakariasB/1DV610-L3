function getWeatherData() {
    const city = document.getElementById("cityInput").value
    if (city) {
        getWeather(city)
    } else {
        showErrorMessage("Please enter a valid city")
    }
}
