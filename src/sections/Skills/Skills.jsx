import styles from './SkillsStyles.module.css';
import { LuBraces, LuGlobe, LuDatabase, LuCloud, LuBrain, LuSettings } from 'react-icons/lu';
import {
  SiTypescript,
  SiPython,
  SiJavascript,
  SiGraphql,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiNestjs,
  SiFastify,
  SiFastapi,
  SiEslint,
  SiPrettier,
  SiJest,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiSequelize,
  SiRedis,
  SiAmazonwebservices,
  SiGooglecloud,
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiOllama,
  SiJupyter,
  SiDocker,
  SiJenkins,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Programming Languages & API',
    icon: LuBraces,
    skills: ['TypeScript', 'Python', 'JavaScript', 'Java', 'REST API', 'GraphQL'],
  },
  {
    title: 'Libraries & Frameworks',
    icon: LuGlobe,
    skills: ['React', 'Node.js', 'Next.js', 'Nest.js', 'Fastify', 'FastAPI', 'ESLint', 'Prettier', 'Jest'],
  },
  {
    title: 'Database',
    icon: LuDatabase,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'ChromaDB', 'Prisma', 'Sequelize', 'Redis'],
  },
  {
    title: 'Cloud',
    icon: LuCloud,
    skills: ['AWS', 'Azure', 'Google Cloud'],
  },
  {
    title: 'AI Frameworks & Tools',
    icon: LuBrain,
    skills: ['LangChain & LangGraph', 'OpenAI', 'Anthropic', 'Gemini', 'Ollama', 'Jupyter Notebook'],
  },
  {
    title: 'DevOps & Tools',
    icon: LuSettings,
    skills: ['Docker', 'Jenkins', 'Git', 'GitHub', 'Cursor', 'VS Code', 'Postman'],
  },
];

const skillIcons = {
  TypeScript: SiTypescript,
  Python: SiPython,
  JavaScript: SiJavascript,
  Java: LuBraces,
  'REST API': LuGlobe,
  GraphQL: SiGraphql,
  React: SiReact,
  'Node.js': SiNodedotjs,
  'Next.js': SiNextdotjs,
  'Nest.js': SiNestjs,
  Fastify: SiFastify,
  FastAPI: SiFastapi,
  ESLint: SiEslint,
  Prettier: SiPrettier,
  Jest: SiJest,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  ChromaDB: LuDatabase,
  Prisma: SiPrisma,
  Sequelize: SiSequelize,
  Redis: SiRedis,
  AWS: SiAmazonwebservices,
  Azure: LuCloud,
  'Google Cloud': SiGooglecloud,
  'LangChain & LangGraph': LuBrain,
  OpenAI: SiOpenai,
  Anthropic: SiAnthropic,
  Gemini: SiGooglegemini,
  Ollama: SiOllama,
  'Jupyter Notebook': SiJupyter,
  Docker: SiDocker,
  Jenkins: SiJenkins,
  Git: SiGit,
  GitHub: SiGithub,
  Cursor: LuBraces,
  'VS Code': LuSettings,
  Postman: SiPostman,
};

function Skills() {

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Technical Skills</h1>
      <p className={styles.subtitle}>Technologies and tools I work with</p>

      <div className={styles.grid}>
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article className={styles.card} key={group.title}>
              <h3 className={styles.cardTitle}>
                <Icon className={styles.cardIcon} aria-hidden="true" />
                <span>{group.title}</span>
              </h3>

              <ul className={styles.pillList}>
                {group.skills.map((skill) => {
                  const SkillIcon = skillIcons[skill] || LuBraces;

                  return (
                    <li className={styles.pill} key={skill}>
                      <SkillIcon className={styles.skillIcon} aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
