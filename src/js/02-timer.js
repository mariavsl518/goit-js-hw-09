
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const body = document.querySelector('body');
const input = document.querySelector('#datetime-picker');
const start = document.querySelector('[data-start]');
const timer = {
    div: document.querySelector('.timer'),
    field: document.querySelectorAll('.field'),
    value: document.querySelectorAll('.value'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

// input.addEventListener('blur', timeSetter)
start.addEventListener('click', handleCountdown);

// STYLES
body.style.padding = '40px';
start.style.height = '30px';
start.style.textTransform = 'uppercase';
timer.div.style.display = 'flex';
timer.div.style.gap = '10px';
timer.field.forEach((el) => {
    el.style.display = 'flex';
    el.style.flexDirection = 'column';
    el.style.alignItems = 'center';
});
timer.value.forEach((el) => { 
    el.style.fontSize =  '30px';
})

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(input, options);

// function timeSetter(evt) { 
//     console.log(timer.days.textContent = date.setDate())
    
// };

function handleCountdown() { 

};