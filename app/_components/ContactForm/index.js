import styles from "./index.module.css";

export default function ContactForm() {
    return(
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
                <div className={styles.button}>
                    <input type="submit" value="送信"/>
                </div>
        </form>
    </section>
    );
}