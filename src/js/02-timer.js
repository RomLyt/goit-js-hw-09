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
  const deadline = datePicker.selectedDates[0];

  let timerId = null;

  // функція для розрахунку часу
  function countdownTimer() {
    let diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
  // оголошуємо змінні відображення таймеру
  const $days = document.querySelector('.value[data-days]');
  const $hours = document.querySelector('.value[data-hours]');
  const $minutes = document.querySelector('.value[data-minutes]');
  const $seconds = document.querySelector('.value[data-seconds]');

  countdownTimer();

  timerId = setInterval(countdownTimer, 1000);
}
// запуск таймера
startBtn.addEventListener('click', startTimer);
