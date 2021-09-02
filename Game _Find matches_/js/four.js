document.addEventListener("DOMContentLoaded", function () {
  const myCards = document.getElementById("container");
  let array = [];
  let register = 0;
  const images = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const doubleCard = images.slice(0);
  const cards = images.concat(doubleCard);

  function mixed(z) {
    for (let j, x, i = z.length; i; j = Math.floor(Math.random() * i), x = z[--i], z[i] = z[j], z[j] = x);
    return z;
  };
  mixed(cards);

  for (let i = 0; i < cards.length; i++) {
    card = document.createElement("div");
    card.dataset.item = cards[i];
    card.dataset.view = "card";
    myCards.appendChild(card);

    card.onclick = function () {

      if (this.className != "turned" && this.className != "delete") {
        this.className = "turned";
        let result = this.dataset.item;
        array.push(result);
      };

      if (array.length > 1) {
        if (array[0] === array[1]) {
          check("delete");
          register++;
          array = [];
        } else {
          check("reverse");
          array = [];
        };
      };
    };
  };

  let check = function (className) {
    const x = document.getElementsByClassName("turned");
    setTimeout(() => {
      for (let i = (x.length - 1); i >= 0; i--) {
        x[i].className = className;
      };
    }, 500);
  };

  let timer = document.querySelector(".number");
  let counter = 60;
  let modal = document.querySelector(".modal");
  let win = document.querySelector(".win");
  let modalOverlay = document.querySelector(".modal-overlay");
  let closeButton = document.querySelector(".close-button");
  let openButton = document.querySelector(".open-button")

  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
  win.classList.toggle("closed");

  timer_sec = setInterval(() => {

    if (counter > 0) {
      modal.classList.toggle("modal");
      modalOverlay.classList.toggle("modal-overlay");
      counter--
      timer.innerHTML = Math.floor(counter);

    } else {
      modal.classList.toggle("closed");
      modalOverlay.classList.toggle("closed");
      newGames();
      clearInterval(timer_sec);
    };

    if (register == 8) {
      win.classList.toggle("closed");
      modalOverlay.classList.toggle("closed");
      games();
      clearInterval(timer_sec);
    }
  }, 1000);

  function newGames() {
    closeButton.addEventListener("click", () => {
      modal.classList.toggle("closed");
      modalOverlay.classList.toggle("closed");
      window.location.reload(true);
    });
  };

  function games() {
    openButton.addEventListener("click", () => {
      win.classList.toggle("closed");
      modalOverlay.classList.toggle("closed");
      window.location.reload(true);
    });
  };
});











