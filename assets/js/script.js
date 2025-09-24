const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active"); // hamburger → X
  navLinks.classList.toggle("show"); // menu open
});

// Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
  const myNav = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      myNav.classList.add("sticky-nav");
    } else {
      myNav.classList.remove("sticky-nav");
    }
  });
});

// VIDEO Start
// ---------------
const playBtn = document.getElementById("playVideoBtn");
const videoModal = document.getElementById("videoModal");
const closeModal = document.getElementById("closeModal");
const videoFrame = document.getElementById("videoFrame");

playBtn.addEventListener("click", () => {
  videoModal.style.display = "flex";
  videoFrame.src = videoURL; // Add video to iframe
});

closeModal.addEventListener("click", () => {
  videoModal.style.display = "none";
  videoFrame.src = ""; // Stop video
});

window.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
    videoFrame.src = "";
  }
});
// VIDEO End
// ---------------

// TESTIMONIALS SLIDER Start
// ---------------
$(document).ready(function () {
  if ($(".testimonials-slider").length) {
    $(".testimonials-slider")
      .on("init setPosition", function () {
        var maxH = 0;
        $(".t-card")
          .css("height", "auto")
          .each(function () {
            maxH = Math.max(maxH, $(this).outerHeight());
          });
        $(".t-card").css("height", maxH + "px");
      })
      .slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
      });
  }
});

// TESTIMONIALS SLIDER End
// ---------------

// FAQ ACCORDION Start (accessible, no external deps)
// ---------------
document.querySelectorAll(".accordion-header").forEach(function (btn) {
  const icon = document.createElement("span");
  icon.className = "accordion-icon";
  icon.setAttribute("aria-hidden", "true");
  btn.appendChild(icon);
  btn.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!expanded));
    const panel = this.nextElementSibling;
    if (panel) {
      if (!expanded) {
        // expand with height transition
        panel.hidden = false;
        const h = panel.scrollHeight;
        panel.style.maxHeight = h + "px";
      } else {
        // collapse
        panel.style.maxHeight = "0px";
        panel.addEventListener("transitionend", function handler() {
          panel.hidden = true;
          panel.removeEventListener("transitionend", handler);
        });
      }
    }
  });
});
// FAQ ACCORDION End

// FOOTER YEAR
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
