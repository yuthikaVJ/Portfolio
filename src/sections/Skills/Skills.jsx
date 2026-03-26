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
  SiSpringboot,
  SiAmazonrds,
  SiAnsible,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiAmazoncloudwatch,
  SiVault,
  SiGithubactions,
  SiArgo,
  SiKubernetes,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Programming Languages & API',
    icon: LuBraces,
    skills: ['Python', 'JavaScript', 'Java'],
  },
  {
    title: 'Libraries & Frameworks',
    icon: LuGlobe,
    skills: ['React', 'Node.js','Sprinboot',  'ESLint'],
  },
  {
    title: 'Database',
    icon: LuDatabase,
    skills: [ 'MySQL', 'MongoDB','AWS RDS'],
  },
  {
    title: 'Cloud',
    icon: LuCloud,
    skills: ['AWS'],
  },
  // {
  //   title: 'AI Frameworks & Tools',
  //   icon: LuBrain,
  //   skills: ['LangChain & LangGraph', 'OpenAI', 'Anthropic', 'Gemini', 'Ollama', 'Jupyter Notebook'],
  // },
  // {
  //   title: 'DevOps & Tools',
  //   icon: LuSettings,
  //   skills: ['Docker', 'Jenkins', 'Git', 'GitHub', 'Cursor', 'VS Code', 'Postman'],
  // },
   {
    title: 'Version Control ',
    icon: LuSettings,
    skills: ['Git', 'GitHub'],
  },
   {
    title: 'Configuration Management ',
    icon: LuSettings,
    skills: ['Ansible'],
  },
    {
    title: 'Infrastructure as Code',
    icon: LuSettings,
    skills: ['Terraform'],
  },
    {
    title: 'observability & Monitoring',
    icon: LuSettings,
    skills: ['prometheus', 'Grafana','AWS CloudWatch'],
  },
     {
    title: 'Secret Management',
    icon: LuSettings,
    skills: ['HashiCorp Vault','AWS Secrets Manager'],
  },
  {
    title: 'Ci/CD',
    icon: LuSettings,
    skills: [, 'Jenkins','GitHub Actions','Argo CD'],
  },
   {
    title: 'Containerization  Orchestration',
    icon: LuSettings,
    skills: ['Kubernetes'],
  },
   {
    title: 'Containerization ',
    icon: LuSettings,
    skills: ['Docker'],
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
  Sprinboot: SiSpringboot,
  'Spring Boot': SiSpringboot,
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
  'AWS RDS': SiAmazonrds,
  Ansible: SiAnsible,
  Terraform: SiTerraform,
  prometheus: SiPrometheus,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  'AWS CloudWatch': SiAmazoncloudwatch,
  'HashiCorp Vault': SiVault,
  'AWS Secrets Manager': SiAmazonwebservices,
  'GitHub Actions': SiGithubactions,
  'Argo CD': SiArgo,
  Kubernetes: SiKubernetes,
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

const skillIconColors = {
  TypeScript: '#3178c6',
  Python: '#3776ab',
  JavaScript: '#f7df1e',
  Java: '#f89820',
  'REST API': '#0ea5e9',
  GraphQL: '#e10098',
  React: '#61dafb',
  'Node.js': '#339933',
  'Next.js': '#111111',
  'Nest.js': '#e0234e',
  Fastify: '#000000',
  FastAPI: '#009688',
  ESLint: '#4b32c3',
  Prettier: '#f7b93e',
  Jest: '#c21325',
  PostgreSQL: '#4169e1',
  MySQL: '#4479a1',
  MongoDB: '#47a248',
  ChromaDB: '#8b5cf6',
  Prisma: '#2d3748',
  Sequelize: '#52b0e7',
  Redis: '#dc382d',
  AWS: '#ff9900',
  'AWS RDS': '#ff9900',
  Ansible: '#ee0000',
  Terraform: '#7b42bc',
  prometheus: '#e6522c',
  Prometheus: '#e6522c',
  Grafana: '#f46800',
  'AWS CloudWatch': '#ff9900',
  'HashiCorp Vault': '#000000',
  'AWS Secrets Manager': '#ff9900',
  'GitHub Actions': '#2088ff',
  'Argo CD': '#ef7b4d',
  Kubernetes: '#326ce5',
  Azure: '#0078d4',
  'Google Cloud': '#4285f4',
  'LangChain & LangGraph': '#10b981',
  OpenAI: '#10a37f',
  Anthropic: '#d97706',
  Gemini: '#1a73e8',
  Ollama: '#0f172a',
  'Jupyter Notebook': '#f37626',
  Docker: '#2496ed',
  Jenkins: '#d24939',
  Git: '#f05032',
  GitHub: '#181717',
  Cursor: '#2563eb',
  'VS Code': '#007acc',
  Postman: '#ff6c37',
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
                  const iconColor = skillIconColors[skill] || 'var(--text-color)';

                  return (
                    <li className={styles.pill} key={skill}>
                      <SkillIcon className={styles.skillIcon} aria-hidden="true" style={{ color: iconColor }} />
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
