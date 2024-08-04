window.onload = function () {
    const form = document.querySelector("#form");
    form.addEventListener("submit", getFormValues);

    function getFormValues(e) {
        e.preventDefault(); // отмена перезагрузки страницы по умолчанию

        // * Получение данных
        const requestText = form.querySelector('[name="request"]'); // получение элемента с name="request"
        const allSymbols = form.querySelectorAll('[name="symbol"]'); // получение элементОВ с name="symbol"

        // проверить, какой символ выбран и записать его value в переменную selectedSymbol
        let selectedSymbol;
        for (let i = 0; i < allSymbols.length; i++) {
            console.log(allSymbols[i].checked);

            if (allSymbols[i].checked) {
                selectedSymbol = allSymbols[i].value;
                console.log(`Символ: ${selectedSymbol}`);
            }
        }

        // создать объект с данными
        const data = {
            text: requestText.value,
            symbol: selectedSymbol
        };
        console.log(data);

        // * Обработка текста 
        // const regExp = /([\u0401\u0451\u0400-\u04FF]).+/gium; - для сложных запросов на кириллице

        let text = data.text;
        let symbol = data.symbol;

        let textInLetters = text.split("");
        console.log(textInLetters);

        let hiddenText = "";
        let hiddenLetter;

        for (let i = 0; i < textInLetters.length; i++) {

            if (textInLetters[i] === ' ') {
                hiddenLetter = textInLetters[i];
            } else {
                hiddenLetter = textInLetters[i].replace(textInLetters[i], symbol);
            }
            hiddenText = hiddenText + hiddenLetter;

        }
        console.log(hiddenText);

        // * Вывод данных на страницу

        let outputField = document.querySelector("#result");
        outputField.innerHTML = hiddenText;

    }

}