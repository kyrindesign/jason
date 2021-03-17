gsap.registerPlugin(ScrollTrigger);

// bg color change on scroll

function bgChange() {
    if (this.scrollY > this.innerHeight / 2.5) {
        document.body.classList.add('bg-change');
    } else {
        document.body.classList.remove('bg-change');
    }
}


window.addEventListener("scroll", bgChange);
// *****
// window.addEventListener("scroll", textChange); 

// function textChange() {

//     const logo = document.querySelector('.logo a');

//     if (this.scrollY > this.innerHeight / 1.8) {
//         logo.classList.add("text-active");
//     } else {
//         logo.classList.remove("text-active");
//     }
// }
// end...


// hero ani

gsap.from('.hero-text', {
    opacity: 0, 
    duration: 1, 
    y: -80, 
    x: -50, 
    ease: 'power2.inOut'});

gsap.from('.hero-img', {
    opacity: 0, 
    duration: 1, 
    y: 80, 
    x: 50, 
    delay: .5,
    ease: 'power2.inOut'});   

// end...


// intro ani scrollTrigger

const numbers = gsap.utils.toArray('.number');
numbers.forEach(number => {
  gsap.from(number, { 
    x: -20,
    duration: 1,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: number,
      start: "center 70%",
      toggleActions: "play none none none"
    }
  })
});

const imgDivs = gsap.utils.toArray('.img-div');
imgDivs.forEach(imgDiv => {
  gsap.from(imgDiv, { 
    x: 20,
    duration: 1,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: imgDiv,
      start: "center 90%",
    //   markers: true,
      toggleActions: "play none none none"
    }
  })
});

// event ani scrollTrigger

const cardDivs = gsap.utils.toArray('.card-img');
cardDivs.forEach(cardDiv => {
  gsap.from(cardDiv, { 
    x: 20,
    duration: 1,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: cardDiv,
      start: "center 90%",
    //   markers: true,
      toggleActions: "play none none none"
    }
  })
});