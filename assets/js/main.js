document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector("[data-burger]");
  const drawer = document.querySelector("[data-drawer]");
  const backdrop = document.querySelector("[data-backdrop]");
  const closeBtn = document.querySelector("[data-close]");

  const openDrawer = () => {
    drawer.classList.add("open");
    backdrop.classList.add("show");
  };
  const closeDrawer = () => {
    drawer.classList.remove("open");
    backdrop.classList.remove("show");
  };

  if (burger) burger.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  document.querySelectorAll(".drawer a").forEach(a => {
    a.addEventListener("click", closeDrawer);
  });

  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll('[data-nav] a').forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
});
