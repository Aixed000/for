const btnNo = document.getElementById("no");
const btnYes = document.getElementById("yes");
const img = document.getElementById("img");
const text = document.getElementById("text");
const bUt = document.getElementById("but");

let click = false
let stage = 1.0
let h = 10

let next = 0

btnNo.addEventListener("click", () => {
  stage += 0.5
  h += h
  btnYes.style.transform = `scale(${stage})`
  if (!click) {
    img.src = "rabbit_4.gif"
    text.innerText = "อะไรนะะ"
    click = true
  }
  if (stage >= 3) {
    img.src = "rabbit_3.gif"
    text.innerText = "อิอิ"
  }
})

btnYes.addEventListener("click", () => {
  if (next === 0 && stage < 3) {
    text.innerText = "จริงรึป่าวว"
    img.src = "rabbit_5.gif"
    next++
  } else {
    text.innerText = "///"
    img.src = "rabbit_2.gif"
    btnYes.disabled = true
    btnNo.disabled = true
    
    btnYes.style.transform = "scale(1.0)"
  }
})