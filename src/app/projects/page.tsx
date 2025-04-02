import styles from './ProjectsPage.module.css'; 

export default function ProjectsPage() {
    return (
      <div className={styles.projectsContainer}>
        {/* Title Section */}
        <h1 className={styles.projectTitle}>MY PROJECTS</h1>
  
        {/* Project Cards Section */}
        <div className={styles.projectCardContainer}>
          {/* Project Card 1 */}
          <div className={styles.projectCard}>
          <img src="/cad1.jpg" alt="Project 1" />
            <h2>Project 1</h2>
            <p>Short description of the project goes here. Details about the project.</p>
          </div>
  
          {/* Project Card 2 */}
          <div className={styles.projectCard}>
          <img src="/cad2.jpg" alt="Project 1" />
            <h2>Project 2</h2>
            <p>Short description of another project. More details will be provided here.</p>
          </div>
  
          {/* Project Card 3 */}
          <div className={styles.projectCard}>
          <img src="/cad3.jpg" alt="Project 1" />
            <h2>Project 3</h2>
            <p>Overview of project 3. A few lines describing the project and its features.</p>
          </div>

          <div className={styles.projectCard}>
          <img src="/cad4.jpg" alt="Project 1" />
            <h2>Project 4</h2>
            <p>Overview of project 3. A few lines describing the project and its features.</p>
          </div>

          <div className={styles.projectCard}>
          <img src="/cad5.jpg" alt="Project 1" />
            <h2>Project 5</h2>
            <p>Overview of project 3. A few lines describing the project and its features.</p>
          </div>

          <div className={styles.projectCard}>
          <img src="/cad6.jpg" alt="Project 1" />
            <h2>Project 6</h2>
            <p>Overview of project 3. A few lines describing the project and its features.</p>
          </div>
        </div>
      </div>
    );
  }
  