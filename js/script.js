let clockH = document.getElementsByClassName('clock-hours')
let clockM = document.getElementsByClassName('clock-minutes')
let clockS = document.getElementsByClassName('clock-seconds')

// let clockH = document.querySelector('.clock-hours');
// let clockM = document.querySelector('.clock-minutes');
// let clockS = document.querySelector('.clock-seconds');

let countdownD = document.querySelector('.countdown-days')
let countdownH = document.querySelector('.countdown-hours')
let countdownM = document.querySelector('.countdown-minutes')
let countdownS = document.querySelector('.countdown-seconds')

let startClock = () => {
  updateTime()
  updateCountdown()
  setInterval(updateTime, 1000)
  setInterval(updateCountdown, 1000)
}

let updateTime = () => {
  let now = new Date()
  let hours = now.getHours() % 12
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  clockH[0].style.transform = `rotate(${hours * 30}deg)`
  clockM[0].style.transform = `rotate(${minutes * 6}deg)`
  clockS[0].style.transform = `rotate(${seconds * 6}deg)`
}

let updateCountdown = () => {
  let finalDate = new Date('July 31, 2022 00:00:00')
  let now = new Date()
  let difference = finalDate - now

  let d = 86400000 //d = 24 * h
  let h = 3600000 //h = 60 * m
  let m = 60000 //m = 60 * s
  let s = 1000 //s = 1000

  let countdownDays = Math.floor(difference / d)
  let countdownHours = Math.floor((difference % d) / h)
  let countdownMinutes = Math.floor((difference % h) / m)
  let countdownSeconds = Math.floor((difference % m) / s)

  countdownD.textContent = countdownDays
  countdownH.textContent = countdownHours
  countdownM.textContent = countdownMinutes
  countdownS.textContent = countdownSeconds
}

startClock()
