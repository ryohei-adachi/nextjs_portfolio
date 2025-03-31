import styles from "./index.module.css";
import { getAllNewsList } from "@/app/_libs/microcms";
import { formatDate } from "@/app/_libs/utils";

export default async function NewsList() {
    const news = await getAllNewsList();
    return (
        <section id="news" className={`${styles.wrapper} ${styles.news}`}>
            <h2 className={styles.secTitle}>News</h2>
            <dl>
            {news.map((article)=>(
                <div key={article.id} className={styles.articleItem}>
                    <dt>{formatDate(article.date)}</dt>
                    <dd>{article.title}</dd>
                </div>
            ))}
            </dl>
    </section>
    );
}