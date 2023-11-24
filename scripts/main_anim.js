(function () {
  var rotate = gsap
    .timeline({
      scrollTrigger: {
        trigger: "main",
        scrub: 0.2,
        start: "top top",
        end: "bottom bottom",
      },
    })
    .to("#etoile", {
      rotation: 360,
      duration: 1,
      ease: "none",
    });
  var rotate = gsap
    .timeline({
      scrollTrigger: {
        trigger: "header",
        scrub: 0.2,
        start: "top top",
        end: "bottom top",
      },
    })
    .to("#star2", {
      rotation: 360,
      scale: 3,
      duration: 1,
      ease: "none",
    });

  var color = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#about-me",
        scrub: 0.2,
        start: "top-=90",
        end: "top+=90",
        markers: false,
      },
    })
    .to("nav", {
      border: "2px solid #ff8c5e",
      duration: 1,
      ease: "none",
    });

  var color = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#works",
        scrub: 0.2,
        start: "top-=90",
        end: "top+=90",
        markers: false,
      },
    })
    .to("nav", {
      border: "2px solid #6f00ff44",
      duration: 1,
      ease: "none",
    });

  var color = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#contact",
        scrub: 0.2,
        start: "top-=90",
        end: "top+=90",
        markers: false,
      },
    })
    .to("nav", {
      border: "2px solid #ff8c5e",
      duration: 1,
      ease: "none",
    });

  let fixedDivHeight = document.querySelector("#canvas3d").offsetHeight;
  let otherDivBottom = document
    .querySelector("#about-me")
    .getBoundingClientRect().bottom;

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + window.innerHeight;

    if (scrollPos >= otherDivBottom) {
      gsap.to("#canvas3d", { position: "absolute", bottom: 0 });
    } else {
      gsap.to("#canvas3d", { position: "fixed", bottom: 0 });
    }
  });

  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: false,
    lerp: 0.8,
  });
})();
