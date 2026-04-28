const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav a");
const leadType = document.querySelector("#lead-type");
const leadName = document.querySelector("#lead-name");
const auditMessage = document.querySelector("#audit-message");
const copyButton = document.querySelector("#copy-message");
const copyStatus = document.querySelector(".copy-status");
const scrollProgress = document.querySelector("[data-scroll-progress]");
const heroBoard = document.querySelector("[data-hero-board]");
const heroFocusButtons = document.querySelectorAll("[data-hero-focus]");
const workWorkspace = document.querySelector("[data-workspace]");
const workFilters = document.querySelectorAll(".work-filter");
const workProjects = document.querySelectorAll("[data-work-project]");
const previewCards = document.querySelectorAll("[data-preview-card]");
const workPreviewKicker = document.querySelector("[data-work-preview-kicker]");
const workPreviewTitle = document.querySelector("[data-work-preview-title]");
const workPreviewCopy = document.querySelector("[data-work-preview-copy]");
const packageStudio = document.querySelector("[data-package-studio]");
const packageCards = document.querySelectorAll("[data-package-card]");
const packageKicker = document.querySelector("[data-package-kicker]");
const packageTitle = document.querySelector("[data-package-title]");
const packagePrice = document.querySelector("[data-package-price]");
const packageCopy = document.querySelector("[data-package-copy]");
const packageOutputOne = document.querySelector("[data-package-output-one]");
const packageOutputTwo = document.querySelector("[data-package-output-two]");
const packageOutputThree = document.querySelector("[data-package-output-three]");
const tiltCards = document.querySelectorAll("[data-tilt-card]");
const conceptLab = document.querySelector("[data-concept-lab]");
const conceptTabs = document.querySelectorAll("[data-concept-trigger]");
const conceptCards = document.querySelectorAll("[data-concept-card]");
const labKicker = document.querySelector("[data-lab-kicker]");
const labTitle = document.querySelector("[data-lab-title]");
const labCopy = document.querySelector("[data-lab-copy]");
const labPosterKicker = document.querySelector("[data-lab-poster-kicker]");
const labPosterTitle = document.querySelector("[data-lab-poster-title]");
const labPosterMeta = document.querySelector("[data-lab-poster-meta]");
const labStatus = document.querySelector("[data-lab-status]");
const labCheckOne = document.querySelector("[data-lab-check-one]");
const labCheckTwo = document.querySelector("[data-lab-check-two]");
const labCheckThree = document.querySelector("[data-lab-check-three]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const conceptCopy = {
  review: {
    kicker: "Design illustration",
    title: "Review prompt system",
    copy: "A bakery customer has just finished eating. The design needs to make leaving a review feel immediate and effortless.",
    posterKicker: "Google review",
    posterTitle: "Loved your bake?",
    posterMeta: "QR / rating / review prompt",
    status: "Active concept: Google Review",
    checks: ["Customer action: scan and review", "Visual cue: bread, coffee, table card", "Output: IG post plus in-store QR card"],
  },
  menu: {
    kicker: "Design illustration",
    title: "Seasonal menu layout",
    copy: "A service list becomes a booking-focused April campaign with prices, hierarchy, and a reason to message now.",
    posterKicker: "April menu",
    posterTitle: "Reset your glow ritual.",
    posterMeta: "Services / prices / booking CTA",
    status: "Active concept: Self-Care Menu",
    checks: ["Customer action: choose a treatment", "Visual cue: salon products and soft light", "Output: IG post plus story version"],
  },
  invite: {
    kicker: "Design illustration",
    title: "Guest-ready e-invite",
    copy: "The wedding card is structured so guests can instantly read the names, date, venue, time, RSVP, map, and itinerary.",
    posterKicker: "Wedding invite",
    posterTitle: "Aisyah & Daniel",
    posterMeta: "RSVP / map / itinerary",
    status: "Active concept: Wedding Invitation",
    checks: ["Customer action: RSVP and navigate", "Visual cue: florals, silk, invitation card", "Output: digital invite plus IG story crop"],
  },
};

