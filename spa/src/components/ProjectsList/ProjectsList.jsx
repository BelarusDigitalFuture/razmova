import styles from "./ProjectsList.module.css";
import { Project } from "./Project";

const ProjectsList = ({ title, projects, icon }) => {
  console.log(projects);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {title}
        <img alt="icon" src={icon} />
      </div>
      <div className={styles.projects}>
        {projects.map((item) => (
          <Project item={item} key={item.title + item.id} />
        ))}
      </div>
    </div>
  );
};

export { ProjectsList };
