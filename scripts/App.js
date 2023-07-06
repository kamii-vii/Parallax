document.addEventListener('mousemove', e =>{
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * .005}deg;

        `
})
})

window.addEventListener('devicemotion', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x-ac: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y-ac: ${(e.clientY - window.innerHeight / 2) * .005}deg;

        `
})
})


//     var accelerationX = event.accelerationIncludingGravity.x;
//     var accelerationY = event.accelerationIncludingGravity.y;
  
//     // Виклик функції для зміни об'єкту на основі прискорення
//     transformObject(accelerationX, accelerationY);
//   });
  
//   // Функція, яка змінює об'єкт на основі прискорення
//   function transformObject(accelerationX, accelerationY) {
//     // Ваш код для зміни об'єкту на основі значень прискорення
//     // Наприклад, встановлення стилів CSS об'єкта на основі прискорення
//     var object = document.getElementsByClassName('layers__container');
//     object.style.setProperty('--move-x-ac', (accelerationX * -0.005) + 'deg');
//     object.style.setProperty('--move-y-ac', (accelerationY * 0.005) + 'deg');
//   }