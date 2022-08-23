let table = [];

console.log(table);

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  //  console.log(inputField);
  const inputAmountT = inputField.value;
  // console.log(inputAmountT);
  // console.log("value", inputField);
  const InputBalance = parseFloat(inputAmountT);
  // console.log(InputBalance);

  //  clear input field

  inputField.value = "";
  // console.log(InputBalance);
  return InputBalance;
}
function updateTotalField(value, amount) {
  
  const showBalance = document.getElementById(value);
  // sumbalance show in balace
  const previousBalanceCheck = showBalance.innerText;
  console.log(previousBalanceCheck)
  const previousTotal = parseFloat(previousBalanceCheck);
  // console.log(amount);
  showBalance.innerText = previousTotal + amount;
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  // console.log( balanceTotal)

  const previousBalanceCheck = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceCheck);
  // console.log(previousBalanceTotal);

  return previousBalanceTotal;
}
// let eco;
function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");

  // console.log(balanceTotal)

  const previousBalanceTotal = getCurrentBalance();
  // console.log(previousBalanceTotal);

  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount <= 0) return;

    console.log(depositAmount);
    const previousBalanceTotal = getCurrentBalance("deposit-input");

    const TotalAmount = getCurrentBalance("balance-total") + depositAmount;

    const time = DateTime(depositAmount);

    const values = {
      Type: "Deposit",
      Amount: depositAmount,
      Previous_Balance: previousBalanceTotal,
      Current_Balance: TotalAmount,
      Time: time,
    };

    table.push(values);
    console.log("table", table);

    bulidTable(table);
    function bulidTable(table) {
      let users = "";
      if (table.length > 0) {
        table.forEach((u) => {
          users += "<tr>";
          users += "<td>" + u.Type + "</td>";
          users += "<td >" + u.Amount + "</td>";
          users += "<td>" + u.Previous_Balance + "</td>";
          users += "<td>" + u.Current_Balance + "</td>";
          users += "<td>" + u.Time + "</td></tr>";
        });

        document.getElementById("myTable").innerHTML = users;
        console.log(users);
      }
    }

    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);

      updateBalance(depositAmount, true);

      document.querySelector("#error").innerHTML = "";
    } else {
      document.querySelector("#error").innerHTML =
        "<span style='color:red'>Enter You positive Number !!</span>";
    }
  });

// handle withdraw

document
  .getElementById("Widthdraw-button")
  .addEventListener("click", function () {
    const widthdrawAmount = getInputValue("Widthdraw-input");
    if (widthdrawAmount <= 0) return;

    const previousBalanceTotal = getCurrentBalance("Widthdraw-input");
    console.log(previousBalanceTotal);
    // updateTotalField("deposit-total");
    const TotalAmount = getCurrentBalance("balance-total") - widthdrawAmount;
    console.log(TotalAmount);
    const time = DateTime(widthdrawAmount);

    const values = {
      Type: "Widthdraw",
      Amount: widthdrawAmount,
      Previous_Balance: previousBalanceTotal,
      Current_Balance: TotalAmount,
      Time: time,
    };
    table.push(values);
    console.log("table", table);

    bulidTable(table);
    function bulidTable(table) {
      let users = "";
      if (table.length > 0) {
        table.forEach((u) => {
          users += "<tr>";
          users += "<td>" + u.Type + "</td>";
          users += "<td >" + u.Amount + "</td>";
          users += "<td>" + u.Previous_Balance + "</td>";
          users += "<td>" + u.Current_Balance + "</td>";
          users += "<td>" + u.Time + "</td></tr>";
        });
        document.getElementById("myTable").innerHTML = users;
      }
    }

    const CurrentBalance = getCurrentBalance();
    // console.log(CurrentBalance);

    if (widthdrawAmount > 0 && widthdrawAmount < CurrentBalance) {
      updateTotalField("widthdraw-total", widthdrawAmount);

      updateBalance(widthdrawAmount, false);

      document.querySelector("#errors").innerHTML = "";
    }

    if (widthdrawAmount > CurrentBalance) {
      document.querySelector("#errors").innerHTML =
        "<span style='color:red'>Not Enough Balance!!</span>";
    }
  });

function DateTime() {
  var date = new Date();
  var hours = date.getHours();
  var days = date.getDay();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = date.toDateString() + " " + hours + ":" + minutes + " " + ampm;
  return strTime;
}
