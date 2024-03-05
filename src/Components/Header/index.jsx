import styles from "./styles.module.scss"
import "../../styles/index.scss";
import { useState } from "react";


export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
            <header>
                <div className={styles.divName}>
                    <h1 className="title3">Anderson Amorim</h1>
                </div>

                <div className={`${styles.mobileMenuToggle} ${isMobileMenuOpen && styles.open}`} onClick={toggleMobileMenu}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>

                <div className={`${styles.divAnchorsMobile} ${isMobileMenuOpen ? styles.showMobileMenu : ""}`}>
                    <a className="headline" href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a className="headline" href="#projetos" onClick={() => setIsMobileMenuOpen(false)}>Projetos</a>
                    <a className="headline" href="#techs" onClick={() => setIsMobileMenuOpen(false)}>Tecnologias</a>
                    <a className="headline" href="#midias" onClick={() => setIsMobileMenuOpen(false)}>Midias Digitais</a>
                </div>

                <div className={styles.divAnchors}>
                    <a className="headline" href="#home">Home</a>
                    <a className="headline" href="#projetos">Projetos</a>
                    <a className="headline" href="#techs">Tecnologias</a>
                    <a className="headline" href="#midias">Midias Digitais</a>
                </div>
            </header>
        </>
    )
}