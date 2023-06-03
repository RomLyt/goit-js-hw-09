import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');

startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentTime = Date.now();
    if (currentTime >= selectedDate) {
      alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};

const datePicker = flatpickr('#datetime-picker', options);

function startTimer() {
  const endTime = datePicker.selectedDates[0];
  const newTime = new Date();
  let differenceTime = newTime - endTime;

  timer = setInterval(() => {
    const { days, hours, minutes, seconds } = cnvert;
  });
}
