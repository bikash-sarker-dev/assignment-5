function getInputValue(id) {
  let inputValue = document.getElementById(id).value;

  let valueNumber = parseFloat(inputValue);
  return valueNumber;
}
