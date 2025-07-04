async function getWeather() {
  const city = document.getElementById("cityInput").value;
  console.log(city);
  const apiKey = "639b7f35296b13a9dc11a5d2a4bb65ae"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    document.getElementById("weatherResult").innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].main}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${err.message}</p>`;
  }
}
