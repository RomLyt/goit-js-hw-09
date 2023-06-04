import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
// деактивую кнопку старт
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
      Notiflix.Notify.failure('Please choose a date in the future');
      // alert('Please choose a date in the future');
    } else {
      // активую кнопку старт
      startBtn.removeAttribute('disabled');
    }
  },
};

const datePicker = flatpickr('#datetime-picker', options);

// функція для розрахунку часу
function countdownTimer() {
  const deadline = datePicker.selectedDates[0];
  let diff = deadline - new Date();
  if (diff <= 0) {
    clearInterval(timerId);
  }
  // такий варіант краще й зрозуміліше
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

function startTimer() {
  let timerId = null;
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
}

startBtn.addEventListener('click', startTimer);
