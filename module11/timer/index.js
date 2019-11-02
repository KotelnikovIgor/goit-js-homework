

class CountdownTimer {
  constructor({selector, targetDate}){
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.refs = {
    days: document.querySelector('[data-value="days"]'),
    hours:  document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
    }
  };

  myTimer() {
    setInterval(() => {
    const time = this.targetDate - Date.now();
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));  
  


    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;

    const updeteTime = `${days}:${hours}:${mins}:${secs}`
    console.log('time', time)
    console.log('object', updeteTime)
  
    }, 1000);
  }
}

function pad(value) {
  return String(value).padStart(2, '0');
}

const t = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('nov, 16, 2019'),
  });

t.myTimer();  

