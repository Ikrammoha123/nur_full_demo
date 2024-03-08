"use strict";

const sideBar = document.querySelector(".sidebar");
// buttons
const btnListHome = document.querySelector(".btn-list-home");
const btnListAbout = document.querySelector(".btn-list-about");
const btnListContact = document.querySelector(".btn-list-contact");
const btnListBlog = document.querySelector(".btn-list-blog");
const btnListDonation = document.querySelector(".btn-list-donation");
const btnBars = document.querySelector(".btn-bars");
const btnScroll = document.querySelector(".scroll-btn");

const testimonialSlider = document.querySelector(".slider");

const testimonialsContent = [
  {
    id: 1,
    img: "./img/nur.logo.jpg",
    customerName: "hayat",
    subject: "skdj",
    country: "addis",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, voluptatem?",
  },
  {
    id: 2,
    img: "./img/photo-1.jpg",
    customerName: "rehma",
    // subject: "skdj",
    country: "bdu",
    content:
      "Lorem ipsum jjj, sit amet consectetur adipisicing elit. Fugiat, voluptatem?",
  },
  {
    id: 3,
    img: "./img/photo-2.jpg",
    customerName: "abi",
    // subject: "skdj",
    country: "adama",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, voluptatem?",
  },
];

// sidebar
btnBars.addEventListener("click", function () {
  sideBar.classList.toggle("open");
  if (sideBar.classList.contains("open")) {
    btnBars.innerHTML = "&#10006;";
  } else {
    btnBars.innerHTML = "&#9776;";
  }
});
btnListHome.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});
btnListAbout.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});
btnListBlog.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});
btnListContact.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});
btnListDonation.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});

// scroll
btnScroll?.addEventListener("click", function () {
  document.querySelector("body").scrollIntoView({ behavior: "smooth" });
});

//Testimonial slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider-btn--left");
  const btnRight = document.querySelector(".slider-btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // function
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots-dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots-dot")
      .forEach((dot) => dot.classList.remove("dots-dot--active"));
    document
      .querySelector(`.dots-dot[data-slide="${slide}"]`)
      .classList.add("dots-dot--active");
  };
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)} % )`)
    );
  };

  // next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots-dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

window.addEventListener("load", function () {
  if (!testimonialSlider) return;
  testimonialsContent.forEach((testimonial) => {
    const testimonialHtml = ` <div class="slide">
    <div class="testimonial">
      <figure class="testimonial-author">
        <figcaption>
          <h3 class="testimonial-name">name</h3>
          <p class="testimonial-location">location.</p>

          <blockquote class="testimonial-content">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam sed, hic est doloribus aperiam
            necessitatibus, placeat, fugit in perspiciatis
            praesentium sapiente odio officiis rem eveniet nemo
            culpa quos. Harum, consequuntur? Possimus alias
            laboriosam veniam pariatur magnam necessitatibus
            voluptate quia. Ex, dolorem eius repellat rerum
            laborum fugit aperiam modi voluptates dolores!
          </blockquote>
        </figcaption>
        <img
          src="img/photo-2.jpg"
          alt="profilePhoto"
          class="testimonial-photo"
        />
      </figure>
    </div>`;
    testimonialSlider.insertAdjacentHTML("beforeend", testimonialHtml);
  });
  slider();
});
