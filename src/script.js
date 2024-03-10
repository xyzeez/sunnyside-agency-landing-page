// disclosure.js
const disclosure = document.querySelector(".js-disclosure");
const disclosureButton = disclosure.querySelector(".js-disclosure-btn");

function toggleDisclosure() {
  const isExpanded = disclosureButton.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    disclosureButton.setAttribute("aria-expanded", false);
    return;
  }

  disclosureButton.setAttribute("aria-expanded", true);
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

const init = () => {
  monitorDisclosure();
  monitorMenu();
};

init();
