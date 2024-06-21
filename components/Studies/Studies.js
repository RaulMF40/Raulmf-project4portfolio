import './Studies.css'

const studies = {
  degree: 'Full Stack Developer',
  university: 'The Power MBA - Rock{TheCode} - 2023',
  description:
    'I have a comprehensive understanding of both front-end and back-end development. My skills include: Front-end: HTML/CSS for structuring and styling websites. Experienced in JavaScript for interactive web content. Familiar with JavaScript frameworks and libraries like React, Angular, and Vue.js. TypeScript. Knowledgeable in Bootstrap for responsive web design. Back-end: Skilled in server-side JavaScript with Node.js and Express.js. TypeScript. Versed in server-side programming languages like Python. Experienced in SQL and NoSQL databases like MySQL, PostgreSQL, MongoDB. Proficient in creating and using RESTful APIs and GraphQL. General: Proficient in version control with Git. Experienced in unit and integration testing. Skilled in cloud deployment and hosting with services like AWS, Google Cloud, Azure.',
  relevantCourses: [
    'PrestaShop',
    'Geslib Plus',
    'Basic SAP',
    'Microsoft Navision'
  ],
  additionalCertifications: [
    {
      title: 'Introduction to programming in Python I',
      institution: 'Coursera - UC Chile / 2023',
      description:
        'This course introduces you to the world of programming in the Python language. In a practical way, you will gradually learn from the basic treatment of variables to the programming of algorithms to build your own games. In addition, you will become familiar with the fundamental concepts for algorithm development and programming.'
    },
    {
      title:
        'Intermediate Level Certificate of Professionalism in Administrative Techniques Management',
      institution: 'Ecugestión / 2011',
      description:
        'The “Certificate of Professionalism in Middle Grade Administrative Techniques Management” is an 800-hour study program that prepares you to perform administrative tasks in companies and public administrations'
    }
  ],
  workshops: [
    {
      title: 'E-Commerce Web Development Workshop',
      institution: 'CCC-SEPE / 2023',
      description:
        'In this workshop, I have learned the following: Web Marketing: Online sales strategies, search engine visibility, information presentation, and cost-benefit analysis. Web Design: Effective development and use of websites, content organization, usability, and the benefits of good design. WWW: protocols and languages: Fundamentals of the World Wide Web, including protocols, markup languages, and web standards. Web Application Design and Development: Platform choice, programming languages, e-commerce elements, and technical aspects of digital video and audio.'
    }
  ]
}

const Studies = () => {
  const renderCourses = studies.relevantCourses
    .map((course) => `<li>${course}</li>`)
    .join('')
  const renderCertifications = studies.additionalCertifications
    .map(
      (cert) => `
    <li>
      <h4>${cert.title}</h4>
      <p>${cert.institution}</p>
      <p>${cert.description}</p>
    </li>
  `
    )
    .join('')
  const renderWorkshops = studies.workshops
    .map(
      (workshop) => `
    <li>
      <h4>${workshop.title}</h4>
      <p>${workshop.institution}</p>
      <p>${workshop.description}</p>
    </li>
  `
    )
    .join('')

  return `
    <section id="studies" class="studies">
      <h2>STUDIES</h2>
      <h3>${studies.degree}</h3>
      <p><strong>${studies.university}</strong></p>
      <p>${studies.description}</p>
      <h3>Relevant Courses</h3>
      <ul>${renderCourses}</ul>
      <h3>Additional Certifications</h3>
      <ul>${renderCertifications}</ul>
      <h3>Workshops</h3>
      <ul>${renderWorkshops}</ul>
    </section>
  `
}

export default Studies
