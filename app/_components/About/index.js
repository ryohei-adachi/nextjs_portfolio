import Image from "next/image";
import styles from "./index.module.css";

export default function About() {
    return (
        <section id="about" className={`${styles.wrapper} ${styles.about}`}>
            <h2 className={styles.secTitle}>About</h2>
            <div className={styles.aboutImg}>
                <Image 
                    src="/yurika.jpg" 
                    alt="" 
                    width={220}
                    height={220}
                />
            </div>

            <div className={styles.aboutContent}>
                <div className={styles.aboutItem}>
                    <p className={styles.aboutTitle}>名前</p>
                    <p>星 由利香</p>
                </div>
               <div className={styles.boutItem}>
                    <p className={styles.aboutTitle}>経歴</p>
                    <p>HTML・CSS・JavaScript</p>
                </div>
                <div className={styles.aboutItem}>
                    <p className={styles.aboutTitle}>現在</p>
                    <p>2023年11月からプログラミングの</p>
                    <p>オンラインスクールに入会し勉強しております。</p>
                    <p>現在学んでいる言語はJavaScriptです。</p>
                </div>
                <div className={styles.aboutItem}>
                    <p className={styles.aboutTitle}>趣味</p>
                    <p>カフェ巡り/映画鑑賞</p>
                </div>
            </div>
        </section>
    );
} 