import './AboutMe.css'

const aboutMeInfo = {
  name: 'Raúl Moya Fuentes',
  address: 'Málaga, Spain',
  email: 'raulmf.30@gmail.com',
  avatar: './assets/yo.jpg',
  aboutMe:
    'With a solid background in administration and current experience in the comic book and merchandising world, my curiosity for digital technology led me to embark on an exciting professional transition. At the end of 2023, I began my training as a full stack developer at The Power MBA, driven by my interest in web development and emerging technologies such as blockchain. This journey has been a thrilling challenge, full of ups and downs, but each new discovery in the field of digital technology and learning concepts previously unknown to me has reinforced my decision to professionally reinvent myself in this dynamic sector. I am currently expanding my knowledge and skills in the development of complete web applications, covering both front-end and back-end. My training at The Power MBA is equipping me with the necessary tools to create innovative and efficient technological solutions. I am familiar with a variety of technologies and programming languages, including HTML, CSS, JavaScript, React, Angular, Python, etc.., and I continue to explore other technologies and frameworks that complement my profile as a full stack developer.'
}

const AboutMe = () => {
  return `
  <section id="aboutme" class="aboutme">    
      
      <div class="about-me-content">
        <div class="about-me-info">
          <img src="${aboutMeInfo.avatar}" alt="Avatar">
          <h3>${aboutMeInfo.name}</h3>
          <p><strong>Dirección:</strong> ${aboutMeInfo.address}</p>
          <p><strong>Email:</strong> <a href="mailto:${aboutMeInfo.email}">${aboutMeInfo.email}</a></p>
        </div>
        <div class="about-me-bio">
          <h2>Full Stack Developer Student</h2>
          <p>${aboutMeInfo.aboutMe}</p>
        </div>
      </div>
    </section>
  `
}

export default AboutMe
