import styles from './ExperienceStyles.module.css';
import { FaBriefcase, FaCode } from 'react-icons/fa';

function Experience() {
  const experienceData = [
    {
      id: 1,
      position: 'Senior Software Engineer',
      company: 'WireApps',
      period: 'June 2024 - Present',
      location: 'Bowdon, Altrincham, England',
      type: ['Remote', 'Present'],
      icon: FaBriefcase,
      description: [
        'Leading development of the Ferry AI service, automating customer support workflows and internal operational processes using AI-driven solutions.',
        'Designing, reviewing, and validating AI-based software architectures for FinTech and Quantity Surveying (QS) domains, ensuring scalability, security, and domain alignment.',
        'Managing and mentoring participants in the WireApps AI Internship Program, providing technical guidance, code reviews, and architectural direction.',
        'Developing and maintaining backend API services for the Ferry daily payout platform, with a focus on reliability, performance, and data integrity.',
        'Contributed to the development of the Ferry mobile application using React Native, collaborating across frontend and backend teams.',
        'Proactively identifying, troubleshooting, and resolving complex technical issues and production bugs across multiple services.',
        'Implemented targeted performance optimization strategies, reducing CPU and memory utilization from approximately 90% to under 20%, significantly improving system stability and operational efficiency.',
      ],
      technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'TypeScript', 'Python', 'FastAPI', 'Fastify', 'Docker', 'Git', 'GitHub'],
    },
    // {
    //   id: 2,
    //   position: 'Full Stack Developer',
    //   company: 'Tech Innovations Ltd',
    //   period: 'Jan 2023 - May 2024',
    //   location: 'Remote',
    //   type: ['Remote', 'Full-time'],
    //   icon: FaCode,
    //   description: [
    //     'Developed and deployed full-stack web applications using React and Node.js, serving thousands of users worldwide.',
    //     'Optimized database queries and implemented caching strategies, reducing API response time by 60%.',
    //     'Collaborated with UX/UI designers to implement responsive and accessible user interfaces.',
    //     'Conducted code reviews and provided mentorship to junior developers on best practices and design patterns.',
    //     'Implemented comprehensive unit and integration tests, achieving 85% code coverage.',
    //     'Managed CI/CD pipelines using GitHub Actions and Docker, ensuring smooth deployment workflows.',
    //   ],
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'Docker', 'GitHub Actions', 'Jest', 'Webpack'],
    // },
  ];

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">PROFESSIONAL EXPERIENCE</h1>
      <p className={styles.subtitle}>My journey in software development</p>

      <div className={styles.experienceList}>
        {experienceData.map((exp) => {
          const Icon = exp.icon;
          return (
            <div key={exp.id} className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                  <Icon className={styles.companyIcon} />
                  <div className={styles.titleSection}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                </div>
                <div className={styles.headerRight}>
                  <div className={styles.metadata}>
                    <p className={styles.period}>📅 {exp.period}</p>
                    <p className={styles.location}>📍 {exp.location}</p>
                  </div>
                  <div className={styles.badges}>
                    {exp.type.map((t, idx) => (
                      <span key={idx} className={styles.badge}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.cardBody}>
                <ul className={styles.description}>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.technologies}>
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
