document
  .getElementById("donate-noakhali")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let donateValue = getInputValue("noakhali-amount");
    let currentBalance = getAmountValue("noakhali-balance");
    let myBalance = getAmountValue("my-amount");
    let headingText = getTextHeading("title-noakhali");

    if (donateValue < 1 || isNaN(donateValue)) {
      return alert("Invalid Donation amount !");
    } else if (myBalance < donateValue) {
      return alert(" your balance is not enable !");
    }

    let totalBalance = currentBalance + donateValue;
    let myTotalBalance = myBalance - donateValue;
    document.getElementById("noakhali-balance").innerText = totalBalance;
    document.getElementById("my-amount").innerText = myTotalBalance;
    inputFiledEmpty("noakhali-amount");
    document.getElementById("my_modal_1").showModal();
    createHistory(headingText, donateValue);
  });

//   close modal function

document.getElementById("modal-close").addEventListener("click", function () {
  document.getElementById("my_modal_1").close();
});

document.getElementById("btn-donation").addEventListener("click", function () {
  document
    .getElementById("btn-history")
    .classList.remove("bg-cyan-500", "font-semibold");

  document
    .getElementById("btn-donation")
    .classList.add("bg-cyan-500", "font-semibold");
  document.getElementById("history").classList.add("hidden");
  document.getElementById("card-name").classList.remove("hidden");
});

document.getElementById("btn-history").addEventListener("click", function () {
  document
    .getElementById("btn-donation")
    .classList.remove("bg-cyan-500", "font-semibold");
  document
    .getElementById("btn-history")
    .classList.add("bg-cyan-500", "font-semibold");
  document.getElementById("history").classList.remove("hidden");
  document.getElementById("card-name").classList.add("hidden");
});
