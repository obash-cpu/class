import styles from './footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    const copyrightYear = 2024;
    return (
        <div className={styles.footer}>
            <footer>
            <p>&copy; {copyrightYear === currentYear ? currentYear : `${copyrightYear}-${currentYear}`} Absalom Obala</p>
            </footer>
        </div>
    );
}
export default Footer;