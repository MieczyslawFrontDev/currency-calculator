{
    const resultElement = document.querySelector(".js-result");
    const formElement = document.querySelector(".js-form");

    const calculateResult = (amount, currency) => {
        let rubel = 0.0560
        let real = 0.7496
        let jen = 3.6326

        switch (currency) {

            case "RUB":
                return amount / rubel;


            case "BRL":
                return amount / real;


            case "JPY":
                return amount / jen;

        }
    }

    const changeResultText = (result, currency) => {
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;

    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        changeResultText(result, currency)
    }

    const onFormReset = () => {
        resultElement.innerText = "N/A";
        currency = "RUB";
    }

    const init = () => {
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", onFormReset);
    }

    init();
}