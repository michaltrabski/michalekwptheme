export const topMenuSearch = () => {
  const transition = 600;
  const breakPoint = 768;

  const MENU = ".mttopmenu__ul";
  const FORM = ".mttopmenu__searchform";
  const INPUT = ".mttopmenu__searchform .mttopmenu__searchforminput";
  const BUTTON = ".mttopmenu__searchform .mttopmenu__searchformbutton";

  const menu = document.querySelector(MENU) as HTMLUListElement;
  const form = document.querySelector(FORM) as HTMLFormElement;
  const input = document.querySelector(INPUT) as HTMLInputElement;
  const button = document.querySelector(BUTTON) as HTMLButtonElement;

  let isOpen = false;
  const innerWidth = window.innerWidth;

  let timeout: ReturnType<typeof setTimeout>;
  let inputValue = "";

  if (menu && form && input && button) {
    if (innerWidth >= breakPoint) {
      form.addEventListener("click", function (e) {
        e.preventDefault();
      });
      button.addEventListener("click", function (e) {
        if (isOpen) {
          console.log("form submited");
          form.submit();
          form.reset();
        } else {
          // open menu
          console.log("closed => opend");
          isOpen = true;
          input.classList.add("mtactive");
          input.focus();
        }
      });
    }
    // check if clicked outside form
    document.addEventListener("click", function (event) {
      if (event) {
        var isClickInside = form.contains(<Node>event!.target);

        if (isClickInside) {
          console.log("inside");
        } else {
          console.log("outside");
          isOpen = false;
          input.classList.remove("mtactive");
        }
      }
    });
  } else {
    console.log("FALSE returned by => (menu && form && input && button)");
  }
};

export const topMenu = () => {
  const MENU = ".mttopmenu";
  const LIS = ".mttopmenu__ul li";

  const menu = document.querySelector(MENU) as HTMLUListElement;
  const lis = document.querySelectorAll(LIS) as NodeListOf<HTMLLIElement>;

  const delay = Number(menu.getAttribute("data-mtdelay")) || 200;
  const fadeDuration = Number(menu.getAttribute("data-mtfade-duration")) || 600;

  lis.forEach((li) => {
    let timeout1: ReturnType<typeof setTimeout>;
    let timeout2: ReturnType<typeof setTimeout>;
    li.addEventListener("mouseover", function () {
      this.classList.add("mtactive");
      this.classList.remove("mtfade");
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    });
    li.addEventListener("mouseleave", function () {
      // console.log("remove", this);
      timeout1 = setTimeout(() => {
        this.classList.add("mtfade");
      }, delay);
      timeout2 = setTimeout(() => {
        this.classList.remove("mtactive", "mtfade");
      }, delay + fadeDuration);
    });
  });
};
