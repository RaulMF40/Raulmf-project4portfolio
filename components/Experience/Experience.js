import './Experience.css'

const experiences = [
  {
    title: 'Experience 1',
    company: 'Company A',
    duration: '2024 - Presents',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Taciti velit enim torquent pharetra eget porttitor suspendisse. Dignissim lorem pulvinar nisi curae primis odio mollis. Primis ad quam nam ultricies euismod ornare dui.'
  },
  {
    title: 'Experience 2',
    company: 'Company B',
    duration: '2022 - 2023',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Taciti velit enim torquent pharetra eget porttitor suspendisse. Dignissim lorem pulvinar nisi curae primis odio mollis. Primis ad quam nam ultricies euismod ornare dui.'
  },
  {
    title: 'Experience 3',
    company: 'Company C',
    duration: '2021 - 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Taciti velit enim torquent pharetra eget porttitor suspendisse. Dignissim lorem pulvinar nisi curae primis odio mollis. Primis ad quam nam ultricies euismod ornare dui.'
  }
]

const Experience = () => {
  return `
    <section id="experience" class="experience">
      <h2>EXPERIENCE</h2>
      ${experiences
        .map(
          (exp) => `
        <div class="experience-item">
          <h3>${exp.title}</h3>
          <p><strong>Compañía:</strong> ${exp.company}</p>
          <p><strong>Duración:</strong> ${exp.duration}</p>
          <p>${exp.description}</p>
        </div>
      `
        )
        .join('')}
    </section>
  `
}

export default Experience
