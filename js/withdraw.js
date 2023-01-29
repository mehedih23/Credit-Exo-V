document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawValue = getInputValue('withdraw-field');

    if (isNaN(withdrawValue)) {
        alert('Please enter the correct amount!')
        return;
    }
    const totalWithdrawValue = getTotalValue('total-withdraw');

    if (withdrawValue > totalWithdrawValue) {
        alert("You don't have sufficient money")
        return;
    }

    const newTotalWithdraw = totalWithdrawValue + withdrawValue;

    setElementNewValue('total-withdraw', newTotalWithdraw);

    const getPrevTotalBalance = getTotalValue('total-balance');
    const newTotalBalance = getPrevTotalBalance - withdrawValue;

    setElementNewValue('total-balance', newTotalBalance);
})