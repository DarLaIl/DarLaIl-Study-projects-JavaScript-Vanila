const sum = document.querySelector("#sum");

sum.addEventListener("click", calculateAmount);

function calculateAmount(e) {
    e.preventDefault();
    const mortgagePercent = document.querySelector("#mortgagePercent").value;
    const cost = document.querySelector("#cost").value;
    const initialFee = document.querySelector("#initialFee").value;
    const years = document.querySelector("#years").value;
      
    if (cost === "" || initialFee === "" || years === "") {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Проверьте введенную информацию'
        })
    }
    else if (isNaN(cost) || isNaN(initialFee) || isNaN(years)) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Введите цифры!'
        })
    }
    let month = years * 12;
    console.log(month);
    let monthlyPercents =  mortgagePercent / 12;
    console.log(monthlyPercents);
    let totalCost = cost - initialFee;
    console.log(totalCost);
    let monthlyPayment = totalCost * ((monthlyPercents * (Math.pow(1 + monthlyPercents, month))) / (Math.pow(1 + monthlyPercents, month) - 1));
    console.log(monthlyPayment);
    let totalPercents = (monthlyPayment * month) - totalCost;
    console.log(totalPercents);
    let totalCostWithPercents = totalCost + totalPercents;
    console.log(totalCostWithPercents);
   
    document.querySelector("#monthlyPayment").textContent = monthlyPayment.toFixed(0);
    document.querySelector("#totalCost").textContent = totalCost.toFixed(0);
    document.querySelector("#totalCostWithPercents").textContent = totalCostWithPercents.toFixed(0);
}
