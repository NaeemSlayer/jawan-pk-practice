// Get elements once at the start using more concise selectors
const elements = {
  hour: document.getElementById("hour"),
  min: document.getElementById("min"),
  sec: document.getElementById("sec"),
  msec: document.getElementById("msec"),
  startButton: document.getElementById("startButton"),
  lapList: document.getElementById("lapList")
};

// Store time values in a single object
const time = {
  hour: 0,
  min: 0,
  sec: 0,
  msec: 0
};

let interval;
let lapCount = 0;

// Format time values into a string
function formatTime(h, m, s, ms) {
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
}

// Update display with leading zeros
function updateDisplay() {
  elements.hour.textContent = time.hour.toString().padStart(2, '0');
  elements.min.textContent = time.min.toString().padStart(2, '0');
  elements.sec.textContent = time.sec.toString().padStart(2, '0');
  elements.msec.textContent = time.msec.toString().padStart(2, '0');
}

function timer() {
  time.msec++;
  
  if (time.msec >= 100) {
      time.msec = 0;
      time.sec++;
      
      if (time.sec >= 60) {
          time.sec = 0;
          time.min++;
          
          if (time.min >= 60) {
              time.min = 0;
              time.hour++;
          }
      }
  }
  
  updateDisplay();
}

function start() {
  if (!interval) {
      interval = setInterval(timer, 10);
      elements.startButton.disabled = true;
      elements.startButton.style.opacity = '0.6';
      elements.startButton.style.cursor = 'not-allowed';
  }
}

function stop() {
  if (interval) {
      clearInterval(interval);
      interval = null;
      elements.startButton.disabled = false;
      elements.startButton.style.opacity = '1';
      elements.startButton.style.cursor = 'pointer';
  }
}

function reset() {
  // Reset all time values
  Object.keys(time).forEach(key => time[key] = 0);
  
  // Clear lap list
  elements.lapList.innerHTML = '';
  lapCount = 0;
  
  // Update display and stop timer
  updateDisplay();
  stop();
}

function lap() {
  if (interval) {
      lapCount++;
      const lapTime = formatTime(time.hour, time.min, time.sec, time.msec);
      
      // Create new lap element
      const lapItem = document.createElement('div');
      lapItem.className = 'lap-item';
      
      // Add lap number and time
      lapItem.innerHTML = `
          <span class="lap-number">Lap ${lapCount}</span>
          <span class="lap-time">${lapTime}</span>
      `;
      
      // Add to the beginning of the list (most recent first)
      elements.lapList.insertBefore(lapItem, elements.lapList.firstChild);
      
      // Add animation class
      setTimeout(() => lapItem.classList.add('show'), 10);
  }
}

// Initialize display with leading zeros
updateDisplay();