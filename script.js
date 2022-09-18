const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';

setVisible('.page', false);
setVisible('#loading', true);

document.addEventListener('DOMContentLoaded', () =>
  wait(1000).then(() => {
    setVisible('.page', true);
    setVisible('#loading', false);
  }));

const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos =['https://cdn.glitch.global/61e4d664-14f3-4b71-a358-b09c48c87825/Natalia%20Klyueva%20js.png?v=1663084728248', 'https://cdn.glitch.global/61e4d664-14f3-4b71-a358-b09c48c87825/Natalia%20Klyueva%20figma.png?v=1663084736091', 'https://cdn.glitch.global/61e4d664-14f3-4b71-a358-b09c48c87825/Natalia%20Klyueva%20Bootstrap-1.png?v=1663084792475', 'https://cdn.glitch.global/61e4d664-14f3-4b71-a358-b09c48c87825/Natalia%20Klyueva%20HTML%20CSS-1.png?v=1663084781016'];
let i=0;
next.addEventListener('click', ()=>{
    i++;
    if(i>photos.length-1){
        i=0;
    }
    document.querySelector('#pictures').src=photos[i];
})
back.addEventListener('click', ()=>{
    i--;
    if(i<0){
        i=photos.length-1;
    }
    document.querySelector('#pictures').src=photos[i];
})





gsap.to('.heading', {scale:1.1, delay:.1, duration:2, ease:'power4.out'})
gsap.from('.textOne', {y:500, delay:2.5, duration:2, opacity:0, ease:'power4.out'})
gsap.from('.textTwo', {y:200, delay:2.5, duration:2, opacity:0, ease:'power4.out'})
gsap.from('.button-85', {y:50, delay:4, duration:3, opacity:0, ease:'power4.out'})
gsap.from('.nav', {y:-100, delay:4.5, duration:2, opacity:0, ease:'power4.out'})
gsap.from('.par', {y:50, delay:7, duration:2, opacity:0, ease:'power4.out'})
gsap.from('.certificatesBox', {y:100, delay:8, duration:3, opacity:0, ease:'power4.out'})



gsap.to(".keyAnimation", {
    text: "Klyueva",
    duration: 1,
    repeat: -1,
    repeatDelay: .5,
    ease: "power1.in",
    yoyo: true,
})



particlesJS("particles-js", 
    {"particles":{
        "number":{
            "value":6,
            "density":{
                "enable":true,
                "value_area":800
            }
        },
        "color":{
            "value":"#d1d5f0"
        },
        "shape":{
            "type":"polygon",
            "stroke":{
                "width":0,
                "color":"#000"
            },
            "polygon":{
                "nb_sides":6
            },
            "image":{
                "src":"img/github.svg","width":100,"height":100}
            },"opacity":{
                "value":0.3,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":1,
                    "opacity_min":0.1,
                    "sync":false
                }
            },
            "size":{
                "value":60,
                "random":false,
                "anim":{
                    "enable":true,
                    "speed":6,
                    "size_min":20,
                    "sync":false
                }
            },
            "line_linked":{
                "enable":false,
                "distance":200,
                "color":"#ffffff",
                "opacity":1,
                "width":2
            },
            "move":{
                "enable":true,
            "speed":5,
            "direction":"none",
            "random":false,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract":{
                "enable":false,
                "rotateX":600,
                "rotateY":1200
            }
        }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
          "mode":"grab"
        },"onclick":{
          "enable":false,
          "mode":"push"},
        "resize":true},
      "modes":{
        "grab":{
          "distance":400,
          "line_linked":{
            "opacity":1
          }
        },
        "bubble":{
          "distance":400,
          "size":40,
          "duration":2,
          "opacity":8,
          "speed":3},
        "repulse":{
          "distance":200,
          "duration":0.4
        },
        "push":{
          "particles_nb":4
        },
        "remove":{
          "particles_nb":2
        }
      }},
     "retina_detect":true}
           );


