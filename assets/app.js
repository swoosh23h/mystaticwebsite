(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const menuBtn = document.querySelector("[data-menu]");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const open = mobileNav.style.display === "block";
      mobileNav.style.display = open ? "none" : "block";
      menuBtn.setAttribute("aria-expanded", String(!open));
    });

    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileNav.style.display = "none";
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.JordanSite = {
    handleContact: (e) => {
      e.preventDefault();
      const status = document.getElementById("formStatus");
      if (status) status.textContent = "Thanks! Message captured (demo only).";

      // You can later replace this with:
      // - AWS SES (send email)
      // - API Gateway + Lambda
      // - SNS topic notifications
      return false;
    },
  };
})();
