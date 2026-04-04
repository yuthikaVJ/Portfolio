import styles from './EducationStyles.module.css';
import { SiGooglecloud, SiReact } from 'react-icons/si';

function Education() {
  const educationData = [
    {
      id: 1,
      degree: 'Bsc(hons) information technology specializing in software engineering',
      institution: 'SLIIT',
      period: ' July 2024 - Present',
      grade: '3.67 CGPA',
      description:
        'I have completed my Master\'s degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.',
      icon: SiGooglecloud,
    },
    {
      id: 2,
      degree: 'Advance Level - A/L/Ordinary Level - O/L',
      institution: 'Bandaranayake College, Gampaha',
      period: '2013 - 2021',
      grade: '73.2%',
      description:
        'I completed my Bachelor\'s degree in Computer Science (B.Sc.) from ISA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to Web Development and Software Engineering, I was exposed to a comprehensive curriculum. These foundational years were crucial in my academic journey and helped me develop a strong passion for technology and problem-solving.',
      icon: SiReact,
    },
  ];

  return (
    <section id="education" className={styles.container}>
      <h1 className="sectionTitle">EDUCATION</h1>
      <p className={styles.subtitle}>
        My education has been a journey of learning and development. Here are the details of my academic background
      </p>

      <div className={styles.timeline}>
        {educationData.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <div key={edu.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.timelineContent}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <Icon className={styles.cardIcon} />
                    <div className={styles.cardTitleSection}>
                      <h3 className={styles.degree}>{edu.degree}</h3>
                      <p className={styles.institution}>{edu.institution}</p>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <p className={styles.period}>{edu.period}</p>
                    <p className={styles.grade}>Grade: {edu.grade}</p>
                  </div>
                </div>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
