function animateOnView() {
  const animateElements = document.querySelectorAll(".animate");

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0
    );
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay =
            entry.target.dataset.initialInView === "true" ? 1000 : 0;

          setTimeout(() => {
            entry.target.classList.add("show");

            setTimeout(() => {
              entry.target.setAttribute("data-animated", "true");
            }, 1000);
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  animateElements.forEach((element) => {
    element.dataset.initialInView = isInViewport(element) ? "true" : "false";
    observer.observe(element);
  });

  console.log("Animate stuff Loaded");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", animateOnView);
} else {
  animateOnView();
}
