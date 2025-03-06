import Image from "next/image";
import styles from "./index.module.css";

const workImages = [
    {
        id: 1,
        url: "/works1.jpg",
        alt: "works1"
    },
    {
        id: 2,
        url: "/works2.jpg",
        alt: "works2"
    },
    {
        id: 3,
        url: "/works3.jpg",
        alt: "works3"
    },
    {
        id: 4,
        url: "/works4.jpg",
        alt: "works4"
    },
    {
        id: 5,
        url: "/works5.jpg",
        alt: "works5"
    },
    {
        id: 6,
        url: "/works6.jpg",
        alt: "works6"
    }
];

export default function WorkList(){
    return(
        <section id="works" className={`${styles.wrapper} ${styles.works}`}>
            <h2 className={styles.secTitle}>Works</h2>
            <ul>
                {workImages.map((work)=>(
                    <li key={work.id} >
                        <Image
                            src={work.url}
                            alt={work.alt}
                            width={300}
                            height={200}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}