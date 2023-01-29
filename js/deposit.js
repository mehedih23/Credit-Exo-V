document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositValue = getInputValue('deposit-field');

    if (isNaN(newDepositValue)) {
        alert('Please enter the correct amount!')
        return;
    }
    const prevTotalDepositValue = getTotalValue('total-deposit');

    const newTotalDeposit = prevTotalDepositValue + newDepositValue;

    setElementNewValue('total-deposit', newTotalDeposit);

    const getPrevTotalBalance = getTotalValue('total-balance');
    const newTotalBalance = getPrevTotalBalance + newDepositValue;

    setElementNewValue('total-balance', newTotalBalance);
})