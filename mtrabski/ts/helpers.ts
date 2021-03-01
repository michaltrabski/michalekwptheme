export const removeClass = (removeFrom: string, ...rest: string[]) => {
  const from = document.querySelectorAll(removeFrom);
  from.forEach((item) => {
    for (const index of rest) {
      item.classList.remove(index);
    }
  });
};

export const addClass = (addTo: string, ...rest: string[]) => {
  const to = document.querySelectorAll(addTo);
  to.forEach((item) => {
    for (const index of rest) {
      item.classList.add(index);
    }
  });
};

export const mtToggle = () => {
  const areas = document.querySelectorAll(".mttoggle");
  areas.forEach((area) => {
    area.addEventListener("click", () => {
      const elementsToToggle = area.querySelectorAll("[data-toggle]");
      elementsToToggle.forEach((el) => {
        const classToToggle = el.getAttribute("data-toggle");
        // console.log("xxx", classToToggle)
        if (classToToggle) {
          // console.log("yy", el, el.classList, classToToggle);
          el.classList.toggle(classToToggle);
        }
      });
    });
  });
};
