

function burger() {
   const mainLenght = document.querySelectorAll('[data-burger-main]')

   if (mainLenght.length > 0) {
      const btn = document.querySelector('[data-burger-btn]')
      const cross = document.querySelector('[data-burger-cross]')
      const main = document.querySelector('[data-burger-main]')

      //кнопка
      btn.addEventListener('click', (event) => {
         main.classList.add('_active')
      })

      //кнопка
      cross.addEventListener('click', (event) => {
         main.classList.remove('_active')
      })

      //сенсорное закрытие
      document.addEventListener('click', (event) => {
         const target = event.target
         if (target.closest('[data-burger-main]') || target.closest('[data-burger-btn]')) {

         } else {
            main.classList.remove('_active')
         }
      })

   } else {
      console.log('no-burger');
   }

}
burger()

function burger() {
   const mainLenght = document.querySelectorAll('[data-burger-main]')

   if (mainLenght.length > 0) {
      const btn = document.querySelector('[data-burger-btn]')
      const cross = document.querySelector('[data-burger-cross]')
      const main = document.querySelector('[data-burger-main]')

      //кнопка
      btn.addEventListener('click', (event) => {
         main.classList.add('_active')
      })

      //кнопка
      cross.addEventListener('click', (event) => {
         main.classList.remove('_active')
      })

      //сенсорное закрытие
      document.addEventListener('click', (event) => {
         const target = event.target
         if (target.closest('[data-burger-main]') || target.closest('[data-burger-btn]')) {

         } else {
            main.classList.remove('_active')
         }
      })

   } else {
      console.log('no-burger');
   }

}
burger()