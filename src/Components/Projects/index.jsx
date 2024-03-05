import { projects } from "../../data/projects"
import { ProjectsCards } from "./ProjectsCards"
import styles from "../Projects/styles.module.scss"

export const Projects = () => {
    return(
        <ul >
            <div className="container" id="projetos">
                <div className={styles.divTitle}>
                    <h1>Projetos</h1>
                </div>
                <div className={styles.divProjects}>
                    {projects.map((project)=> {
                        return(
                            <ProjectsCards key={project.id} project={project} />
                        )
                    })}
                </div>
            </div>
        </ul>
    )
}