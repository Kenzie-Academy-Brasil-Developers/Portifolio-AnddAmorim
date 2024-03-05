import { VscGithub } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";
import styles from "./styles.module.scss";

export const Media = () => {
    return (
        <div className={styles.divBorder} id="midias">
            <div className="container">
                <div className={styles.divTitle}>
                     <h1>Midias Digitais</h1>
                </div>
               
            <div className={styles.divContent}>
                <h1 className="title1">E ai, gostou do que viu?</h1>
                <h2 className="title2">Vamos nos conectar nas redes sociais, conversar e desenvolver nossa criatividade juntos?</h2>
            </div>
            <div className={styles.divIcons}>
                <a href="https://github.com/AnddAmorim" target="_blank">
                    <VscGithub size={50} />
                    <p className="headline">GitHub</p>
                </a>

                <a href="https://www.linkedin.com/in/dev-anderson-amorim/" target="_blank">
                    <GrLinkedin size={50} />
                    <p className="headline">Linkedin</p>
                </a>

                <a href="https://t.me/AnddAmorim" target="_blank">
                    <SiTelegram size={50} />
                    <p className="headline">Telegram</p>
                </a>

            </div>
        </div>
        </div>
        
    )
}