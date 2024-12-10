document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'e9c8cc8fdca34eb5ba902501240508'; // Replace with your actual API key
    const city = '28223'; // Change to your desired city
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.current.temp_f;
            const conditions = data.current.condition.text;
            const wind = data.current.wind_mph;
            const humidity = data.current.humidity;

            // Update the HTML with the fetched weather data
            document.getElementById('Temperature').textContent = `Temperature: ${temperature} °F`;
            document.getElementById('Conditions').textContent = `Conditions: ${conditions}`;
            document.getElementById('Wind').textContent = `Wind: ${wind}mph`;
            document.getElementById('Humidity').textContent = `Humidity: ${humidity}%`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // Display an error message if the weather data cannot be loaded
            document.getElementById('Location').textContent = 'Unable to load weather data.';
            document.getElementById('Temperature').textContent = '';
            document.getElementById('Conditions').textContent = '';
        });
});
