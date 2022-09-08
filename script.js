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


particlesJS("particles-js",{
"particles":{
    "number":{
        "value":63,
        "density":{
            "enable":true,
            "value_area":800
        }
    },
    "color":{
            "value":"#fff"
    },
    "shape":{
        "type":"polygon",
        "stroke":{
            "width":0,
            "color":"#000000"
        },
        "polygon":{
            "nb_sides":5
        },
    "image":{
        "src":"img/github.svg",
        "width":50,
        "height":50
        }
    },
    "opacity":{
        "value":0.5,
        "random":true,
        "anim":{
            "enable":false,
            "speed":3,
            "opacity_min":0.1,
            "sync":false
            }
    },
    "size":{
        "value":7,
        "random":true,
        "anim":{
            "enable":false,
            "speed":40,
            "size_min":0.1,
            "sync":false
        }
    },

    "line_linked":{
        "enable":false,
        "distance":500,
        "color":"#ffffff",
        "opacity":0.4,
        "width":2
    },
    "move":{
        "enable":true,
        "speed":3,
        "direction":"top-right",
        "random":true,
        "straight":true,
        "out_mode":"out",
        "bounce":true,
        "attract":{
            "enable":true,
            "rotateX":1200,
            "rotateY":1200}
}
    },

"interactivity":{
"detect_on":
    "canvas",
        "events":{
            "onhover":{
                "enable":true,
                "mode":"bubble"
            },
            "onclick":{
                "enable":true,
                "mode":"repulse"
            },
            "resize":true
        },
    
    "modes":{
        "grab":{
            "distance":400,
            "line_linked":{
            "opacity":0.5}
        },
        "bubble":{
            "distance":400,
            "size":4,
            "duration":0.3,
            "opacity":1,
            "speed":1
        },
        "repulse":{
            "distance":300,
            "duration":1
        },
            "push":{
            "particles_nb":20
        },
    "remove":{
        "particles_nb":2
    }
    }
},

"retina_detect":true
    });


gsap.from('.heading', {y:-500, delay:.2, duration:1, opacity:0, ease:'power4.out'})
gsap.from('.textOne', {y:500, delay:2.5, duration:2, opacity:0, ease:'power4.out'})
gsap.from('.textTwo', {y:200, delay:2.5, duration:2, opacity:0, ease:'power4.out'})
gsap.from('.button-85', {y:50, delay:4, duration:2, opacity:0, ease:'power4.out'})
gsap.from('.nav', {y:-50, delay:5, duration:1, opacity:0, ease:'power4.out'})
gsap.from('.par', {y:100, delay:6, duration:2, opacity:0, ease:'power4.out'})
gsap.to('.heading', {scale:1.1, delay:.1, duration:3, ease:'power4.out'})
gsap.to('.nextPage', {scale:1.1, delay:1.2, duration:2,  repeat:-1})
gsap.to(".keyAnimation", {
    text: "Klyueva",
    duration: 1,
    repeat: -1,
    repeatDelay: .5,
    ease: "power1.in",
    yoyo: true,
})





