import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>Hello there</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio
          pariatur officia sunt unde tempore deserunt asperiores laborum cum!
          Amet culpa nulla fugit voluptatem laudantium numquam deserunt
          aspernatur? Quo, tempore.
        </p>
      </div>
    </div>
  );
}
