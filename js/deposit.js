document.getElementById('depositButton').addEventListener('click', () => {
    const newDepositAmount = getInputFieldValueById('depositField');
    // step-2: get previous deposit total by id
    const previousDepositTotal = getTextElementValueById('depositTotal');

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // set total deposit value
    setTextElementValueById('depositTotal', newDepositTotal);

    // set deposit total value
    setTextElementValueById("depositTotal", newDepositTotal);

    // get previous balance by using function
    const previousBalanceToral = getTextElementValueById("balanceTotal");
    const newBalanceTotal = previousBalanceToral + newDepositAmount
    setTextElementValueById("balanceTotal", newBalanceTotal);
})
