// Register IntersectionObserver
const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        // Add 'active' class if observation target is inside viewport
        entry.target.classList.add("opacity-0");
      } else {
        // Remove 'active' class otherwise
        entry.target.classList.remove("opacity-0");
      }
    });
  });
  
  // Declares what to observe, and observes its properties.
  const boxElList = document.querySelectorAll(".box");
  boxElList.forEach((el) => {
    io.observe(el);
  });