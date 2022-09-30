

function burger() {
   const mainLenght = document.querySelectorAll('[data-burger-main]')

   if (mainLenght.length > 0) {
      const btn = document.querySelector('[data-burger-btn]')
      const cross = document.querySelector('[data-burger-cross]')
      const main = document.querySelector('[data-burger-main]')
      const blackout = document.querySelector('[data-burger-blackout]')
      const tagBody = document.querySelector('body')

      //кнопка
      btn.addEventListener('click', (event) => {
         main.classList.add('_active')
         blackout.classList.add('_active')
         tagBody.classList.add('_lock-scroll')
      })

      //кнопка
      cross.addEventListener('click', (event) => {
         main.classList.remove('_active')
         blackout.classList.remove('_active')
         tagBody.classList.remove('_lock-scroll')
      })

      //сенсорное закрытие
      document.addEventListener('click', (event) => {
         const target = event.target
         if (target.closest('[data-burger-main]') || target.closest('[data-burger-btn]')) {

         } else {
            main.classList.remove('_active')
            blackout.classList.remove('_active')
            tagBody.classList.remove('_lock-scroll')
         }
      })

   } else {
      console.log('no-burger');
   }

}
burger()





