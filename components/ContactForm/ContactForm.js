import './ContactForm.css'

let isContactFormVisible = false

window.toggleContactForm = () => {
  const form = document.getElementById('contactForm')
  const contactLinks = document.querySelector('.contact-links')
  const contactToggleButton = document.querySelector('.contact .toggle-button')

  isContactFormVisible = !isContactFormVisible

  if (isContactFormVisible) {
    form.classList.remove('hidden')
    contactLinks.classList.add('hidden')
    contactToggleButton.textContent = 'Display Social Networks'
  } else {
    form.classList.add('hidden')
    contactLinks.classList.remove('hidden')
    contactToggleButton.textContent = 'Display Form'
  }
}

const ContactForm = () => {
  return `
    <section id="contact-section" class="contact">
      <h2>CONTACT</h2>
      <button class="toggle-button" onclick="toggleContactForm()">Display Form</button>
      <form id="contactForm" class="contact-form hidden">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div class="contact-links">
        <ul>
          <li>
            <a href="https://github.com/RaulMF40/Raulmf-project4portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ra%C3%BAl-moya-fuentes-b2637a46/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </section>
  `
}

export default ContactForm
