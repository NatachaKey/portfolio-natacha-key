document.addEventListener("mousemove", (event) => {
    let mousex = event.clientX - 25;
    let mousey = event.clientY - 25;
    let elem = document.querySelector('.cursor-glow');
    elem.style.left = mousex + 'px';
    elem.style.top = mousey + 'px';
});


gsap.to(".contactAnimation", {
    text: "ahora",
    delay:3,
    duration: 1,
    repeat: -1,
    repeatDelay: 3,
    ease: "power1.in",
    yoyo: true,
})

