document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".catalog__item").forEach(function(tabsBtn) {
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll(".catalog__block").forEach(function(tabContent) {
      tabContent.classList.remove("catalog__block-active")
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("catalog__block-active")
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".tabs__button").forEach(function(tabsBtn) {
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll(".catalog__block-artist").forEach(function(tabContent) {
      tabContent.classList.remove("catalog__block-artist-active")
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("catalog__block-artist-active")
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".tabs__btn").forEach(function(tabsBtn) {
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll(".catalog__list-step").forEach(function(tabContent) {
      tabContent.classList.remove("is-active-ring")
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("is-active-ring")
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".catalog__lang").forEach(function(tabsBtn) {
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll(".catalog__block-artist").forEach(function(tabContent) {
      tabContent.classList.remove("catalog__block-artist-active")
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("catalog__block-artist-active")
    });
  });
});






