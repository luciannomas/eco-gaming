"use client";
import { Icon, Image } from "semantic-ui-react"; 
import Link from "next/link";
import styles from "./JoinLayout.module.scss";

export function JoinLayout(props) {
  const { children } = props;
  

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <img src="/images/logo.png" alt="Gaming" /> {/* ver deprecacion de Image */}
        </Link>

        <Link href="/">
          <Icon name="close" />
        </Link>
      </div>

      <div className={styles.blockLeft}>{children}</div>

      <div className={styles.blockRight} />
    </div>
  );
}