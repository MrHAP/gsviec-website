const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

document.body.classList.add("reveal-ready");

const translations = {
  vi: {
    "brand.subtitle": "Enterprise Computing",
    "nav.problem": "Vấn đề",
    "nav.plans": "Gói dịch vụ",
    "nav.architecture": "Kiến trúc",
    "nav.compare": "So sánh",
    "nav.insights": "Tin tức",
    "nav.cta": "Đặt lịch audit node",
    "footer.description": "Global Solutions for Virtualized Infrastructure & Enterprise Computing. Tự động hóa bare-metal và hạ tầng node Web3 cho đội ngũ cần quyền kiểm soát, hiệu năng và uptime.",
    "footer.contact": "Liên hệ",
    "footer.navigate": "Điều hướng",
    "hero.eyebrow": "Global Solutions for Virtualized Infrastructure & Enterprise Computing",
    "hero.title": "Tự động hóa bare-metal cho node Web3 không thể downtime.",
    "hero.lede": "GSVIEC giúp validator, dự án DePIN và đội ngũ blockchain doanh nghiệp triển khai hạ tầng node với quyền kiểm soát phần cứng, tự động hóa lặp lại được, giám sát và vận hành theo SLA.",
    "hero.primary": "Đặt lịch audit node",
    "hero.secondary": "Xem gói dịch vụ",
    "hero.deploy": "Deploy Mode",
    "trust.engineer": "Engineer-to-Engineer",
    "trust.iac": "IaC-first",
    "trust.abuse": "Không free infra để tránh abuse",
    "trust.sovereignty": "Thiết kế cho quyền tự chủ",
    "terminal.status": "Pipeline tự động hóa sẵn sàng cho onboarding trả phí",
    "metric.cost": "Mục tiêu giảm chi phí hạ tầng so với cloud phổ thông, tùy workload",
    "metric.throughput": "Mục tiêu benchmark tăng throughput trong các case bare-metal phù hợp",
    "metric.pro": "Mục tiêu SLA gói Pro sau triển khai trả phí",
    "metric.enterprise": "Mục tiêu SLA Enterprise với thiết kế redundancy",
    "problem.eyebrow": "Vấn đề thị trường",
    "problem.title": "Hạ tầng Web3 quá đắt, quá trừu tượng và quá rủi ro khi uptime quyết định doanh thu.",
    "problem.copy": "Validator và node operator không chỉ mua server. Họ mua sự liên tục, khả năng tham gia block, độ trễ và niềm tin rằng hệ thống không lỗi đúng lúc quan trọng nhất.",
    "problem.card1.title": "Áp lực chi phí cloud",
    "problem.card1.copy": "Cloud phổ thông tiện lợi, nhưng workload node dung lượng cao có thể trở nên rất đắt khi request, storage và bandwidth tăng.",
    "problem.card2.title": "Rủi ro slashing",
    "problem.card2.copy": "Downtime của validator có thể tạo penalty ở cấp protocol. GSVIEC thiết kế hạ tầng quanh uptime visibility, failover và ranh giới SLA rõ ràng.",
    "problem.card3.title": "Thiếu quyền kiểm soát",
    "problem.card3.copy": "RPC và managed cloud giúp khởi động nhanh, nhưng đội ngũ mất quyền kiểm soát phần cứng, tuning và vận hành trực tiếp.",
    "problem.card4.title": "Gánh nặng DevOps thủ công",
    "problem.card4.copy": "Dedicated server rẻ hơn nhưng khó vận hành nếu thiếu tự động hóa, monitoring, security policy và hỗ trợ kỹ thuật.",
    "services.eyebrow": "Hạ tầng cốt lõi",
    "services.title": "Một stack tập trung cho node operators, DePIN và đội ngũ blockchain doanh nghiệp.",
    "services.copy": "GSVIEC tập trung vào bare-metal automation, validator operations, private Web3 cloud và DevOps automation.",
    "service.bare-metal-node-hosting.title": "Lưu trữ Node Bare-metal",
    "service.bare-metal-node-hosting.summary": "Triển khai node tự động trên hạ tầng chuyên dụng cho đội ngũ cần độ trễ thấp, quyền kiểm soát cao và hiệu năng ổn định.",
    "service.bare-metal-node-hosting.outcome": "Giảm phụ thuộc vào cloud phổ thông cho các node Web3 quan trọng nhưng vẫn giữ quy trình triển khai và giám sát đơn giản.",
    "service.validator-infrastructure.title": "Hạ tầng Validator",
    "service.validator-infrastructure.summary": "Vận hành validator theo SLA với kiến trúc failover, backup, giám sát và rào chắn vận hành cho mạng PoS.",
    "service.validator-infrastructure.outcome": "Giảm rủi ro downtime và xây mô hình vận hành xoay quanh độ tin cậy của validator, không chỉ thuê server.",
    "service.private-cloud-web3.title": "Private Cloud cho Web3",
    "service.private-cloud-web3.summary": "Private cloud và hạ tầng hybrid cho DePIN, blockchain, AI, IoT và các đội ngũ doanh nghiệp cần kiểm soát dữ liệu.",
    "service.private-cloud-web3.outcome": "Giữ dữ liệu, compute và chính sách vận hành trong tầm kiểm soát nhưng vẫn có tự động hóa như cloud.",
    "service.devops-automation.title": "Tự động hóa DevOps",
    "service.devops-automation.summary": "Hỗ trợ DevOps engineer-to-engineer cho CI/CD, Infrastructure as Code, observability và vận hành an toàn.",
    "service.devops-automation.outcome": "Biến thay đổi hạ tầng thành quy trình lặp lại được, audit được và dễ mở rộng trên nhiều node.",
    "plans.eyebrow": "Mô hình thương mại",
    "plans.title": "Ba gói biến sự quan tâm kỹ thuật thành hạ tầng trả phí.",
    "plans.copy": "Giá chỉ mang tính tham khảo và cần xác nhận theo chain, region, redundancy, bandwidth và mức hỗ trợ.",
    "plans.starter.title": "Tự động hóa mã nguồn mở",
    "plans.starter.copy": "Script và tài liệu cho đội ngũ kỹ thuật muốn tự chạy node trên server của họ.",
    "plans.starter.cta": "Yêu cầu truy cập repo",
    "plans.pro.title": "Quản trị một node",
    "plans.pro.copy": "Triển khai node trả phí với monitoring, hỗ trợ cơ bản và SLA mục tiêu cho operator giai đoạn đầu.",
    "plans.pro.cta": "Bắt đầu scope Pro",
    "plans.enterprise.title": "Multi-node failover",
    "plans.enterprise.copy": "Topology tùy chỉnh cho validator, dự án DePIN và hệ thống blockchain doanh nghiệp.",
    "plans.enterprise.cta": "Đặt lịch demo Enterprise",
    "architecture.eyebrow": "Kiến trúc hạ tầng",
    "architecture.title": "Từ server vật lý đến vận hành Web3 lặp lại được.",
    "architecture.copy": "Lợi thế chiến lược của GSVIEC là cầu nối giữa quyền kiểm soát bare-metal và vận hành định nghĩa bằng phần mềm.",
    "blockchain.eyebrow": "Bằng chứng định hướng kỹ thuật",
    "blockchain.title": "Open-source scripts tạo niềm tin; managed operations tạo doanh thu.",
    "blockchain.copy": "Starter repo thu hút operator kỹ thuật. Pro và Enterprise chuyển đổi các đội cần SLA, hỗ trợ, failover và người chịu trách nhiệm về production readiness.",
    "insights.title": "Nội dung engineer-to-engineer cho validator và đội ngũ hạ tầng.",
    "contact.eyebrow": "Đặt lịch audit node",
    "contact.title": "Xác định workload node của bạn có nên chuyển sang bare-metal không.",
    "contact.copy": "Gửi chain, region, uptime target, chi phí hiện tại và nhu cầu Pro hoặc Enterprise failover. GSVIEC sẽ phản hồi bước kỹ thuật tiếp theo.",
    "form.name": "Họ tên",
    "form.email": "Email công việc",
    "form.company": "Dự án / công ty",
    "form.message": "Nhu cầu node hoặc hạ tầng",
    "form.placeholder": "Network, nhà cung cấp hiện tại, chi phí tháng, uptime target, region và số node dự kiến",
    "form.submit": "Yêu cầu audit hạ tầng",
    "form.note": "Nếu chưa cấu hình Formspree, form sẽ mở ứng dụng email và gửi tới hello@gsviec.com."
  }
};

