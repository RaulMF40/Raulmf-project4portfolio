import './Projects.css'

const projects = [
  {
    title: 'Project 1: Landing Page Comic Shop',
    description:
      'Completion of Project 1, create a Landing Page using HTML and CSS, which must be fully responsive. In this case, I have created a landing page based on a comic book / manga store and merchandising.',
    link1: 'https://proyecto1landingpage.vercel.app/',
    link2: 'https://github.com/RaulMF40/proyecto1landingpage',
    preview: './assets/landingpagep1.png',
    languages: ['fab fa-html5', 'fab fa-css3-alt']
  },
  {
    title: 'Project 2: Web Design Comic Shop',
    description:
      'Completion of Project 2 - Web Dev. Creation of an online shop for comics and merchandise using VITE, CSS, HTML and JavaScript. And using a products(comics/merchandise) and price filter.',
    link1: 'https://proyecto2webdesign.netlify.app/',
    link2: 'https://github.com/RaulMF40/proyecto2webdesign',
    preview: './assets/project2webdesign.png',
    languages: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js']
  },
  {
    title: 'Project 3: API Unsplash Async',
    description:
      'Project 3 - Imitating Pinterest using the unsplash API and using CSS, HTML and JavaScript.',
    link1: 'https://project3pinterest-raulmf.netlify.app/',
    link2: 'https://github.com/RaulMF40/project3pinterestasync',
    preview: './assets/project3asyncpint.png',
    languages: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js']
  },
  {
    title: 'Project 5: The Games Hub',
    description:
      'Project 5 - Games Hub (Connect4, Trivial and Memory Game) using VITE, CSS, HTML and JavaScript.',
    link1: 'https://project5-gameshub.vercel.app/',
    link2: 'https://github.com/RaulMF40/project5-gameshub',
    preview: './assets/project5gameshub.png',
    languages: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js']
  }
]

const Projects = () => {
  return `
    <section id="projects" class="projects">
      <h2>PROJECTS</h2>
      <div class="project-list">
        ${projects
          .map(
            (project) => `
          <div class="project-item">
            <h3>${project.title}</h3>
            <img src="${project.preview}" alt="${project.title}">
            <p>${project.description}</p>
            <div class="project-languages">
              ${project.languages
                .map((lang) => `<i class="${lang}"></i>`)
                .join('')}
            </div>
            <div class="project-links">
              <a href="${
                project.link1
              }" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a href="${
                project.link2
              }" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </section>
  `
}

export default Projects
