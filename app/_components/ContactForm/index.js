"use client";

import { createContactData } from "@/app/_actions/contact";
import { useActionState } from "react";
import styles from "./index.module.css";

const initialState = {
    status: "",
    message: "",
};

export default function ContactForm() {

    const [state, formAction] = useActionState(createContactData, initialState);
    
    console.log(state);
    return(
        <section id="contact" className={`${styles.wrapper} ${styles.contact}`}>
            <h2 className={styles.secTitle}>Contact</h2>
            <p>お問合せは以下のフォームからお願いします！</p>
            <form action={formAction} method="POST">
                <div className={styles.contactContent}>
                    { state.status === "error" && (
                        <p className={styles.error}>{state.message}</p>
                    )}
                    { state.status === "success" && (
                        <p className={styles.success}>
                            お問いわせいただき、ありがとうございます。
                        <br />
                            目安として、1週間以内に返答いたします。
                        </p> 
                    )}
                    <dl>
                        <dt><label htmlFor="name">名前</label></dt>
                        <dd><input type="text" id="name" name="name" /></dd>
                        <dt><label htmlFor="email">メールアドレス</label></dt>
                        <dd><input type="email" id="email" name="email" /></dd>
                        <dt><label htmlFor="message">内容</label></dt>
                        <dd><textarea id="message" cols="30" rows="10" name="message"></textarea></dd>
                    </dl>
                </div>
                <div className={styles.button}>
                    <input type="submit" value="送信"/>
                </div>
            </form>
        </section>
    );
}