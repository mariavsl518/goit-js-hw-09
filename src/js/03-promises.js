import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit)

function handleSubmit(evt) { 
  evt.preventDefault();

  const delay = Number(form.delay.value);
  const step = Number(form.step.value);
  const amount = Number(form.amount.value);

  for (i = 0; i < amount; i += 1){ 
    position = i;
    console.log(position);
      createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay = delay + step;
  }

};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => { 
      setTimeout(() => { 
      if (shouldResolve) {
          promise.resolve({position, delay});
        } else {
          promise.reject({position, delay});
        };
      }, `${delay}`)
  })
    
}
