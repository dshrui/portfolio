# Prompt for Claude Code

You are working in this folder:

```text
/Users/darrensu/Documents/Project #3
```

The existing portfolio site is here:

```text
/Users/darrensu/Documents/Project #3/index.html
```

Objective:

Create an alternative static portfolio website for **Lume Design Studio**, a simple design side service targeting Malaysian SMEs, small business owners, and wedding/event clients.

Important comparison instruction:

Do **not** copy the existing design language, layout, section composition, typography hierarchy, color treatment, card styling, spacing rhythm, or portfolio treatment 1:1 from the current `index.html` and `styles.css`. Use the current site only to understand the business context, content scope, packages, actual saved portfolio assets, and available logo asset.

The purpose is to compare your design judgment against another model's version, so create a clearly different visual direction while solving the same business problem.

Use these existing assets:

```text
/Users/darrensu/Documents/Project #3/assets/lume-logo.png
/Users/darrensu/Documents/Project #3/assets/lume-logo-transparent.png
/Users/darrensu/Documents/Project #3/assets/generated/a-dough-google-review-bg.jpg
/Users/darrensu/Documents/Project #3/assets/generated/glowhaus-beauty-menu-bg.jpg
/Users/darrensu/Documents/Project #3/assets/generated/wedding-invitation-floral-bg.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/chiro-2.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/chiro-3.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/chiro-4.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/chiro-8.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/chiro-11.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/chiro-12.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/padel-23.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/padel-29.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/padel-34.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/padel-sep-35.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/padel-sep-37.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/padel-sep-38.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/padel-sep-40.jpg
/Users/darrensu/Documents/Project #3/assets/portfolio/padel-sep-42.jpg
```

The portfolio images are actual user-owned work samples from Chirodayz and Padel Revolution. You may use them directly in the Claude variant, but compose them differently from the current `index.html`.

Do not overwrite the current site. Instead, create a separate Claude variant:

```text
/Users/darrensu/Documents/Project #3/claude-variant/index.html
/Users/darrensu/Documents/Project #3/claude-variant/styles.css
/Users/darrensu/Documents/Project #3/claude-variant/script.js
```

Core service positioning:

- Simple, clean, sales-focused designs for Malaysian SMEs and personal events
- Promo posters
- WhatsApp flyers
- Menus and price lists
- Google review / QR posters
- Festive campaign designs
- Wedding card designs and digital e-invites

Main offer:

- SME Promo Design Kit
- 3 promo posters
- Instagram post and story versions
- Caption / CTA rewrite
- Canva editable link

Wedding offer:

- Wedding E-Invite Package
- Digital invitation card
- Instagram Story version
- RSVP / map section
- Optional itinerary card

Portfolio direction to include:

- Chirodayz: wellness education posts, myth-busting content, clinic trust visuals
- Padel Revolution: Sunday Smash, ladies night, giveaway, rules education, event poster systems
- Optional SME/wedding adaptation section showing how these design languages can be repackaged for Malaysian SME promo kits and e-invites
- Include your own alternative interpretation of three portfolio concepts: an adough-inspired Google review poster, an April self-care menu, and a wedding invitation. You may read `CONTENT_BRIEFS.md` for the business brief, but do not copy the current poster layouts, typography, overlays, or composition 1:1.

Suggested structure, but you may improve it:

- Hero section for Lume Design Studio
- Portfolio section using the saved real work images
- Before / after or problem / solution section
- Package pricing section
- Simple process section
- Contact CTA section
- Optional mini-audit message builder

Design requirements:

- Create a polished, modern, credible portfolio page
- Make it commercially useful for Malaysian SMEs and wedding clients
- Prioritise trust, readability, mobile-first layout, and clear conversion paths
- Use the Lume logo in the header
- Make the portfolio feel like actual design work, not generic cards or plain image dumps
- Use responsive CSS for desktop and mobile
- Keep everything static; no build process required
- Use plain HTML, CSS, and optional vanilla JavaScript

Design differentiation requirements:

- Use a different layout approach from the existing version
- Use a different color system or visual mood
- Use different portfolio image treatments
- Use different section rhythm and visual hierarchy
- Avoid directly copying class names and CSS structure unless unavoidable
- Keep the same business content, but rewrite section copy where helpful

After implementation:

- Open `claude-variant/index.html` locally and visually inspect it
- Check that text does not overflow on mobile
- Check that logo loads correctly
- Check that buttons and links are usable
- Run a quick syntax check for JavaScript if you add JS
- Briefly summarise what design direction you chose and how it differs from the existing version
