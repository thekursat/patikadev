let userName = document.querySelector("#myName")
let clockInfo = document.querySelector("#myClock")
var reqName = prompt("Lütfen İsminizi Giriniz")

function takeName() {
    userName.innerHTML = reqName
}
