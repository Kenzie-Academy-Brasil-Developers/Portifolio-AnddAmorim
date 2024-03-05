import { Link } from "react-router-dom"
import { GiAirplaneDeparture } from "react-icons/gi";
import { VscGithub } from "react-icons/vsc";
import styles from "./styles.module.scss"


export const ProjectsCards = ({ project }) => {
    return (
        <li>
            <div className={styles.divProjects}>
                <div className={styles.divTitle}> 
                    <h2 className="title2">{project.name}</h2>
                    <p className="headline">
                        {project.stacks.map((stack, i) => (
                            <span key={stack.id}>
                                {stack.name}
                                {i !== project.stacks.length -1 && " | "}
                                </span>
                        ))}
                    </p>
                </div>
                <p>{project.description}</p>
                <div className={styles.divIcons}>
                    <Link to={project.repo} title="Ver Repositório" target="_blank">
                    <VscGithub size={25}/>
                    </Link>
                    <Link to={project.deploy} title="Ver Aplicação" target="_blank">
                        <GiAirplaneDeparture size={29} />
                    </Link>
                </div>

            </div>
        </li>
    )
}