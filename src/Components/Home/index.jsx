import { LiaHandPeaceSolid } from "react-icons/lia";
import Luffy from "../../assets/luffy.png"
import styles from "./styles.module.scss"
import "../../styles/index.scss"


export const Home = () => {
    return(
        <>
        <section id="home">
            <div className="container">
                <div className={styles.flexBox} >
                    <div className={styles.divMySelf}>
                        <p className={`${styles.helloWorld} title4`} >Hello World <LiaHandPeaceSolid className={styles.handStyle} size={20} /></p>
                        <h1 className={`${styles} title1`}>Eu sou Anderson Amorim </h1>
                        <p className={`${styles.parag} title3`}>moro em São Paulo e através da Kenzie Academy me formei em Desenvolvimento Web FullStack, venha conhecer meus projetos e tecnologias.</p>
                    </div>
                    <div className={styles.divImg}>
                        <img src={Luffy} alt="Luffy" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}