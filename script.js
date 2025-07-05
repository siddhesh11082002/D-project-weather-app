
const getbtn = document.querySelector('#getbtn');

getbtn.addEventListener('click' , getData);

async function getData(event){
    //testing
    console.log('clicked');
    const cityName = document.querySelector('#cityName');
    let city = cityName.value;
    const apiKey = "639b7f35296b13a9dc11a5d2a4bb65ae";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const res = await fetch(url);
        if(!res.ok) throw new Error("City name not found");
        const data = await res.json();

        const myDiv = document.getElementById("weatherResult")
        myDiv.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        cityName.value = '';
    } catch (err) {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red ">${err.message}</p>`;
    }


}