document.addEventListener('DOMContentLoaded', () => {

  let modal = document.getElementById('modal');
  let buttonAddStudent = document.getElementById("add-student");
  let modalOverlay = document.querySelector(".modal_overlay");
  let buttonCancel = document.querySelector(".cancel_btn");
  let wrapper = document.querySelector(".wrapper");
  let form = wrapper.getElementsByTagName("form")[0];
  let tBody = wrapper.getElementsByTagName("tbody")[0];
  let inputSurname = document.getElementById("surname-student");
  let inputName = document.getElementById("name-student");
  let inputLastname = document.getElementById("lastname-student");
  let inputDateBirth = document.getElementById("birth");
  let inputDateStart = document.getElementById("start");

  buttonAddStudent.onclick = () => {
    modal.style.display = "block";
    modalOverlay.style.display = "block";
  };

  function validate() {
    let result = true;

    if (inputSurname.value == "") {
      alert("Введите Фамилию");
      result = false;
      return;
    };

    if (inputName.value == "") {
      alert("Введите Имя");
      result = false;
      return;
    };

    if (inputLastname.value == "") {
      alert("Введите Отчество");
      result = false;
      return;
    };

    if (inputDateBirth.value == "") {
      alert("Введите дату рождения");
      result = false;
      return;
    };

    if (inputDateStart.value == "") {
      alert("Введите дату поступления");
      result = false;
      return;
    };

    return result;
  };

  form.onsubmit = function (e) {

    if (validate()) {
      e.preventDefault();
      let tr = document.createElement("tr");

      for (i = 0; i < 7; i++) {
        td = document.createElement("td");
        td.innerHTML = this.elements[i].value;

        const today = new Date().getFullYear();
        const todayMonth = new Date().getMonth();

        if (i == 4) {
          const yearOfBirth = new Date(this.elements[4].value).getFullYear();
          const monthOfBirth = new Date(this.elements[4].value).getMonth();

          if (monthOfBirth > todayMonth && today != yearOfBirth) {
            td.innerHTML = this.elements[4].value + " (" + ((today - yearOfBirth) - 1) + " " + "лет" + ")";
          } else {
            td.innerHTML = this.elements[4].value + " (" + (today - yearOfBirth) + " " + "лет" + ")";
          };

          if ((today - yearOfBirth) <= 0) {
            td.innerHTML = "ещё не родился!";
          } else if ((today - yearOfBirth) < 2) {
            td.innerHTML = "ещё младенец!";
          } else if ((today - yearOfBirth) < 6) {
            td.innerHTML = "детский сад!";
          } else if ((today - yearOfBirth) < 16) {
            td.innerHTML = "школьник!";
          };
        };

        if (i == 5) {
          const yearOfStart = new Date(this.elements[5].value).getFullYear();
          const monthOfStart = new Date(this.elements[5].value).getMonth();

          if (monthOfStart >= todayMonth && today != yearOfStart) {
            td.innerHTML = this.elements[5].value + " (" + (today - yearOfStart) + " " + "курс" + ")";
          } else if (monthOfStart < todayMonth && today != yearOfStart) {
            td.innerHTML = this.elements[5].value + " (" + ((today - yearOfStart) + 1) + " " + "курс" + ")";
          } else if (monthOfStart <= todayMonth && today == yearOfStart) {
            td.innerHTML = this.elements[5].value + " (" + ((today - yearOfStart) + 1) + " " + "курс" + ")";
          };

          if (monthOfStart > todayMonth && today == yearOfStart) {
            td.innerHTML = "это будущее!";
          } else if (today < yearOfStart) {
            td.innerHTML = "это будущее!";
          };

          if (monthOfStart <= todayMonth && (today - yearOfStart) == 4) {
            td.innerHTML = "закончил";
          } else if (monthOfStart > todayMonth && (today - yearOfStart) == 4) {
            td.innerHTML = this.elements[5].value + " (" + (today - yearOfStart) + " " + "курс" + ")";
          } else if ((today - yearOfStart) > 4) {
            td.innerHTML = "закончил";
          };
        };

        if (i == 6) {
          let delButton = document.querySelector(".del_button").cloneNode(true);
          td.appendChild(delButton);
        };
        tr.appendChild(td);
      };

      tBody.appendChild(tr);
      e.target.reset();
      modal.style.display = "none";
      modalOverlay.style.display = "none";

    } else {
      e.preventDefault();
    };
  };

  buttonCancel.onclick = (e) => {
    e.preventDefault();
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  };

  let getSort = ({ target }) => {
    let order = (target.dataset.order = -(target.dataset.order || -1));
    let index = [...target.parentNode.cells].indexOf(target);
    let collator = new Intl.Collator([]);
    let comparator = (index, order) => (a, b) => order * collator.compare(
      a.children[index].innerHTML,
      b.children[index].innerHTML,
    );

    for (let tBody of target.closest('table').tBodies) {
      tBody.append(...[...tBody.rows].sort(comparator(index, order)));
    };

    for (let cell of target.parentNode.cells) {
      cell.classList.toggle('sorted', cell === target);
    };
  };

  document.querySelectorAll('.wrapper thead').forEach(table => table.addEventListener('click', () => {
    getSort(event)
  }));

  let table = document.getElementById("info-table");
  let phrase = document.getElementById("search-surname");
  let phrase_1 = document.getElementById("search-name");
  let phrase_2 = document.getElementById("search-lastname");

  let inputSearch = document.getElementById("search-surname");
  inputSearch.addEventListener("input", () => {
    tableSearch();
  });

  function tableSearch() {
    let regPhrase = new RegExp(phrase.value, "i");

    for (i = 1; i < table.rows.length; i++) {

      for (j = table.rows[i].cells.length - 1; j >= 0; j--) {
        flag = regPhrase.test(table.rows[i].cells[0].innerHTML);
        if (flag) break;
      };

      if (flag) {
        table.rows[i].style.display = "";

      } else {
        table.rows[i].style.display = "none";
      };
    };
  };

  let inputSearch_1 = document.getElementById("search-name");
  inputSearch_1.addEventListener("input", () => {
    tableSearch_1();
  });

  function tableSearch_1() {
    let regPhrase = new RegExp(phrase_1.value, "i");

    for (i = 1; i < table.rows.length; i++) {

      for (j = table.rows[i].cells.length - 1; j >= 0; j--) {
        flag = regPhrase.test(table.rows[i].cells[1].innerHTML);
        if (flag) break;
      };

      if (flag) {
        table.rows[i].style.display = "";

      } else {
        table.rows[i].style.display = "none";
      };
    };
  };

  let inputSearch_2 = document.getElementById("search-lastname");
  inputSearch_2.addEventListener("input", () => {
    tableSearch_2();
  });

  function tableSearch_2() {
    let regPhrase = new RegExp(phrase_2.value, "i");

    for (i = 1; i < table.rows.length; i++) {

      for (j = table.rows[i].cells.length - 1; j >= 0; j--) {
        flag = regPhrase.test(table.rows[i].cells[2].innerHTML);
        if (flag) break;
      };

      if (flag) {
        table.rows[i].style.display = "";

      } else {
        table.rows[i].style.display = "none";
      };
    };
  };
});