const packageContent = {
  starter: {
    kicker: "Fastest test",
    title: "Single Promo Poster",
    price: "From RM99",
    copy: "Useful when a business needs one clean sales asset for a launch, promo, or announcement.",
    outputs: ["1 poster design", "1 Instagram post and story version", "Caption or CTA rewrite"],
  },
  kit: {
    kicker: "Selected offer",
    title: "SME Promo Design Kit",
    price: "From RM199",
    copy: "Best for businesses that need a small campaign system, not a one-off poster.",
    outputs: ["3 promo posters", "Instagram post and story versions", "Caption or CTA rewrite"],
  },
  wedding: {
    kicker: "Event-ready",
    title: "Wedding E-Invite Package",
    price: "From RM150",
    copy: "Structured for guests who need the names, date, venue, RSVP, map, and itinerary at a glance.",
    outputs: ["Digital invitation card", "Instagram Story version", "RSVP or map section"],
  },
};

function buildAuditMessage() {
  const name = leadName?.value.trim() || "my page";

  if (leadType?.value === "wedding") {
    return `Hi Lume Design Studio, I would like to request a free mini design audit for ${name}.\n\nI need help reviewing my wedding invite or event details. Please check whether the names, date, time, venue/map section, RSVP flow, and Instagram Story version are clear for guests.\n\nIf suitable, please send me the Wedding E-Invite Package details from RM150.`;
  }

  return `Hi Lume Design Studio, I would like to request a free mini design audit for ${name}.\n\nI need help reviewing my current poster, menu, flyer, or Instagram page. Please check whether the offer is clear, the price/details are easy to see, the layout looks polished, and the CTA is strong enough for customers.\n\nIf suitable, please send me the SME Promo Design Kit details from RM199.`;
}

function updateAuditMessage() {
  if (!auditMessage || !copyStatus) return;

  auditMessage.value = buildAuditMessage();
  copyStatus.textContent = "";
}

function setConcept(concept) {
  const content = conceptCopy[concept];

  if (!conceptLab || !content) return;

  conceptLab.dataset.concept = concept;
  labKicker.textContent = content.kicker;
  labTitle.textContent = content.title;
  labCopy.textContent = content.copy;
  labPosterKicker.textContent = content.posterKicker;
  labPosterTitle.textContent = content.posterTitle;
  labPosterMeta.textContent = content.posterMeta;
  labStatus.textContent = content.status;
  labCheckOne.textContent = content.checks[0];
  labCheckTwo.textContent = content.checks[1];
  labCheckThree.textContent = content.checks[2];

  conceptTabs.forEach((tab) => {
    const isActive = tab.dataset.conceptTrigger === concept;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });

  conceptCards.forEach((card) => {
    card.classList.toggle("is-focused", card.dataset.conceptCard === concept);
  });
}

