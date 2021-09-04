const API_KEY =`d6abb2be5ebbd3051bf6569393d54e4b`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;

}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // set wather icon
    const url =` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}