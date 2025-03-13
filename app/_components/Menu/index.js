import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";


export default function Menu() {
    return (
        <nav>
            <button id="js-open-menu" className={`${styles.btnMenu} ${styles.openMenu}`} title="メニューを開きます">
                <Image
                    src="/bars.png" 
                    alt="" 
                    width={32}
                    height={32}
                />
            </button>
            <div id="menu-panel" className={styles.menuPanel}>
                <button id="js-close-menu" className={`${styles.btnMenu} ${styles.closeMenu}`} title="メニューを閉じます">
                    <Image
                        src="/close"
                        alt=""
                        width={32}
                        height={32}
                    />
                </button>
                <ul className={styles.menuList}>
                    <li className={styles.menuList}><Link href="#about">About</Link></li>
                    <li className={styles.menuList}><Link href="#works">Works</Link></li>
                    <li className={styles.menuList}><Link href="#news">News</Link></li>
                    <li className={styles.menuList}><Link href="#contact">Contact</Link></li>
                    <li>
                       <Link
                            href="https://www.Instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><img src="./img/insta.png" alt="Instagram" className={styles.icon}
                        /></Link>                
                    </li>
                </ul>
            </div>
        </nav>
    );
}