const navbarEl = document.querySelector(".navbar")
const bottomContainerEl = document.querySelector(".bottom-container")

  console.log(bottomContainerEl.offsetTop)
window.addEventListener("scroll", () => {
  let d = window.scrollY > (bottomContainerEl.offsetTop - navbarEl.offsetHeight -50)

  if (d) {navbarEl.classList.add("active")} else {navbarEl.classList.remove("active")}

})