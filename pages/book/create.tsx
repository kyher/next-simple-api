import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Form.module.css";
import buttonStyles from "../../styles/Button.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form method="post" action="/api/book/create" className={styles.form}>
          <label>Title:</label>
          <input name="title" type="text" />
          <label>Author:</label>
          <input name="author" type="text" />
          <input className={buttonStyles.button} type="submit" value="Save" />
        </form>
      </main>
    </div>
  );
};

export default Home;