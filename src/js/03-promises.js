import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const firstDelay = Number(
    document.querySelector('input[name="delay"]').value
  );
  const step = Number(document.querySelector('input[name="step"]').value);
  const amount = Number(document.querySelector('input[name="amount"]').value);

  let currentDelay = firstDelay;

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    currentDelay += step;
  }

  form.reset();
});
