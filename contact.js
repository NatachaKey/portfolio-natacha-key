document.addEventListener("mousemove", (event) => {
    let mousex = event.clientX - 25;
    let mousey = event.clientY - 25;
    let elem = document.querySelector('.cursor-glow');
    elem.style.left = mousex + 'px';
    elem.style.top = mousey + 'px';
});

gsap.from('.contact-links', {y:300, delay:.2, duration:3, opacity:0, ease:'power4.out'})
gsap.from('.contact-form-wrapper', {y:-300, delay:.2, duration:3, opacity:0, ease:'power4.out'})
gsap.to(".contactAnimation", {
    text: "ahora",
    delay:3,
    duration: 1,
    repeat: -1,
    repeatDelay: 3,
    ease: "power1.in",
    yoyo: true,
})

