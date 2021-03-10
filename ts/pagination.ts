export const pagination = () => {
  const selector = ".mt__pagination";
  const containers = document.querySelectorAll<HTMLDivElement>(selector);

  if (containers.length > 0) {
    const links = containers[0].querySelectorAll("a");

    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "Paginacja");
    const ul = document.createElement("ul");
    ul.classList.add("pagination");

    links.forEach((link) => {
      console.dir(link);
      const li = document.createElement("li");
      li.classList.add("page-item");

      const a = document.createElement("a");
      a.classList.add("page-link");
      a.innerText = link.innerText;
      a.href = link.href;

      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);

    containers.forEach((container) => {
      const oldNav = container.querySelector("nav");
      if (oldNav) oldNav.style.display = "none";
      container.appendChild(nav.cloneNode(true));
    });
  }
};
