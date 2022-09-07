const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output-box");

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    let ip = Number(initialPrice.value);
    let qty = Number(quantity.value);
    let curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current) {
        let loss = (initial - current)*quantity;
        let lossPercentage = (loss/initial)*100;

        output.textContent = `Hey the loss is ${loss} and the loss percent is ${lossPercentage}%`;

        output.style.color = "red";
    }else if(current > initial) {
        let profit = (current - initial)*quantity;
        let profitPercentage = (profit/initial)* 100;

        output.textContent = `Hey the profit is ${profit} and the profit percent is ${profitPercentage}%`;

        output.style.color = "#3CCF4E";
    }else {
        output.textContent = 'No pain no gain and no gain no pain';

        output.style.color = "white"
    }
}
