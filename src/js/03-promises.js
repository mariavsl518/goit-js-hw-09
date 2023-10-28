import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit)

function handleSubmit(evt) { 
  evt.preventDefault();

  let delay = Number(form.delay.value);
  const step = Number(form.step.value);
  const amount = Number(form.amount.value);

    for (let i = 1; i <= amount; i += 1) {
      const position = i;
      createPromise(position, delay)
      delay += step;
    }

};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      if (shouldResolve) {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      };
    }, delay
    )
  })
    
}
