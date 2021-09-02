document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".tabs__btn").forEach(function(tabsBtn) {
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll(".section-work__block").forEach(function(tabContent) {
      tabContent.classList.remove("section-work__block-active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("section-work__block-active")
    })
  })
})