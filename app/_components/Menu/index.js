"use client"

import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.css";

export default function Menu() {

    const [isOpen, setOpen] = useState(false);
    const open = () => setOpen(true);
    const close = () => setOpen(false);

    return (
        <nav>
            <button className={styles.btnMenu} title="メニューを開きます" onClick={open}>
                <Image
                    src="/bars.png" 
                    alt="" 
                    width={32}
                    height={32}
                />
            </button>
            <div className={cx(styles.menuPanel, {[styles.open]:isOpen})}>
                <button className={`${styles.btnMenu} ${styles.closeMenu}`} title="メニューを閉じます" onClick={close}>
                    <Image
                        src="/close.png"
                        alt=""
                        width={32}
                        height={32}
                    />
                </button>
                <ul className={styles.menuList}>
                    <li className={styles.menuList}><Link href="#about">About</Link></li>
                    <li className={styles.menuList}><Link href="#works">Works</Link></li>
                    <li className={styles.menuList}><Link href="#news">News</Link></li>
                    <li className={styles.menuList}><Link href="#contact">Contact</Link></li>
                    <li>
                        <Link
                            href="https://www.Instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><Image 
                                src="/insta.png" 
                                alt="Instagram" 
                                width={30}
                                height={30}
                                className={styles.icon}
                        /></Link>                
                    </li>
                </ul>
            </div>
        </nav>
    );
}