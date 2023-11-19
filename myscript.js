let hours = document.getElementById('hrs');
let minutes = document.getElementById('mins');
let seconds = document.getElementById('secs');

setInterval(myfunction, 1000)

function myfunction() {
    let times = new Date();

    hours.innerHTML = (times.getHours()<10?'0':'') + times.getHours();
    minutes.innerHTML = (times.getMinutes()<10?'0':'') + times.getMinutes();
    seconds.innerHTML = (times.getSeconds()<10?'0':'') + times.getSeconds();
}
