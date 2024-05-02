const envelope = document.querySelector(".envelope-wrapper");
let mySound = new Audio("Aap Ki Taarif Mein Kya Kahein Aap Humari Jaan Ban Gaye - Khuda Haafiz ! Hindi.mp3");
// use your own music by adding it to folder and replace ausio("replace here") you audio link
envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
});
envelope.addEventListener("click", () => {
    setTimeout(() => {
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["heart"],
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
      };
      
      confetti({
        ...defaults,
        particleCount: 75,
        scalar: 2,
      });
      
      confetti({
        ...defaults,
        particleCount: 50,
        scalar: 3,
      });
      
      confetti({
        ...defaults,
        particleCount: 15,
        scalar: 4,
      });
    }, 1000);
    setTimeout(() => {
        const end = Date.now() + 4 * 1000;
        const colors = ["#bb0000", "#ffffff"];

(
    function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();
    },3000);
    setTimeout(() => {
        const defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            shapes: ["star"],
            colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
          };
          
          function shoot() {
            confetti({
              ...defaults,
              particleCount: 40,
              scalar: 1.2,
              shapes: ["star"],
            });
          
            confetti({
              ...defaults,
              particleCount: 10,
              scalar: 0.75,
              shapes: ["circle"],
            });
          }
          
          setTimeout(shoot, 0);
          setTimeout(shoot, 100);
          setTimeout(shoot, 200);
    },8*1000);
    setTimeout(() => {
      const defaults = {
          spread: 360,
          ticks: 100,
          gravity: 0,
          decay: 0.94,
          startVelocity: 30,
          shapes: ["heart"],
          colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
        };
        
        confetti({
          ...defaults,
          particleCount: 75,
          scalar: 2,
        });
        
        confetti({
          ...defaults,
          particleCount: 50,
          scalar: 3,
        });
        
        confetti({
          ...defaults,
          particleCount: 15,
          scalar: 4,
        });
      }, 11*1000);
    setTimeout(() => {
      mySound.play();
    },1000);
   
  },{once : true});