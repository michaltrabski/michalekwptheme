import { addClass, removeClass } from "./helpers";

export const mtbox1 = () => {
  const buttons = document.querySelectorAll<HTMLElement>("#mtbox1 .btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const i = this.getAttribute("data-index");

      addClass("#mtbox1 .btn", "btn-outline-white");
      removeClass("#mtbox1 .btn", "btn-white", "mtbtn--white");
      addClass(`#mtbox1 .btn[data-index="${i}"]`, "btn-white", "mtbtn--white");

      removeClass("#mtbox1 .mtbox1__btn-content", "active");
      addClass(`#mtbox1 .mtbox1__btn-content[data-index="${i}"]`, "active");
    });
  });
};
