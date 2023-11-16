const secondEl = document.getElementById('second');
const minuteEl = document.getElementById('minute');
const hourEl = document.getElementById('hour');
const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const now = new Date();
const nowSecond = now.getSeconds()
const nowMinute = now.getMinutes()
const nowHour = now.getHours()
const nowDayOfWeek = now.getDay()
const nowDate = now.getDate()
const nowMonth = now.getMonth()
let secondRotateDeg = nowSecond * 6 - 90;
let minuteRotateDeg = nowMinute * 6 - 90;
let hourRotateDeg = ((nowHour - 12) * 360) / 12 - 90;
timeEl.innerText = `${nowHour}:${nowMinute}`
dateEl.innerText= `${days[nowDayOfWeek-1].toUpperCase()}, ${months[nowMonth].toUpperCase()} ${nowDate}`
console.log(nowDayOfWeek)
setInterval(() => {
  secondEl.style.rotate = secondRotateDeg + 'deg';
  secondRotateDeg += 6;
  minuteEl.style.rotate = minuteRotateDeg + 'deg';
  minuteRotateDeg += 0.1;
  hourEl.style.rotate = hourRotateDeg + 'deg';
  hourRotateDeg += 360 / 24 / 60 / 60;
}, 1000);
