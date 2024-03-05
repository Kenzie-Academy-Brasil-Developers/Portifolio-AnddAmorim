import styles from "./styles.module.scss"
export const Footer = () => {
    return(
        <footer className="container">
            <div className={styles.divFooter}>
            <h3 className="title4">&copy; 2024 por Anderson Amorim</h3>
            <h3 className="title4">Todos os direitos reservados.</h3>
        </div>
        </footer>
        
    )
}