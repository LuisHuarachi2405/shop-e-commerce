import styles from './header.module.scss'

function Header() {
  return ( 
    <div className={styles.header}>
      <div className={styles.headerSections}>
        <div className={styles.headerSectionLeft}>
          <nav className={styles.headerNav}>
            <ul className={styles.headerList}>
              <li className={styles.headerListItem}>
                <a className={styles.headerLink} href="/">
                  Home
                </a>
              </li>
              <li className={styles.headerListItem}>
                <a className={styles.headerLink} href="/">
                  Contact
                </a>
              </li>
              <li className={styles.headerListItem}>
                <a className={styles.headerLink} href="/">
                  Shop
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.headerSectionCenter}>

        </div>
        <div className={styles.headerSectionRight}>

        </div>
      </div>
    </div>
  );
}

export default Header;