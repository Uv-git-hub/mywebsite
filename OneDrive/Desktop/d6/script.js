// ---------------------------------------------------------
// script.js — Mobile Friendly + Clean + No Duplicate Events
// ---------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------
     TYPING EFFECT
  -------------------------------------------- */
  const words = [
    'We automate incident response through AI-driven optimization.',
  ];

  const typedEl = document.getElementById('typed');
  let widx = 0, cidx = 0, forward = true;

  function tick() {
    const word = words[widx];

    if (forward) {
      cidx++;
      typedEl.textContent = word.slice(0, cidx);
      if (cidx === word.length) {
        forward = false;
        return setTimeout(tick, 1200);
      }
    } else {
      cidx--;
      typedEl.textContent = word.slice(0, cidx);
      if (cidx === 0) {
        forward = true;
        widx = (widx + 1) % words.length;
      }
    }

    setTimeout(tick, forward ? 60 : 28);
  }
  tick();

  /* -------------------------------------------
     MOBILE NAV MENU
  -------------------------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('active');
  });

  /* -------------------------------------------
     CONTACT FORM (EmailJS)
  -------------------------------------------- */

  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showStatus('Please fill all required fields.', true);
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      "service_ju237q5",
      "template_23rgigx",
      {
        from_name: name,
        from_email: email,
        message: message
      }
    ).then(() => {
      showStatus("Thanks — your message has been sent!");
      form.reset();
    }).catch((err) => {
      console.error(err);
      showStatus("Oops! Something went wrong. Try again.", true);
    });

  });

  function showStatus(msg, isError = false) {
    formStatus.hidden = false;
    formStatus.textContent = msg;
    formStatus.style.color = isError ? "#ff8a8a" : "#3ec4c8";

    clearTimeout(showStatus._t);
    showStatus._t = setTimeout(() => {
      formStatus.hidden = true;
    }, 6000);
  }

  /* -------------------------------------------
     FOOTER YEAR
  -------------------------------------------- */
  document.getElementById('year').textContent = new Date().getFullYear();
});



/* -------------------------------------------
   VANTA BACKGROUND
-------------------------------------------- */
VANTA.NET({
  el: "#cyber-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x00fff0,
  backgroundColor: 0x00000A,
  points: 12.00,
  maxDistance: 22.00,
  spacing: 18.00
});

