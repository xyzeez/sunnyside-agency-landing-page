// disclosure.js
const disclosure = document.querySelector(".header__nav");
const disclosureButton = disclosure.querySelector(".js-disclosure-btn");

function toggleDisclosure() {
  const isExpanded = disclosureButton.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    disclosureButton.setAttribute("aria-expanded", false);
    disclosureButton.setAttribute("aria-checked", false);
    return;
  }

  disclosureButton.setAttribute("aria-expanded", true);
  disclosureButton.setAttribute("aria-checked", true);
}

function monitorDisclosure() {
  if (!disclosure) {
    return;
  }

  disclosure.dataset.state = "ready";

  disclosureButton.removeAttribute("title");

  disclosureButton.removeAttribute("disabled");

  disclosureButton.addEventListener("click", toggleDisclosure);
}

// menu & links
const menu = document.querySelector("#menu");
const links = Array.from(document.querySelectorAll("#menu .nav__item"));

const monitorMenu = () => {
  document.addEventListener("click", (e) => {
    const target = e.target;
    const isExpanded = disclosureButton.getAttribute("aria-expanded");
    const toggleLabel = document.querySelector(".hamburger");

    if (
      target === menu ||
      target === toggleLabel ||
      target === disclosureButton
    ) {
      return;
    }

    if (links.includes(target.closest("li"))) {
      disclosureButton.setAttribute("aria-expanded", false);
      disclosureButton.checked = false;
      return;
    }

    if (isExpanded === "true") {
      disclosureButton.setAttribute("aria-expanded", false);
      disclosureButton.checked = false;
    }
  });
};

// Observer
const toObserve = document.querySelector(".hero");
const header = document.querySelector("header");

function scrollCallBack(payload) {
  if (!payload[0].isIntersecting) {
    header.classList.remove("absolute");
    header.classList.add("header-sticky");
    return;
  }

  header.classList.add("absolute");
  header.classList.remove("header-sticky");
}

let options = {
  rootMargin: "-50%",
  threshold: 0,
};

let scrollObserver = new IntersectionObserver(scrollCallBack, options);

const init = () => {
  monitorDisclosure();
  monitorMenu();
  scrollObserver.observe(toObserve);
};

init();
