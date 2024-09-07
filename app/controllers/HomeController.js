export class HomeController {
  constructor() {
    console.log('This is the Home Controller');
  }
}

function time() {
  const time = new Date().toLocaleTimeString();
  const currentTime = document.getElementById('current-time');
  currentTime.textContent = time.toString();
}

setInterval(time, 1000);
