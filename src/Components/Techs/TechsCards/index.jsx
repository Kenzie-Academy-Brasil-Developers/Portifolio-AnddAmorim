import React from "react"
import styles from "./style.module.scss"
export const TechsCards = ({tech}) => {
    return(
        <li>
            <div>
                <p className={styles.img}>
                    {tech.tech.map((techImg, i)=> (
                        <React.Fragment key={i}> 
                        {techImg}
                        </React.Fragment>
                    ))}
                <p className="headline">{tech.title}</p>
                </p>
            </div>
        </li>
    )
}