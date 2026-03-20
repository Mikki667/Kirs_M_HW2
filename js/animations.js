export function Animations() {

  const docBoxes = document.querySelectorAll(".doc-box");
  const featureBoxes = document.querySelectorAll(".feature-box");
  const demoHeading = document.querySelector(".live-demo-heading");
  const counters = document.querySelectorAll(".counter");
  const githubSection = document.querySelector(".github-section");

  function registerPlugins() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      return false;
    }

    gsap.registerPlugin(ScrollTrigger);
    return true;
  }

   function animateDocBoxes() {
    if (docBoxes.length === 0) {
        return;
    }

    gsap.from(docBoxes, {
      scrollTrigger: {
        trigger: docBoxes[0],
        start: "top 85%"
      },
      opacity: 0,
      duration: 0.9,
      ease: "power1.out"
    });
}

  function animateFeatureBoxes() {
    if (featureBoxes.length === 0) {
      return;
    }

    gsap.from(featureBoxes, {
      scrollTrigger: {
        trigger: featureBoxes[0],
        start: "top 88%"
      },
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.12,
      ease: "power1.out"
    });
  }

  function animateDemoHeading() {
    if (!demoHeading) {
      return;
    }

    gsap.from(demoHeading, {
      scrollTrigger: {
        trigger: demoHeading,
        start: "top 90%"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    });
  }

  function animateCounters() {
    if (counters.length === 0) {
      return;
    }

    gsap.from(counters, {
      scrollTrigger: {
        trigger: counters[0],
        start: "top 85%"
      },
      opacity: 0,
      y: 70,
      duration: 0.9,
      stagger: 0.2,
      ease: "power2.out"
    });
  }

  function animateGithubSection() {
    if (!githubSection) {
      return;
    }

    gsap.from(githubSection, {
      scrollTrigger: {
        trigger: githubSection,
        start: "top 90%"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    });
  }

  function initAnimations() {
    const gsapReady = registerPlugins();

    if (!gsapReady) {
      return;
    }

    animateDocBoxes();
    animateFeatureBoxes();
    animateDemoHeading();
    animateCounters();
    animateGithubSection();
  }

  initAnimations();

}