anime({
    targets: '.logo',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    loop: true
 })
 
 let themeBtn = document.querySelector("#themeToggle img"); // Получаем элемент <img> внутри кнопки

 function setTheme(theme) {
     if (theme == 'light') {
         document.body.classList.add("light-theme");
         themeBtn.src = 'img/яркая тема.jpg'; // Указываем путь к изображению для светлой темы
     } else {
         document.body.classList.remove("light-theme");
         themeBtn.src = 'img/темная тема.jpg'; // Указываем путь к изображению для тёмной темы
     }
 }
 
 let theme = getCookieValue('theme') || 'dark'; // Если куки нет, используем тёмную тему по умолчанию
 setTheme(theme);
 
 themeBtn.parentElement.addEventListener("click", () => {
     document.body.classList.toggle('light-theme'); // Перемикаем класс тематики
     theme = (theme == 'light') ? 'dark' : 'light'; // Меняем тему
     setTheme(theme);
     // Сохраняем тему в куки
     document.cookie = `theme=${theme}; max-age=${60 * 60 * 24 * 7}; path=/`;
 });
 