const defaultTexts = new Map();

document.querySelectorAll("[data-i18n]").forEach((element) => {
  defaultTexts.set(element, element.textContent);
});

document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
  defaultTexts.set(element, element.getAttribute("placeholder") || "");
});

const applyLanguage = (lang) => {
  const dictionary = translations[lang] || {};
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key] || defaultTexts.get(element) || element.textContent;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.setAttribute("placeholder", dictionary[key] || defaultTexts.get(element) || "");
  });

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langToggle === lang));
  });

  localStorage.setItem("gsviec-language", lang);
};

document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langToggle));
});

applyLanguage(localStorage.getItem("gsviec-language") || "en");

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

const runMotionIntro = () => {
  if (!window.gsap) return;

  window.gsap.from(".hero-copy > *", {
    duration: 0.75,
    y: 22,
    opacity: 0,
    stagger: 0.08,
    ease: "power2.out"
  });

  window.gsap.from(".blockchain-card", {
    duration: 0.9,
    x: -48,
    opacity: 0,
    stagger: 0.18,
    ease: "power2.out",
    scrollTrigger: undefined
  });

  window.gsap.to(".status-validated", {
    scale: 1.045,
    repeat: -1,
    yoyo: true,
    duration: 0.9,
    ease: "sine.inOut"
  });
};

window.setTimeout(runMotionIntro, 180);

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

if (window.lucide) {
  window.lucide.createIcons();
}

const deployLogs = [
  "> Initializing GSVIEC Infrastructure...",
  "> Connecting to Bare Metal nodes...",
  "> Injecting cloud-init.yaml...",
  "> Establishing Blockchain Validator...",
  "> Syncing Prometheus alerts...",
  "> Integrity Check: SUCCESS",
  "> System Ready. Welcome to GSVIEC."
];
const deployConsole = document.getElementById("deploy-console");
const deployLog = document.querySelector("[data-deploy-log]");
const closeDeploy = () => {
  if (!deployConsole) return;
  deployConsole.classList.remove("is-open");
};

document.querySelector("[data-deploy-close]")?.addEventListener("click", closeDeploy);

document.querySelector("[data-deploy-trigger]")?.addEventListener("click", () => {
  if (!deployConsole || !deployLog) return;
  deployLog.innerHTML = "";
  deployConsole.classList.add("is-open");

  let index = 0;
  const interval = window.setInterval(() => {
    if (index >= deployLogs.length) {
      window.clearInterval(interval);
      window.setTimeout(closeDeploy, 1700);
      return;
    }

    const line = document.createElement("p");
    line.textContent = deployLogs[index];
    deployLog.appendChild(line);
    index += 1;
  }, 430);
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
      window.location.href = `mailto:hello@gsviec.com?subject=${subject}&body=${body}`;
    }
  });
}
