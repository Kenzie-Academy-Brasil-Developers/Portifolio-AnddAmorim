import { techs } from "../../data/techs.jsx"
import { TechsCards } from "./TechsCards"
import styles from "../Techs/styles.module.scss"

export const Technologies = () => {
    return (
        <ul id="techs">
            <div className="container">
                <div className={styles.divTitle}>
                    <h1 title="">Tecnologias</h1>
                </div>
                <div className={styles.divTechs}>
                    {techs.map((tech) => {
                        return (
                            <TechsCards key={tech.id} tech={tech} />
                        )
                    })}
                </div>
            </div>
        </ul>
    )
}