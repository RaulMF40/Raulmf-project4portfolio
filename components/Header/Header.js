import './Header.css'

const template = () => {
  return `
    <header>
      <h1 id="header-name">Raúl Moya</h1>
      <nav>
        <button id="menu-button">☰</button>
        <ul id="menu">
          <li><a href="#aboutme" class="menu-item">About me</a></li>
          <li><a href="#skills" class="menu-item">Skills</a></li>
          <li><a href="#studies" class="menu-item">Studies</a></li>
          <li><a href="#experience" class="menu-item">Experience</a></li>
          <li><a href="#projects" class="menu-item">Projects</a></li>
          <li class="contact"><a href="#contact-section" class="menu-item">Contact</a></li>
        </ul>
      </nav>
    </header>
  `
}

const Header = () => {
  const header = template()
  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('menu-button').addEventListener('click', () => {
      document.getElementById('menu').classList.toggle('show')
    })

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        menu.classList.remove('show')
      }
    })

    // Evento para deslizar hacia arriba al hacer clic en el nombre
    const headerName = document.getElementById('header-name')
    headerName.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    // Lista de IDs de secciones
    const sectionIds = [
      '#aboutme',
      '#skills',
      '#studies',
      '#experience',
      '#projects',
      '#contact-section'
    ]

    // Agregar eventos de clic para cada enlace del menú
    sectionIds.forEach((id) => {
      const link = document.querySelector(`a[href="${id}"]`)
      if (link) {
        link.addEventListener('click', (event) => {
          event.preventDefault()
          const section = document.querySelector(id)
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            // Cerrar el menú si está en formato móvil
            if (window.innerWidth <= 768) {
              menu.classList.remove('show')
            }
          }
        })
      }
    })
  })

  return header
}

export default Header
