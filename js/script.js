const indicator = document.querySelector("[data-indicator]")

document.addEventListener("click", e => {
  let anchor
  if (e.target.matches("a")) {
    anchor = e.target
  } else {
    anchor = e.target.closest("a")
  }
  if (anchor != null) {
    const allAnchors = [...document.querySelectorAll("a")]
    const index = allAnchors.indexOf(anchor)
    indicator.style.setProperty("--position", index)
    document.querySelectorAll("a").forEach(elem => {
      elem.classList.remove("active")
    })
    anchor.classList.add("active")
  }
})

document.addEventListener("mouseover", e => {
  let anchor
  if (e.target.matches("a")) {
    anchor = e.target
  } else {
    anchor = e.target.closest("a")
  }
  if (anchor != null) {
    const allAnchors = [...document.querySelectorAll("a")]
    const index = allAnchors.indexOf(anchor)
    document.querySelectorAll("a").forEach(elem => {
    })
    anchor.classList.add("activo")
  }
})
document.addEventListener("mouseout", e => {
  let anchor
  if (e.target.matches("a")) {
    anchor = e.target
  } else {
    anchor = e.target.closest("a")
  }
  if (anchor != null) {
    const allAnchors = [...document.querySelectorAll("a")]
    const index = allAnchors.indexOf(anchor)
    document.querySelectorAll("a").forEach(elem => {
    })
    anchor.classList.remove("activo")
  }else{
    
  }
})
