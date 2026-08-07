document.addEventListener('DOMContentLoaded', function () {

  // ----- Mobile menu -----
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // ----- Marquee content (Home page only) -----
  const track = document.getElementById('marqueeTrack');
  if (track) {
    const words = ["Adapt", "Learn", "Lead", "Trust", "Build", "Understand", "Question"];
    const loopWords = [...words, ...words, ...words, ...words];
    track.innerHTML = loopWords.map(w => `<span>${w}</span>`).join('');
  }

  // ----- Scroll fade-in -----
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: .2 });
  document.querySelectorAll('.manifesto-row, .serve-card').forEach(el => obs.observe(el));

  // ----- Contact form -----
  // Uses FormSubmit.co (no backend needed). The form submits via AJAX to
  // https://formsubmit.co/ajax/<your-email> and FormSubmit relays it to your inbox.
  // IMPORTANT: the first-ever submission to a new email address triggers a one-time
  // confirmation email from FormSubmit — you must click that link before submissions
  // will actually arrive in your inbox. See README.md for full setup steps.
  const form = document.getElementById('contactForm');
  const contactRight = document.getElementById('contactRight');
  const contactBanner = document.getElementById('contactBanner');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const endpoint = form.getAttribute('data-endpoint');
      const submitBtn = form.querySelector('.submit-btn');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending…';

      const formData = new FormData(form);

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      })
        .then(response => {
          if (!response.ok) throw new Error('Request failed');
          return response.json();
        })
        .then(() => {
          contactBanner.innerHTML = '<div class="msg ok">✓ Message sent — we\'ll be in touch soon.</div>';
          contactBanner.classList.add('show');
          contactRight.innerHTML = `
            <div class="success-state">
              <div class="check">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e2b45" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 class="serif">Thank you.</h3>
              <p>Your message has reached us. We'll get back to you at the email you provided.</p>
              <button class="btn btn-outline" id="resetFormBtn">Send another message</button>
            </div>`;
          document.getElementById('resetFormBtn').addEventListener('click', () => {
            location.reload();
          });
        })
        .catch(() => {
          contactBanner.innerHTML = '<div class="msg err">Something went wrong sending your message. Please try again, or email us directly.</div>';
          contactBanner.classList.add('show');
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        });
    });
  }
});
