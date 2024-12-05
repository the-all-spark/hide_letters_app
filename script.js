window.onload = function () {

    const form = document.querySelector("#form");
    form.addEventListener("submit", transformText);
    form.addEventListener("reset", resetFormData);

    // * ----- При клике на кнопку "Transform"
    function transformText(e) {
        e.preventDefault();
        showDeleteMessage(false);

        // * Получение данных  
        const requestText = form.querySelector('[name="request"]'); // элемент с name="request"
        const allSymbols = form.querySelectorAll('[name="symbol"]'); // элементЫ с name="symbol" 
        //console.log(allSymbols);

        // получить введенный текст
        let text = requestText.value;

        // определить какой символ выбран
        let selectedSymbol = getSelectedSymbol(allSymbols);
        console.log(`Символ: ${selectedSymbol}`);

        // * Обработка текста 
        // const regExp = /([\u0401\u0451\u0400-\u04FF]).+/gium; - для сложных запросов на кириллице
        let hiddenText = hideText(text, selectedSymbol);
        console.log(hiddenText);

        // * Вывод данных на страницу
        let outputField = document.querySelector("#result");
        outputField.innerHTML = hiddenText;

        // * Копирование текста при клике на кнопку
        const copyBtn = document.querySelector('.copy-icon');
        copyBtn.addEventListener('click', function () { copyHiddenText(hiddenText) } );
    }

    // функция получения выбранного символа для замены
    function getSelectedSymbol(symbolsArray) {
        for (let i = 0; i < symbolsArray.length; i++) {
            if (!symbolsArray[i].checked) continue; // true для выбранного символа
            return symbolsArray[i].value;
        }
    }

    // функция скрытия текста (замена символами)
    function hideText(text, symbol) {
        let textInLetters = text.split("");
        console.log(textInLetters);

        let hiddenTextResult = "";
        let hiddenLetter;
        for (let i = 0; i < textInLetters.length; i++) {
            if (textInLetters[i] === ' ') {
                hiddenLetter = textInLetters[i];
            } else {
                hiddenLetter = textInLetters[i].replace(textInLetters[i], symbol); 
            }
            hiddenTextResult += hiddenLetter;
        }

        return hiddenTextResult;
    }

    // функция копирования текста и вызов функции показа сообщения
    function copyHiddenText(hiddenText) {
        navigator.clipboard.writeText(hiddenText);
        showDeleteMessage(true);
    }

    // * ----- При клике на кнопку "Reset" - удаление результата и сообщения
    function resetFormData() {
        document.querySelector("#result").innerHTML = "";
        showDeleteMessage(false);
    }

    // * Функция удаления сообщения "Текст скопирован"
    function showDeleteMessage(flag) {
        let message = document.querySelector("#message");

        if (flag) {
            message.innerHTML = "Текст скопирован!";
        } else {
            message.innerHTML = "";
        } 
    }

}