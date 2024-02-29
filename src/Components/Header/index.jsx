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

                {/* Mobile Menu botão hamburger*/}
                <div className={`${styles.mobileMenuToggle} ${isMobileMenuOpen && styles.open}`} onClick={toggleMobileMenu}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>

                {/* Mobile menu */}
                <div className={`${styles.divAnchorsMobile} ${isMobileMenuOpen ? styles.showMobileMenu : ""}`}>
                    <a className="headline" href="" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a className="headline" href="" onClick={() => setIsMobileMenuOpen(false)}>Projetos</a>
                    <a className="headline" href="" onClick={() => setIsMobileMenuOpen(false)}>Midias Digitais</a>
                </div>

                {/* Desktop menu */}
                <div className={styles.divAnchors}>
                    <a className="headline" href="">Home</a>
                    <a className="headline" href="">Projetos</a>
                    <a className="headline" href="">Midias Digitais</a>
                </div>

            </header>
        </>
    )
}