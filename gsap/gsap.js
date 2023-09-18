gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// const nav = gsap.timeline ({ defaults: {duration: .5}});
// nav.from('.nav', {opacity: 0, y:-80})

if (ScrollTrigger.isTouch !== 1) {

  ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 1.5,
      effects: true
  })}

const tl = gsap.timeline({ defaults: { duration: .5 } });
tl.from('.main__content-block h1', { opacity: 0, y: 80 })
  .from('.main__content-block p', { opacity: 0, y: 80 })
  .from('.main__content-block a', { opacity: 0, y: 80 })





 if (window.innerWidth > 510) {
  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
      y = direction * 100;
    if (elem.classList.contains("left")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("right")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
      duration: 2,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }

 } else {
  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
      y = direction * 20;
    if (elem.classList.contains("left")) {
      x = -20;
      y = 0;
    } else if (elem.classList.contains("right")) {
      x = 20;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
      duration: 2,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }
 }

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () { animateFrom(elem) },
        onEnterBack: function () { animateFrom(elem, -1) },
        onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });




