# Hide letters application (HTML | CSS | JS)

## О проекте
Приложение позволяет заменить каждую букву введенного пользователем текста на символ, который он выбирает из предложенного списка (по умолчанию - на звездочку "*"). В результате выдается "замаскированный" текст.

**Использование**  
Приложение можно использовать, чтобы задать вопрос боту в чате (там где само содержание вопроса для бота не имеет значения, например, чтобы получить в ответ рандомное число). При этом текст вопроса скрывается от остальных участников чата. 

**Инструменты:** 
![image](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white "Visual Studio Code")

**Языки:** 
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white "HTML") 
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white "CSS") 
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E "JS") 

**Демо:** [Перейти на сайт](https://the-all-spark.github.io/hide_letters_app/) 

<img src="./assets/app_screenshot_blank.jpg" width="400" alt="Скриншот приложения">
<img src="./assets/app_screenshot.jpg " width="400" alt="Скриншот приложения">

## Реализованный функционал:
1. замена каждого символа (кроме пробела) в введенном тексте на символ, выбранный пользователем из списка;
2. при клике на кнопку "Transform" - преобразование текста, на кнопку "Reset" - сброс введенных данных;
3. при клике на иконку "Скопировать" - копирование преобразованного текста в буфер обмена и вывод сообщения "Текст скопирован!";
4. сообщение удаляется при введении нового запроса и отправки формы заново ("Transform"), а также при сбросе введенных ранее данных ("Reset").