function setHeroFocus(focus) {
  if (!heroBoard) return;

  heroBoard.dataset.heroFocus = focus;
  heroFocusButtons.forEach((button) => {
    const isActive = button.dataset.heroFocus === focus;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setWorkFilter(filter) {
  if (!workWorkspace) return;

  workWorkspace.dataset.workFilter = filter;
  workFilters.forEach((button) => {
    const isActive = button.dataset.workFilter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  workProjects.forEach((project) => {
    const isMuted = filter !== "all" && project.dataset.workProject !== filter;
    project.classList.toggle("is-muted", isMuted);
  });
}

function getPreviewContent(card) {
  const title =
    card.querySelector("figcaption strong")?.textContent ||
    card.querySelector("h4")?.textContent ||
    "Portfolio piece";
  const copy =
    card.querySelector("figcaption span")?.textContent ||
    card.querySelector(".poster-copy p")?.textContent ||
    card.querySelector(".menu-note")?.textContent ||
    card.querySelector(".wedding-date")?.textContent ||
    "Structured as a practical social asset with clear hierarchy and a customer action.";

  return {
    kicker: card.dataset.previewKicker || "Portfolio preview",
    title: title.replace(/\s+/g, " ").trim(),
    copy: copy.replace(/\s+/g, " ").trim(),
  };
}

function updateWorkPreview(card) {
  if (!card || !workPreviewKicker || !workPreviewTitle || !workPreviewCopy) return;

  const content = getPreviewContent(card);
  workPreviewKicker.textContent = content.kicker;
  workPreviewTitle.textContent = content.title;
  workPreviewCopy.textContent = content.copy;

  previewCards.forEach((previewCard) => {
    previewCard.classList.toggle("is-previewed", previewCard === card);
  });
}

function setPackage(packageName) {
  const content = packageContent[packageName];
  if (!content || !packageStudio) return;

  packageStudio.dataset.package = packageName;
  packageKicker.textContent = content.kicker;
  packageTitle.textContent = content.title;
  packagePrice.textContent = content.price;
  packageCopy.textContent = content.copy;
  packageOutputOne.textContent = content.outputs[0];
  packageOutputTwo.textContent = content.outputs[1];
  packageOutputThree.textContent = content.outputs[2];

  packageCards.forEach((card) => {
    const isSelected = card.dataset.packageCard === packageName;
    card.classList.toggle("is-selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });
}

function handleTilt(event) {
  if (prefersReducedMotion) return;

  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  const strength = card.classList.contains("hero-note") ? 3 : 5;

  card.style.setProperty("--tilt-x", `${(-y * strength).toFixed(2)}deg`);
  card.style.setProperty("--tilt-y", `${(x * strength).toFixed(2)}deg`);
}

function resetTilt(event) {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
}

function updateScrollProgress() {
  if (!scrollProgress) return;

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  scrollProgress.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
}

function observeRevealItems() {
  const revealItems = document.querySelectorAll(
    ".hero-copy, .hero-board, .section-heading, .work-desk, .project, .package-shell, .contact-copy, .audit-panel, .site-footer",
  );

  revealItems.forEach((item) => item.classList.add("reveal-ready"));

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

leadType?.addEventListener("change", updateAuditMessage);
leadName?.addEventListener("input", updateAuditMessage);
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

heroFocusButtons.forEach((button) => {
  button.addEventListener("click", () => setHeroFocus(button.dataset.heroFocus));
});

workFilters.forEach((button) => {
  button.addEventListener("click", () => setWorkFilter(button.dataset.workFilter));
});

previewCards.forEach((card) => {
  card.addEventListener("mouseenter", () => updateWorkPreview(card));
  card.addEventListener("focus", () => updateWorkPreview(card));
  card.addEventListener("click", () => updateWorkPreview(card));
});

packageCards.forEach((card) => {
  card.addEventListener("click", () => setPackage(card.dataset.packageCard));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setPackage(card.dataset.packageCard);
    }
  });
});

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", handleTilt);
  card.addEventListener("mouseleave", resetTilt);
  card.addEventListener("blur", resetTilt);
});

conceptTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setConcept(tab.dataset.conceptTrigger);
  });
});

conceptCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    setConcept(card.dataset.conceptCard);
    updateWorkPreview(card);
  });
  card.addEventListener("focus", () => {
    setConcept(card.dataset.conceptCard);
    updateWorkPreview(card);
  });
  card.addEventListener("mousemove", handleTilt);
  card.addEventListener("mouseleave", resetTilt);
});

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(auditMessage.value);
    copyStatus.textContent = "Inquiry copied.";
  } catch {
    auditMessage.focus();
    auditMessage.select();
    copyStatus.textContent = "Select and copy the inquiry manually.";
  }
});

updateAuditMessage();
setConcept("review");
setHeroFocus("all");
setWorkFilter("all");
setPackage("kit");
updateWorkPreview(previewCards[0]);
updateScrollProgress();
observeRevealItems();
