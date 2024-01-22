import styles from './Header.module.css'

const Header = () => {
    return <header className={styles.header}>
        <p className={styles.logo}>React crypto</p>
    </header>
}

export default Header