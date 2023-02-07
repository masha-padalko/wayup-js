const tabs = document.getElementById("tabs");
const contents = document.querySelectorAll(".content");

const changeClass = (el) => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove("active");
  }
  el.classList.add("active");
};

tabs.addEventListener("click", (e) => {
  const currTab = e.target.dataset.btn;
  changeClass(e.target);
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
    if (contents[i].dataset.content == currTab) {
      contents[i].classList.add("active");
    }
  }
});

// Inner Tabs

const tabsInner = document.getElementById("tabs-inner");
const contentsInner = document.querySelectorAll(".content-inner");

const changingClass = (el) => {
  for (let i = 0; i < tabsInner.children.length; i++) {
    tabsInner.children[i].classList.remove("active");
  }
  el.classList.add("active");
};

tabsInner.addEventListener("click", (e) => {
  const currTab = e.target.dataset.btn;
  changingClass(e.target);
  for (let i = 0; i < contentsInner.length; i++) {
    contentsInner[i].classList.remove("active");
    if (contentsInner[i].dataset.content == currTab) {
      contentsInner[i].classList.add("active");
    }
  }
});
