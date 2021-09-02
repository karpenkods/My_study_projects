(() => {

  function index(element) {
    return Array.from(element.parentNode.children).indexOf(element);
  };

  function saveItem(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  function getItems(name) {
    return JSON.parse(localStorage.getItem(name)) != null ? JSON.parse(localStorage.getItem(name)) : [];
  }

  function createTodoApp(container, title = "Список дел", defaultItems = [], sessionId = "*.html") {
    let session = [];
    let appTitle = document.createElement("h2");
    let form = document.createElement("form");
    let input = document.createElement("input");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");
    let list = document.createElement("ul");

    form.classList.add("input-group", "mb-3");
    input.classList.add("form-control");
    input.placeholder = "Введите название нового дела";
    list.classList.add("list-group");
    buttonWrapper.classList.add("input-group-append");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Добавить дело";
    button.setAttribute("disabled", true);

    input.addEventListener("input", (e) => {
      e.preventDefault();

      if (input.value.length != 0) {
        button.removeAttribute("disabled");
      } else if (input.value.length == 0) {
        button.setAttribute("disabled", true);
      };

      form.addEventListener("submit", () => {
        button.setAttribute("disabled", true);
      });
    });

    buttonWrapper.append(button);
    form.append(input, buttonWrapper);
    container.append(appTitle, form, list);

    function createItem(name, done) {
      let item = document.createElement("li");
      let buttonWrapper = document.createElement("div");
      let doneButton = document.createElement("button");
      let deleteButton = document.createElement("button");

      item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
      item.textContent = name;
      buttonWrapper.classList.add("btn-group", "btn-group-sm");
      doneButton.classList.add("btn", "btn-success");
      doneButton.textContent = "Готово";
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.textContent = "Удалить";
      deleteButton.addEventListener("click", () => {

        if (!confirm("Вы уверены?")) {
          return;
        };

        session.splice(index(item), 1);
        saveItem(sessionId, session);
        item.remove();
      });

      doneButton.addEventListener("click", () => {
        let done = item.classList.toggle("list-group-item-success");
        session[index(item)].done = done;
        saveItem(sessionId, session);
      });

      buttonWrapper.append(doneButton, deleteButton);
      item.append(buttonWrapper);
      list.append(item);
      session.push({ name, done });
      saveItem(sessionId, session);

      if (done) {
        doneButton.click();
      };
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (input.value == "") {
        return;
      };

      createItem(input.value);
      input.value = "";
    });

    let storageItems = getItems(sessionId, session);

    let sessionItems = (storageItems.length == 0) ? defaultItems : storageItems;

    for (let item of sessionItems) {
      createItem(item.name, item.done);
    };
  };

  window.createTodoApp = createTodoApp;
})();



