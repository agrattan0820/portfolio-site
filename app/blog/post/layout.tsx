import Header from "../../../components/header";

import styles from "../../../styles/post.module.scss";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.postContainer}>
      <Header logoLink="/?back=true" />
      <main className={styles.postMain}>
        <div className={styles.textContent}>{children}</div>
      </main>
    </div>
  );
}
