export class HomeController {
  constructor() {
    console.log('This is the Home Controller');
  }
}

const timeElem = document.getElementById('time');
const greetingElm = document.getElementById('greet');

function formatTime(date) {
  const HOURS = date.getHours() % 12 || 12;
  const MINUTES = date.getMinutes();
  const SECONDS = date.getSeconds();
  const isAm = date.getHours() < 12;

  return `${HOURS.toString().padStart(2, '0')}:${MINUTES.toString().padStart(2, '0')}:${SECONDS.toString().padStart(2, '0')} ${isAm ? 'AM' : 'PM'}`;
}

function timeGreeting(date) {
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) {
    return 'Good Morning!';
  } else if (hour >= 12 && hour < 17) {
    return 'Good Afternoon!';
  } else if (hour >= 17 && hour < 21) {
    return 'Good Evening!';
  } else {
    return 'Good Night!';
  }
}

setInterval(() => {
  const now = new Date();
  timeElem.textContent = formatTime(now);
  greetingElm.textContent = timeGreeting(now);
}, 300);
