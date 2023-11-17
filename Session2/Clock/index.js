const clockEl = document.getElementById('clock');
const centerPointEl = document.getElementById('center-point');
const secHandEl = document.getElementById('second');
const minHandEl = document.getElementById('minute');
const hrHandEl = document.getElementById('hour');
const digitalClockEl = document.getElementById('digital-clock');
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const handStyles = {
  'background-color': '#fff',
  width: '40%',
  height: '1.5%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%)',
  'border-radius': '100% 12px 12px 100%',
  'transform-origin': '0 0',
  'box-shadow': '0 0 5px 0px #fff',
};
Object.assign(clockEl.style, {
  width: '25vw',
  'aspect-ratio': '1',
  'background-color': '#212529',
  'border-radius': '50%',
  position: 'relative',
  'box-shadow': '0 0 50px 5px #e599f7',
});
Object.assign(centerPointEl.style, {
  'background-color': '#fff',
  width: '3%',
  'aspect-ratio': '1',
  'border-radius': '50%',
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
Object.assign(secHandEl.style, {
  ...handStyles,
  'background-color': '#e599f7',
  'box-shadow': '0 0 5px 0px #e599f7',
});
Object.assign(minHandEl.style, {
  ...handStyles,
  width: '33%',
});
Object.assign(hrHandEl.style, {
  ...handStyles,
  width: '23%',
});
Object.assign(digitalClockEl.style, {
  'text-align': 'center',
  color: '#fff',
});
Object.assign(timeEl.style, {
  'font-size': '3.2rem',
  'font-weight': '500',
});
Object.assign(dateEl.style, {
  color: '#ced4da',
  'font-weight': '500',
});
const nowDateTime = {
  sec: 0,
  min: 0,
  hr: 0,
  dayOfWeek: 0,
  dayOfMonth: 0,
  month: 0,
  getNowTimes() {
    const now = new Date();
    this.sec = now.getSeconds();
    this.min = now.getMinutes();
    this.min = this.min < 10 ? '0' + this.min : this.min;
    this.hr = now.getHours();
    this.dayOfWeek = now.getDay() - 1;
    this.dayOfMonth = now.getDate();
    this.month = now.getMonth();
  },
};
const clock = {
  secHandRotateDeg: 0,
  minHandRotateDeg: 0,
  hrHandRotateDeg: 0,
  secHandEl,
  minHandEl,
  hrHandEl,
  initHandDegs() {
    this.secHandRotateDeg = nowDateTime.sec * 6 - 90;
    this.minHandRotateDeg = nowDateTime.min * 6 - 90;
    this.hrHandRotateDeg = ((nowDateTime.hr - 12) * 360) / 12 - 90;
  },
  updateHandsPos() {
    secHandEl.style.rotate = this.secHandRotateDeg + 'deg';
    this.secHandRotateDeg += 6;
    minHandEl.style.rotate = this.minHandRotateDeg + 'deg';
    this.minHandRotateDeg += 0.1;
    hrHandEl.style.rotate = this.hrHandRotateDeg + 'deg';
    this.hrHandRotateDeg += 360 / 24 / 60 / 60;
  },
};
const digitalClock = {
  timeEl,
  dateEl,
  setTime() {
    timeEl.innerText = `${nowDateTime.hr}:${nowDateTime.min}`;
    dateEl.innerText = `${days[nowDateTime.dayOfWeek].toUpperCase()}, ${months[
      nowDateTime.month
    ].toUpperCase()} ${nowDateTime.dayOfMonth}`;
  },
};
nowDateTime.getNowTimes();
clock.initHandDegs();
clock.updateHandsPos();
digitalClock.setTime();

setInterval(() => {
  nowDateTime.getNowTimes();
  clock.updateHandsPos();
  digitalClock.setTime();
}, 1000);
