# Stravelle Website

A static 3-page site: `index.html` (Home), `about.html` (About), `contact.html` (Contact).
No build step, no dependencies — plain HTML/CSS/JS. Open `index.html` directly in a browser to preview locally.

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



