# Stravelle Website

A static 3-page site: `index.html` (Home), `about.html` (About), `contact.html` (Contact).
No build step, no dependencies — plain HTML/CSS/JS. Open `index.html` directly in a browser to preview locally.

```
stravelle-site/
├── index.html
├── about.html
├── contact.html
├── css/style.css
├── js/main.js
└── README.md
```

## 1. Activate the contact form (do this first)

The contact form sends messages via **FormSubmit.co** — a free service that emails you
form submissions with no backend, server, or API key needed.

It's already wired to: **stravelle.inc@gmail.com**

**If that's your inbox:**
1. Deploy the site (see below) or just open `contact.html` locally.
2. Submit the form once, with any test message.
3. Check that inbox for an email from FormSubmit titled "Please Activate Your FormSubmit Form" and click the confirmation link.
4. That's it — every submission after this lands directly in the inbox. This is a one-time step.

**If it's not your inbox**, change the address in `contact.html`, in the `<form>` tag:
```html
<form id="contactForm" data-endpoint="https://formsubmit.co/ajax/YOUR-EMAIL@example.com">
```
Then repeat the activation step above with your own address.

FormSubmit is free for reasonable use. No signup is required for this basic setup.
If you'd rather use a different provider (Web3Forms, Formspree, your own backend, etc.),
swap the `fetch()` endpoint in `js/main.js` — the rest of the form logic will keep working
as long as the endpoint accepts a POST with form fields and returns JSON.

## 2. Deploy it

Any static host works. Two of the easiest, both free:

**Netlify (drag and drop)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `stravelle-site` folder onto the page.
3. You'll get a live URL immediately. Add a custom domain from the site settings if you have one.

**Vercel**
1. Go to https://vercel.com/new
2. Import the folder (or push it to a GitHub repo first and import that).
3. Deploy — no build command needed, output directory is the project root.

**GitHub Pages**
1. Push this folder to a GitHub repo.
2. Repo Settings → Pages → set source to the `main` branch, root folder.
3. Your site will be live at `https://your-username.github.io/repo-name`.

## 3. Editing content

- Text, links, and images live directly in the three `.html` files.
- Shared colors, fonts, and layout rules are in `css/style.css`.
- Shared behavior (mobile menu, scroll animations, form submit) is in `js/main.js`.
- The nav, footer, and Google Fonts `<link>` are duplicated at the top/bottom of each
  HTML file since this is a plain static site (no templating). If you add a page,
  copy the header/footer markup from an existing page to keep them in sync.

## Notes

- Fonts (Fraunces + Inter) load from Google Fonts via CDN — an internet connection
  is needed for them to render correctly; the site still works without it, just
  with fallback system fonts.
- The hero network graphic and the "people on a couch" banner image are original
  SVG illustrations built for this site, not photographs.
