const msgEl = document.getElementById('message');
const btn = document.getElementById('reveal');
const heart = document.getElementById('heart');

const message = [
  "Hey I made this little page because saying it felt too plain.",
  "Thank you for coming into my life",
  "I like you. A lot.",
  "I like your laugh, your energy, and the way you make my day brighter.",
  "mahal na mahal kita",
  "Mwa, see you my baby i miss you ",
  "i love you so much ❤️"
].join('\n');

function typeText(target, text, speed=32) {
  let i = 0;
  target.textContent = "";
  return new Promise(resolve=>{
    const t = setInterval(()=>{
      target.textContent += text[i] ?? "";
      i++;
      if(i>text.length){
        clearInterval(t);
        resolve();
      }
    }, speed);
  });
}

function burstConfetti(amount=50){
  const container = document.createElement('div');
  container.className = 'confetti';
  document.body.appendChild(container);
  for(let i=0;i<amount;i++){
    const dot = document.createElement('div');
    dot.style.position='absolute';
    dot.style.left = Math.random()*100+'%';
    dot.style.top = (-10 + Math.random()*10) + '%';
    dot.style.fontSize = (8 + Math.random()*18) + 'px';
    dot.style.opacity = 0.9;
    dot.textContent = ['❤','•','✦','❥'][Math.floor(Math.random()*4)];
    container.appendChild(dot);
    const fall = dot.animate([
      {transform:`translateY(-10vh) rotate(0deg)`, opacity:1},
      {transform:`translateY(${90+Math.random()*20}vh) rotate(${Math.random()*720-360}deg)`, opacity:0.9}
    ], {duration: 2000+Math.random()*1500, easing:'cubic-bezier(.2,.9,.3,1)'});
    fall.onfinish = ()=> dot.remove();
  }
  setTimeout(()=> container.remove(), 4000);
}

btn.addEventListener('click', async ()=>{
  btn.disabled = true;
  await typeText(msgEl, message, 28);
  heart.style.opacity = 1;
  heart.style.transform = 'scale(1)';
  burstConfetti(48);
});
