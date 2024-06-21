import Header from './components/Header/Header.js'
import Experience from './components/Experience/Experience.js'
import Studies from './components/Studies/Studies.js'
import Projects from './components/Projects/Projects.js'
import ContactForm from './components/ContactForm/ContactForm.js'
import Footer from './components/Footer/Footer.js'
import ToggleButton from './components/ToggleButton/ToggleButton.js'
import AboutMe from './components/AboutMe/AboutMe.js'
import Skills from './components/Skills/Skills.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

document.getElementById('app').innerHTML = `
  ${Header()}
  ${AboutMe()}
  ${Skills()}
  ${ToggleButton()}
  ${Experience()}
  ${Studies()}
  ${Projects()}
  ${ContactForm()} <!-- Formulario de contacto antes del footer -->
  ${Footer()} <!-- Footer al final de la página -->
`
