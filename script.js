const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav a");
const leadType = document.querySelector("#lead-type");
const leadName = document.querySelector("#lead-name");
const auditMessage = document.querySelector("#audit-message");
const copyButton = document.querySelector("#copy-message");
const copyStatus = document.querySelector(".copy-status");
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

function buildAuditMessage() {
  const name = leadName.value.trim() || "your page";

  if (leadType.value === "wedding") {
    return `Hi, I can help review ${name} and suggest how to make the invite clearer for guests.\n\nIf you send me the current invite or event details, I will check the layout, date/time clarity, venue/map section, RSVP flow, and Instagram Story crop.\n\nIf you like the direction, Lume Design Studio can prepare a Wedding E-Invite Package from RM150.`;
  }

  return `Hi, I can help review ${name} and suggest how to make the design clearer for customers.\n\nIf you send me your current poster, menu, flyer, or IG page, I will check the offer, price visibility, layout, and CTA.\n\nIf you like the direction, Lume Design Studio can prepare an SME Promo Design Kit from RM199.`;
}

function updateAuditMessage() {
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

function handlePosterTilt(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
  card.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
}

function resetPosterTilt(event) {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
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

conceptTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setConcept(tab.dataset.conceptTrigger);
  });
});

conceptCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    setConcept(card.dataset.conceptCard);
  });
  card.addEventListener("mousemove", handlePosterTilt);
  card.addEventListener("mouseleave", resetPosterTilt);
});

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(auditMessage.value);
    copyStatus.textContent = "Message copied.";
  } catch {
    auditMessage.focus();
    auditMessage.select();
    copyStatus.textContent = "Select and copy the message manually.";
  }
});

updateAuditMessage();
setConcept("review");
