let userName = document.querySelector("#myName")
let clockInfo = document.querySelector("#myClock")
let reqName = prompt("Lütfen İsminizi Giriniz")

function takeName() {
    userName.innerHTML = reqName
}

function showTime(){
    const clock = new Date();
    const hour = clock.getHours(); //saat
    const time = clock.getMinutes(); //dakika
    const day = clock.getDay();
    const second = clock.getSeconds();
    const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    const formatDay=daysOfWeek[day];

    myClock.innerHTML = `${hour}: ${time} : ${second} ${formatDay}`;
    setInterval(showTime,1000);
}

takeName()
showTime()