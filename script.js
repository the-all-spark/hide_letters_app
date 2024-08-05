window.onload = function () {
    const form = document.querySelector("#form");
    form.addEventListener("submit", getFormValues);
    form.addEventListener("reset", clearFormValues);

    // * При клике на кнопку "Transform"

    function getFormValues(e) {
        e.preventDefault(); // отмена перезагрузки страницы по умолчанию
        deleteMessage(); // убрать сообщение о копировании текста

        // * Получение данных
        // 1 способ получения данных:
        const requestText = form.querySelector('[name="request"]'); // получение элемента с name="request"
        const allSymbols = form.querySelectorAll('[name="symbol"]'); // получение элементОВ с name="symbol"

        // 2 способ получения данных:
        /*
        const formData = new FormData(form); // создание объекта FormData, передача в него элемента формы
        const requestText = formData.get('request'); // get(ключ) - возвращает первое значение ключа
        const allSymbols = formData.getAll('symbol'); // возвращает массив значений для указанного ключа
        */

        let text = requestText.value;

        // проверить, какой символ выбран и записать его value в переменную selectedSymbol
        let selectedSymbol;
        for (let i = 0; i < allSymbols.length; i++) {
            console.log(allSymbols[i].checked);

            if (allSymbols[i].checked) {
                selectedSymbol = allSymbols[i].value;
                console.log(`Символ: ${selectedSymbol}`);
            }
        }

        // * Обработка текста 
        // const regExp = /([\u0401\u0451\u0400-\u04FF]).+/gium; - для сложных запросов на кириллице

        let textInLetters = text.split("");
        console.log(textInLetters);

        let hiddenText = "";
        let hiddenLetter;

        for (let i = 0; i < textInLetters.length; i++) {

            if (textInLetters[i] === ' ') {
                hiddenLetter = textInLetters[i];
            } else {
                hiddenLetter = textInLetters[i].replace(textInLetters[i], selectedSymbol); 
            }
            hiddenText = hiddenText + hiddenLetter;

        }
        console.log(hiddenText);

        // * Вывод данных на страницу

        let outputField = document.querySelector("#result");
        outputField.innerHTML = hiddenText;

        // * Копирование текста при клике на кнопку

        const copyBtn = document.querySelector('.copy-icon');

        copyBtn.addEventListener('click', function () {
            console.log("Скопировать текст и вывести сообщение");
            navigator.clipboard.writeText(hiddenText);

            let message = document.querySelector("#message");
            message.innerHTML = "Текст скопирован!";
        })
    }

    // * При клике на кнопку "Reset"

    function clearFormValues() {
        deleteMessage();
        let outputField = document.querySelector("#result");
        outputField.innerHTML = "";
    }

    // * Очистка блока с сообщением о копировании текста
    function deleteMessage() {
        console.log("Убрать сообщение");

        let message = document.querySelector("#message");
        message.innerHTML = "";
    }

}