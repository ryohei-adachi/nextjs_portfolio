import styles from "./index.module.css"
import Link from "next/link"
import Menu from "@/app/_components/Menu";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContener}>
                <h1 className={styles.siteTitle}>
                     <Link href="#"> Y U R I K A  <span>H O S H I</span></Link>
                </h1>
            </div>
            <Menu/>
        </header>
    )
}