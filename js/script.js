// document.getElementById('mobile-menu').addEventListener('click', function() {
//     var navList = document.getElementById('nav-list');
//     var menuToggle = document.getElementById('mobile-menu');
//     var menuIcon = document.getElementById('menu-icon');

//     // Проверяем, отображается ли меню
//     if (navList.style.display === 'block') {
//         navList.style.display = 'none';
//         menuIcon.classList.remove('open');
//         menuToggle.classList.remove('open'); // Удаляем класс 'open' для кнопки меню
//     } else {
//         navList.style.display = 'block';
//         navList.style.width = '100%'; // Устанавливаем ширину списка навигации на 100%
//         menuIcon.classList.add('open');
//         menuToggle.classList.add('open'); // Добавляем класс 'open' для кнопки меню, чтобы переместить её в правый верхний угол
//     }
// });





let timeInSeconds = 2 * 60 * 60; // начальное время в секундах
        const timerElement = document.getElementById('timer');

        function formatTime(seconds) {
            let hours = Math.floor(seconds / 3600);
            let minutes = Math.floor((seconds - (hours * 3600)) / 60);
            let secondsLeft = seconds - (hours * 3600) - (minutes * 60);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

            return `${hours}:${minutes}:${secondsLeft}`;
        }

        function updateTimer() {
            if (timeInSeconds >= 0) {
                timerElement.textContent = formatTime(timeInSeconds);
                timeInSeconds--;
            } else {
                clearInterval(timerInterval);
                alert("Время вышло!");
            }
        }

        
        let timerInterval = setInterval(updateTimer, 1000);






function formatDate(date) {
  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  let year = date.getFullYear();
  return day + '.' + month + '.' + year;
}

document.getElementById('dateDisplay').textContent = formatDate(new Date());







const phoneMask = document.getElementById('phone-mask');
IMask(
    phoneMask,
    {mask: '+{38} (\\000) 000-00-00'}
)