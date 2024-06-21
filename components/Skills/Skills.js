import './Skills.css'
const skills = [
  {
    name: 'HTML5',
    logo: 'https://img.icons8.com/color/48/html-5--v1.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    name: 'CSS3',
    logo: 'https://img.icons8.com/color/48/css3.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    name: 'JavaScript',
    logo: 'https://img.icons8.com/color/48/javascript--v1.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    name: 'React',
    logo: 'https://img.icons8.com/office/40/react.png',
    link: 'https://reactjs.org/'
  },
  {
    name: 'Node.js',
    logo: 'https://img.icons8.com/fluency/48/node-js.png',
    link: 'https://nodejs.org/'
  },
  {
    name: 'Express.js',
    logo: 'https://img.icons8.com/nolan/64/express-js.png',
    link: 'https://expressjs.com/'
  },
  {
    name: 'Angular',
    logo: 'https://img.icons8.com/color/48/angularjs.png',
    link: 'https://angular.io/'
  },
  {
    name: 'NextJs',
    logo: 'https://img.icons8.com/fluency/48/nextjs.png',
    link: 'https://nextjs.org/'
  },
  {
    name: 'Typescript',
    logo: 'https://img.icons8.com/fluency/48/typescript--v1.png',
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'MongoDB',
    logo: 'https://img.icons8.com/color/48/mongo-db.png',
    link: 'https://www.mongodb.com/'
  },
  {
    name: 'RESTful API',
    logo: 'https://img.icons8.com/dotty/80/api-settings.png',
    link: 'https://restfulapi.net/'
  },
  {
    name: 'Git',
    logo: 'https://img.icons8.com/color/48/git.png',
    link: 'https://git-scm.com/'
  },
  {
    name: 'Python',
    logo: 'https://img.icons8.com/color/48/python--v1.png',
    link: 'https://www.python.org/'
  },
  {
    name: 'Figma',
    logo: 'https://img.icons8.com/color/48/figma--v1.png',
    link: 'https://www.figma.com/'
  }
]

const Skills = () => {
  return `
    <section id="skills" class="skills">
      <h2>SKILLS</h2>
      <ul>
        ${skills
          .map(
            (skill) => `
          <li>
            <a href="${skill.link}" target="_blank" rel="noopener noreferrer">
              <img src="${skill.logo}" alt="${skill.name}">
              <span>${skill.name}</span>
            </a>
          </li>
        `
          )
          .join('')}
      </ul>
    </section>
  `
}
export default Skills
