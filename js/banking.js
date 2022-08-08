// handle deposit button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const deposiInput = document.getElementById("deposit-input");
    const newDepositText = deposiInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    // update deposit total
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;
    // //  update banlce
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBanlaneTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBanlaneTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field

    deposiInput.value = "";
  });

// handle widthdrew
document
  .getElementById("Widthdraw-button")
  .addEventListener("click", function () {
    const WidthdrawInput = document.getElementById("Widthdraw-input");
    const widthdrewAmountText = WidthdrawInput.value;
    const newWidthAmount = parseFloat(widthdrewAmountText);
    console.log(newWidthAmount);

    const widthdrewTotal = document.getElementById("widthdraw-total");
    const preveiousWidthDrawText = widthdrewTotal.innerText;
    const preveiousWidthDrawTotal = parseFloat(preveiousWidthDrawText);
    const newWidthDrawTotal = preveiousWidthDrawTotal + newWidthAmount;
    widthdrewTotal.innerText = newWidthDrawTotal;

    //  update blacene
    const balanceTotal = document.getElementById("balance-total");
    const previousBanlaneText = balanceTotal.innerText;
    const previousBanlaneTotal = parseFloat(previousBanlaneText);
    const newBalanceTotal = previousBanlaneTotal - newWidthAmount;
    balanceTotal.innerText = newBalanceTotal;

    WidthdrawInput.value = "";
  });
