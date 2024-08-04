window.onload = function() {
    const form = document.querySelector("#form");
    //console.log(form);

    form.addEventListener("submit", getFormValues);

    function getFormValues(e) {
        e.preventDefault(); // отмена перезагрузки страницы по умолчанию

        // * Получение данных
        const requestText = form.querySelector('[name="request"]'); // получение элемента с name="request"
        const allSymbols = form.querySelectorAll('[name="symbol"]'); // получение элементОВ с name="symbol"

        //console.log(requestText);
        //console.log(allSymbols);

        // проверить, какой символ выбран и записать его value в переменную selectedSymbol
        let selectedSymbol;
        for(let i = 0; i < allSymbols.length; i++) {
            console.log(allSymbols[i].checked);

            if(allSymbols[i].checked) {
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
        console.log(data.text);
        console.log(typeof(data.text));

        
    }



}