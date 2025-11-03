let noteState = 0
let readPstate = 0

alert("กดแปลภาษาด้วยนะ")

function openNote() {
  
  const cardNote = document.getElementById("img-note")
  
  if (noteState <= 10) {
    cardNote.style.animation = "none"
    void cardNote.offsetWidth
    cardNote.style.animation = "shake 0.4s"
  } else {
    cardNote.style.animation = "none"
    void cardNote.offsetWidth
    
    const noteC = document.getElementById("note-close")
    const noteO = document.getElementById("note-open")
    const fold = document.getElementById("fold")
    const paper = document.getElementById("paper")
    const aTextSlide = document.getElementById("textSlide")
    const box2 = document.getElementById("box-2")
    
    fold.src = "img/fold-open.png"
    fold.style.zIndex = "1"
    noteO.style.visibility = "visible"
    paper.style.visibility = "visible"
    paper.style.transform = "translateY(-13vh)"
    aTextSlide.style.visibility = "visible"
    box2.style.display = "flex"
  }
  
  noteState += noteState<15?1:0
}

function readPaper() {
  if (readPstate >= 7) {
    document.getElementById("box-3").display = "flex"
    return
  }
  const text = [
  "ครบรอบ3เดือนแล้วน้าา ตั้งแต่เดือนสิงหาคม รู้สึกว่านานมีความสุขมากที่อยู่กับเธอตลอด9เดือนนับจากเจอกันครั้งแรก",
  "อยากขอบคุณเธอที่ อยู่กับเค้าถึงตอนนี้ เค้าทำตัวไม่ดีบางครั้ง ก้ขอโทษด้วย บางครั้งก้ชอบพูดคำแปลกๆ พอดีเค้าใช่คำไม่เปนหน่ะ",
  "และก็ได้เรียนรู้อะไรหลายๆอย่างเพราะเธอด้วย รู้มั้ยเค้าเปลี่ยนวิธีพูดไปมากเลยนะ เป็นเพราะคุบกับเธอบ่อยแหละ",
  "แต่เค้าก้ไม่คิดว่าเธอจะคบกับเค้าได้นานขนาดนี้ ทั้งที่อยู่ไกลกัน ไม่ได้เจอหน้ากันเลย",
  "ขอบคุณที่มอบความรักดีๆให้เค้านะะ",
  "และสุดท้าย เค้าคงให้อะไรเธอมากไม่ได้เท่าไหร่หรอก ทำได้แค่นี้แหละ ขอให้เธอมีความสุขหลังจากนี้ ให้มากๆเลยนะ",
  "เหนื่อยกับอะไร เค้าพร้อมรับฟังเสมอเลย คงไม่มีอะไรให้พูดแล้วแหละเดียวมันจะยาว รักเธอนะ รักที่สุดเลยย"
  ]
  const emoji = ["cat4", "cat2", "cat3", "cat6", "cat7", "", "cat5"]
  
  const textP = document.getElementById("textRead")
  const imgE = document.getElementById("emoji")
  
  textP.textContent = text[readPstate]
  imgE.src = emoji[readPstate] === "" ? "" : `img/emoji/${emoji[readPstate]}.jpg`
  
  readPstate++
}

const startDate = new Date("2025-08-04T00:00:00+07:00");

function updateTimer() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth() + years * 12;
  
  // คำนวณส่วนวัน/ชั่วโมง/นาที/วินาที
  let diff = now - new Date(startDate.getFullYear(), startDate.getMonth() + months, startDate.getDate(), startDate.getHours(), startDate.getMinutes(), startDate.getSeconds());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) *-1;
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) *-1;
  const minutes = Math.floor((diff / (1000 * 60)) % 60) *-1;
  const seconds = Math.floor((diff / 1000) % 60) *-1;

  document.getElementById("timer").textContent =
    `${months}เดือน ${days}วัน ${hours}ชั่วโมง ${minutes}นาที ${seconds}วินาที `;
}

setInterval(updateTimer, 1000);
updateTimer();