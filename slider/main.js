const prev = document.getElementById("btn-prev"),
  next = document.getElementById("btn-next"),
  slides = document.querySelectorAll(".slide"),
  dots = document.querySelectorAll(".dot");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

const activeDots = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

const prepearCurrentSlide = (ind) => {
  activeSlide(index);
  activeDots(index);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepearCurrentSlide(index);
  } else {
    index++;
    prepearCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index == slides.length - 1;
    prepearCurrentSlide(index);
  } else {
    index--;
    prepearCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepearCurrentSlide(indexDot);
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", nextSlide);

setInterval(function () {
  nextSlide();
}, 2000);
