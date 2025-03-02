import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.headerContener}>
                <h1 className={styles.siteTitle}>
                <Link href="#"> Y U R I K A  <span>H O S H I</span></Link>
                </h1>
            </div>
        </header>
        <div id="main" className={styles.main}>
            <picture>
                <source media="(max-width: 600px)" srcSet="/img-sp.jpg" />
                <img src="/himawari2.jpg" alt="" />
            </picture>
        </div>
        <section id="about" className={`${styles.wrapper} ${styles.about}`}>
            <h2 className={styles.secTitle}>About</h2>

            <div className={styles.gridCenter}>
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
        <section id="works" className={`${styles.wrapper} ${styles.works}`}>
            <h2 className={styles.secTitle}>Works</h2>
            <ul>
                <li><Image 
                        src="/works1.jpg" 
                        alt="works1" 
                        width={300}
                        height={200}
                    />
                </li>
                <li>
                    <Image 
                        src="/works2.jpg" 
                        alt="works2" 
                        width={300}
                        height={200}
                    />
                </li>
                <li>
                    <Image 
                        src="/works3.jpg" 
                        alt="works3" 
                        width={300}
                        height={200}
                    />
                </li>
                <li>
                    <Image 
                        src="/works4.jpg" 
                        alt="works4" 
                        width={300}
                        height={200}
                    />
                </li>
                <li>
                    <Image 
                        src="/works5.jpg" 
                        alt="works5" 
                        width={300}
                        height={200}
                    />
                </li>
                <li>
                    <Image 
                        src="/works6.jpg" 
                        alt="works6" 
                        width={300}
                        height={200}
                    />
                </li>
            </ul>
        </section>
        <section id="news" className={`${styles.wrapper} ${styles.news}`}>
            <h2 className={styles.secTitle}>News</h2>
            <dl>
                <dt>2023/11/01</dt>
                <dd>プログラミングの勉強始めました</dd>
                <dt>2023/12/05</dt>
                <dd>html/CSSの勉強始めました</dd>
                <dt>2023/12/05</dt>
                <dd>本サイトをリリースしました</dd>
                <dt>2023/12/25</dt>
                <dd>本サイトを一部修正しました</dd>
                <dt>2025/01/05</dt>
                <dd>プロフィール画像を追加しました。</dd>
            </dl>
        </section>
        <section id="contact" className={`${styles.wrapper} ${styles.contact}`}>
            <h2 className={styles.secTitle}>Contact</h2>
            <p>お問合せは以下のフォームからお願いします！</p>
            <form action="#" method="post">
                <div className={styles.contactContent}>
                    <dl>
                        <dt><label htmlFor="name">名前</label></dt>
                        <dd><input type="text" id="name" /></dd>
                        <dt><label htmlFor="email">メールアドレス</label></dt>
                        <dd><input type="email" id="email" /></dd>
                        <dt><label htmlFor="content">内容</label></dt>
                        <dd><textarea id="content" cols="30" rows="10"></textarea></dd>
                    </dl>
                </div>
                <div className={styles.button}><input type="submit" value="送信"/></div>
            </form>
        </section>

        <footer id="footer" className={styles.footer}>
            <p>Copyright (C) All Rights Reserved.</p>
        </footer>
    </>

  );
}
