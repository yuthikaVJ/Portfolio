import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import burger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import  fitlift from '../../assets/fitlift.png';
import github from '../../assets/github-logo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return (
        <section id= "projects" className={styles.container}>
            <h1 className='sectionTitle'> Projects</h1> 
            <div className = {styles.projectsContainer}>
                <ProjectCard src={viberr}
                link = 'https://www.bestlankaengineering.com/'
                h3 = 'Best-Lanka'
                p = 'Web Site'
                />
                <ProjectCard src={burger}
                link = 'https://sumanaconstruction.com/'
                h3 = 'Sumana Construction'
                p = 'Hamburger Resturant'
                />
                <ProjectCard src={hipsster}
                link = 'https://happybabybooks.lk/'
                h3 = ' Happy Baby Books'
                p = 'Glasses Shop'
                />
                <ProjectCard src={fitlift}
                link = 'https://github.com/Realsteelxx'
                h3 = ' FitLift'
                p = 'Fitness APP'
                />
                <ProjectCard src={github}
                link = 'https://github.com/Realsteelxx'
                h3 = ' GitHub'
                p = 'All My Projects'
                />
               

            </div>
        </section>
  );
}

export default Projects