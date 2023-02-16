const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")

textareaEl.addEventListener("keyup", (event) => {
  updateCounter()
})

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length
  remainingCounterEl.innerText = 50 - textareaEl.value.length
}