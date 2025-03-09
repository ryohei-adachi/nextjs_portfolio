import styles from "./index.module.css";

const news = [
    {
        id: 1,
        date: "2023/11/01",
        title: "プログラミングの勉強始めました"
    },
    {
        id: 2,
        date: "2023/12/05",
        title: "html/CSSの勉強始めました"
    },
    {
        id: 3,
        date: "2023/12/05",
        title: "本サイトをリリースしました"
    },
    {
        id: 4,
        date: "2023/12/25",
        title: "本サイトを一部修正しました"
    },
    {
        id: 5,
        date: "2025/01/05",
        title: "プロフィール画像を追加しました"
    }
];

export default function NewsList() {
    return (
        <section id="news" className={`${styles.wrapper} ${styles.news}`}>
            <h2 className={styles.secTitle}>News</h2>
            <dl>
            {news.map((article)=>(
                <div key={article.id} className={styles.articleItem}>
                    <dt>{article.date}</dt>
                    <dd>{article.title}</dd>
                </div>
            ))}
            </dl>
    </section>
    );
}