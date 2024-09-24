// Donate for Flood at Noakhali, Bangladesh
document
  .getElementById("donate-noakhali")
  .addEventListener("click", function (e) {
    e.preventDefault();
    getAllDonationSubmit(
      "noakhali-amount",
      "noakhali-balance",
      "my-amount",
      "title-noakhali"
    );
  });

// Donate for Flood Relief in Feni,Bangladesh
document.getElementById("donate-feni").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("alright");
  getAllDonationSubmit(
    "feni-amount",
    "feni-balance",
    "my-amount",
    "title-feni"
  );
});

// Aid for Injured in the Quota Movement
document.getElementById("donate-quota").addEventListener("click", function (e) {
  e.preventDefault();

  getAllDonationSubmit(
    "quota-amount",
    "quota-balance",
    "my-amount",
    "title-quota"
  );
});

// close modal function
document.getElementById("modal-close").addEventListener("click", function () {
  document.getElementById("my_modal_1").close();
});

// the donation button active function for work
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

// the history button active  function for work
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

// this is click blog button.then go to blog page
document.getElementById("blog-page").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// this is a sticky menu working
window.addEventListener("scroll", function () {
  if (window.scrollY >= 20) {
    document
      .getElementById("header-bg")
      .classList.add("bg-gray-100", "pb-8", "border-b");
  } else {
    document
      .getElementById("header-bg")
      .classList.remove("bg-gray-100", "pb-8", "border-b");
  }
});
