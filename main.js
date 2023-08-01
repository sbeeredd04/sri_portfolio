var typed = new Typed(".text", {
    strings: ["Student", "Undergraduate Researcher", "Software Developer", "Web Developer", "Programmer", "Learner"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function fadeInAndSlideInOnScroll() {
    const aboutImg = document.querySelector(".about-img");
    const imageTop = aboutImg.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    // Calculate the variable based on the scroll position
    const scrollVariable = Math.max(0, Math.min(1, (windowHeight - imageTop) / windowHeight));
  
    // Calculate the opacity and transform based on the variable
    const opacity = scrollVariable;
    const slideInAmount = 750 * (1 - scrollVariable); // 100 is the distance the image slides in
  
    // Apply the calculated styles
    aboutImg.style.opacity = opacity;
    aboutImg.style.transform = `translateX(${-slideInAmount}px)`;
  }
  
  window.addEventListener("scroll", fadeInAndSlideInOnScroll);
  