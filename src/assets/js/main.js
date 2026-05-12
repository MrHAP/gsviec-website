const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

document.body.classList.add("reveal-ready");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
}

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

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

const revealTargets = document.querySelectorAll(
  ".section, .metrics > div, .service-card, .pricing-card, .post-card, .pillar-grid > div, .detail-grid > div, .comparison-table [role='row'], .consultation, .article-body > *"
);

revealTargets.forEach((target, index) => {
  target.setAttribute("data-reveal", "");
  target.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 70, 350)}ms`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
);

revealTargets.forEach((target) => revealObserver.observe(target));

document.querySelectorAll("[data-tilt]").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-x", `${x * 8}deg`);
    card.style.setProperty("--tilt-y", `${y * -8}deg`);
    card.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
    card.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "50%");
  });
});

const form = document.querySelector("[data-contact-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector("textarea");
    if (!email.value.includes("@") || message.value.trim().length < 12) {
      event.preventDefault();
      form.classList.add("has-error");
      return;
    }

    if (form.action.includes("your-form-id")) {
      event.preventDefault();
      const name = form.elements.name.value.trim();
      const company = form.elements.company.value.trim();
      const subject = encodeURIComponent("GSVIEC infrastructure audit request");
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email.value.trim()}\nProject / Company: ${company}\n\nNeed:\n${message.value.trim()}`
      );
      window.location.href = `mailto:contact@gsviec.com?subject=${subject}&body=${body}`;
    }
  });
}
