function updateTime() {
    let nairobiElement = document.querySelector("#nairobi");
    let nairobiDateElement = nairobiElement.querySelector(".date");
    let nairobiTimeElement = nairobiElement.querySelector(".time");
    let nairobiTime = moment().tz("Africa/Nairobi");


    nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do, YYYY");
    nairobiTimeElement.innerHTML = nairobiTime.format('h:mm:ss[<small>]A[</small>]');


    let parisElement = document.querySelector("#paris");
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");


    parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
    parisTimeElement.innerHTML = parisTime.format('h:mm:ss[<small>]A[</small>]');
}

updateTime();
setInterval(updateTime, 1000);