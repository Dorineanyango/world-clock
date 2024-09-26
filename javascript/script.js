function updateTime() {
    let nairobiElement = document.querySelector("#nairobi");
    if (nairobiElement){
        let nairobiDateElement = nairobiElement.querySelector(".date");
        let nairobiTimeElement = nairobiElement.querySelector(".time");
        let nairobiTime = moment().tz("Africa/Nairobi");


        nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do, YYYY");
        nairobiTimeElement.innerHTML = nairobiTime.format('h:mm:ss[<small>]A[</small>]');

    }
    

    let parisElement = document.querySelector("#paris");
    if (parisElement){
        let parisDateElement = parisElement.querySelector(".date");
        let parisTimeElement = parisElement.querySelector(".time");
        let parisTime = moment().tz("Europe/Paris");


        parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
        parisTimeElement.innerHTML = parisTime.format('h:mm:ss[<small>]A[</small>]');
    }
}

function updateCity(event) {
    let cityTimezone = event.target.value;
    if (cityTimezone === "current"){
        cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);