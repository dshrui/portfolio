/* Lume Design Studio — Claude Variant */

// Mobile navigation
const hdrToggle = document.querySelector('.hdr-toggle');
const mainNav   = document.querySelector('#main-nav');
const navLinks  = document.querySelectorAll('.hdr-nav a');

hdrToggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  hdrToggle.setAttribute('aria-expanded', String(open));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    hdrToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Mini audit message builder
const leadTypeEl  = document.querySelector('#v-lead-type');
const leadNameEl  = document.querySelector('#v-lead-name');
const auditMsgEl  = document.querySelector('#v-audit-msg');
const copyBtnEl   = document.querySelector('#v-copy-btn');
const copyNoteEl  = document.querySelector('.copy-note');

function buildMessage() {
  const name = leadNameEl?.value.trim() || 'your page';

  if (leadTypeEl?.value === 'wedding') {
    return `Hi, I can help review ${name} and suggest how to make the invite clearer for guests.\n\nIf you send me the current invite or event details, I will check the layout, date/time clarity, venue/map section, RSVP flow, and WhatsApp-friendly version.\n\nIf you like the direction, Lume Design Studio can prepare a Wedding E-Invite Package from RM150.`;
  }

  return `Hi, I can help review ${name} and suggest how to make the design clearer for customers.\n\nIf you send me your current poster, menu, flyer, or IG page, I will check the offer, price visibility, layout, and CTA.\n\nIf you like the direction, Lume Design Studio can prepare an SME Promo Design Kit from RM199.`;
}

function refreshMessage() {
  if (auditMsgEl) auditMsgEl.value = buildMessage();
  if (copyNoteEl) copyNoteEl.textContent = '';
}

leadTypeEl?.addEventListener('change', refreshMessage);
leadNameEl?.addEventListener('input', refreshMessage);

copyBtnEl?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(auditMsgEl?.value ?? '');
    if (copyNoteEl) copyNoteEl.textContent = 'Message copied.';
  } catch {
    auditMsgEl?.focus();
    auditMsgEl?.select();
    if (copyNoteEl) copyNoteEl.textContent = 'Select and copy the message manually.';
  }
});

refreshMessage();
