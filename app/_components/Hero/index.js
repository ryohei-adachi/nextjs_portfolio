import Image from "next/image";
import styles from "./index.module.css";

export default function Hero() {
    return (
        <section id="main" className={styles.container}>
            <picture>
                <source media="(max-width: 600px)" srcSet="/img-sp.jpg" />
                <Image 
                    src="/himawari2.jpg" 
                    alt="" 
                    className={styles.bgimg}
                    width={4000} //画像の解像度を最適化にする
                    height={1200} //画像の解像度を最適化にする
                />
            </picture>
        </section>
    );
}