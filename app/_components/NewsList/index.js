import styles from "./index.module.css";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";
import { formatDate } from "@/app/_libs/utils";

export default async function NewsList() {
    const news = await getNewsList(
        NEWS_LIST_LIMIT,
    );
    const newsContents = news.contents || []; // news.contentsがnullやundefinedの場合に、空配列を設定

    return (
        <section id="news" className={`${styles.wrapper} ${styles.news}`}>
            <h2 className={styles.secTitle}>News</h2>
            <dl>
            {newsContents.map((article)=>(
                <div key={article.id} className={styles.articleItem}>
                    <dt>{formatDate(article.date)}</dt>
                    <dd>{article.title}</dd>
                </div>
            ))}
            </dl>
    </section>
    );
}