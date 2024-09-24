function getAllDonationSubmit(
  inputVal,
  distractBalanceStor,
  selfBalance,
  cardTitle
) {
  let donateValue = getInputValue(inputVal);
  let currentBalance = getAmountValue(distractBalanceStor);
  let myBalance = getAmountValue(selfBalance);
  let headingText = getTextHeading(cardTitle);

  if (donateValue < 1 || isNaN(donateValue)) {
    return alert("Invalid Donation amount !");
  } else if (myBalance < donateValue) {
    return alert(" your balance is not enable !");
  }

  let totalBalance = currentBalance + donateValue;
  let myTotalBalance = myBalance - donateValue;
  document.getElementById(distractBalanceStor).innerText = totalBalance;
  document.getElementById(selfBalance).innerText = myTotalBalance;
  inputFiledEmpty(inputVal);
  document.getElementById("my_modal_1").showModal();
  createHistory(headingText, donateValue);
}
