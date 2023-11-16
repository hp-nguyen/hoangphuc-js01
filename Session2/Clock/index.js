const secondHandEl = document.getElementById('second');
const minuteHandEl = document.getElementById('minute');
const hourhandEl = document.getElementById('hour');
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const now = new Date();
const nowSecond = now.getSeconds();
const nowMinute = now.getMinutes();
const nowHour = now.getHours();
const nowDayOfWeek = now.getDay() - 1;
const nowDate = now.getDate();
const nowMonth = now.getMonth();
let secondHandRotateDeg = nowSecond * 6 - 90;
let minuteHandRotateDeg = nowMinute * 6 - 90;
let hourHandRotateDeg = ((nowHour - 12) * 360) / 12 - 90;
timeEl.innerText = `${nowHour}:${nowMinute}`;
dateEl.innerText = `${days[nowDayOfWeek].toUpperCase()}, ${months[nowMonth].toUpperCase()} ${nowDate}`;

setInterval(() => {
  secondHandEl.style.rotate = secondHandRotateDeg + 'deg';
  secondHandRotateDeg += 6;
  minuteHandEl.style.rotate = minuteHandRotateDeg + 'deg';
  minuteHandRotateDeg += 0.1;
  hourhandEl.style.rotate = hourHandRotateDeg + 'deg';
  hourHandRotateDeg += 360 / 24 / 60 / 60;
}, 1000);
