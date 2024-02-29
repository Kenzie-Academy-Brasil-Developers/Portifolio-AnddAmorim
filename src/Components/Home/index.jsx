import { LiaHandPeaceSolid } from "react-icons/lia";
import { FaRegSmileWink } from "react-icons/fa";
import styles from "./styles.module.scss"
import "../../styles/index.scss"

export const Home = () => {
    return(
        <>
        <section>
            <div className="container">
                <div /*className={styles.flexBox}*/>
                    <div>
                        <p className="headline">Hello World <LiaHandPeaceSolid /></p>
                        <h1>Eu sou Anderson Amorim </h1>
                        <p>Desenvolvedor FullStack, venha conhecer meus projetos e tecnologias <FaRegSmileWink /> </p>
                        <button>Projetos</button>
                    </div>
                    <div>
                        <img src="../../assets/react.svg" alt="react" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}