document.getElementById('withdrawButton').addEventListener("click", () => {
    const newWithdrawAmount = getInputFieldValueById('withdrawField');
    const previousWithdrawTotal = getTextElementValueById('withdrawTotal');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    
    setTextElementValueById('withdrawTotal', newWithdrawTotal);
    
    const previousBalanceTotal = getTextElementValueById("balanceTotal");
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById("balanceTotal", newBalanceTotal);
})