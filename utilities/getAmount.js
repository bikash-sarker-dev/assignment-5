function getAmountValue(id) {
  let amountKeep = document.getElementById(id).innerText;

  let amountNumber = parseFloat(amountKeep);
  return amountNumber;
}
