const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
}

const typewriter = document.querySelector("[data-typewriter]");
if (typewriter) {
  const text = typewriter.textContent.trim();
  typewriter.textContent = "";
  let index = 0;
  const tick = () => {
    typewriter.textContent = text.slice(0, index);
    index += 2;
    if (index <= text.length + 2) window.requestAnimationFrame(tick);
  };
  window.setTimeout(tick, 250);
}

const counters = document.querySelectorAll("[data-count]");
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    const suffix = el.textContent.includes("%") ? "%" : el.textContent.includes("+") ? "+" : "";
    const short = el.textContent.includes("k");
    let current = 0;
    const steps = 42;
    const interval = window.setInterval(() => {
      current += target / steps;
      if (current >= target) {
        current = target;
        window.clearInterval(interval);
      }
      if (short) {
        el.textContent = `${Math.round(current / 1000)}k${suffix}`;
      } else if (target % 1) {
        el.textContent = `${current.toFixed(2)}${suffix}`;
      } else {
        el.textContent = `${Math.round(current)}${suffix}`;
      }
    }, 24);
    counterObserver.unobserve(el);
  });
});

counters.forEach((counter) => counterObserver.observe(counter));

const form = document.querySelector("[data-contact-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector("textarea");
    if (!email.value.includes("@") || message.value.trim().length < 12) {
      event.preventDefault();
      form.classList.add("has-error");
    }
  });
}
