function createHistory(headText, taka) {
  let createDiv = document.createElement("div");
  createDiv.innerHTML = `<div class="border rounded-lg p-5 my-7">
          <h3 class="font-bold text-xl my-3">
            ${taka} taka is ${headText}
          </h3>
          <p class="font-light bg-[rgba(17, 17, 17, 0.7)]">
           <strong>Date :</strong>  ${new Date()}
          </p>
        </div>`;

  return document.getElementById("history").appendChild(createDiv);
}
