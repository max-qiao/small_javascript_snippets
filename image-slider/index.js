const nextEl = document.querySelector(".next")
const imageContainerEl = document.querySelector(".image-container")
const imgsEl = document.querySelectorAll("img")
const prevEl = document.querySelector(".prev")


let currentImg = 1
let timeout

nextEl.addEventListener("click", () => {
  currentImg++
  clearTimeout(timeout)
  updateImg()
})

prevEl.addEventListener("click", () => {
  currentImg--
  clearTimeout(timeout)
  updateImg()
})

updateImg()

function updateImg() {
  if (currentImg > imgsEl.length) {currentImg = 1}
  if (currentImg < 1) {currentImg = 4}
  imageContainerEl.style.transform = `translateX(-${(currentImg-1) * 500}px)`

  timeout = setTimeout(() => {
    currentImg++
    updateImg()
  }, 3000)
}