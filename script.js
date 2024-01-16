async function fetchWeather() {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=YOUR_LOCATION");
    const data = await response.json();
    document.getElementById("location").innerHTML = `Location: ${data.location.name}, ${data.location.country}`;
    document.getElementById("temperature").innerHTML = `Temperature: ${data.current.temp_c}°C`;
    document.getElementById("condition").innerHTML = `Condition: ${data.current.condition.text}`;
}
fetchWeather();
