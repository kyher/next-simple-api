import { Book } from "@prisma/client";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../../styles/Form.module.css";
import { useRouter } from "next/router";
import { BackButton } from "../../../components/BackButton";
import buttonStyles from "../../../styles/Button.module.css";

const EditBook: NextPage = () => {
  const [book, setBook] = useState<Book>();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    if (!router.isReady) return;
    const { bookid } = router.query;
    fetch(`/api/book/${bookid}`)
      .then((res) => res.json())
      .then((book) => {
        setBook(book);
        setIsLoading(false);
      });
  }, [router.isReady]);

  if (isLoading) return <p>Loading...</p>;
  if (!book) return <p>No book data</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BackButton />
        <form
          className={styles.form}
          method="post"
          action={`/api/book/${book.id}/edit`}
        >
          <label>Title:</label>
          <input
            name="title"
            type="text"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
          <label>Author:</label>
          <input
            name="author"
            type="text"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
          <input className={buttonStyles.button} type="submit" value="Save" />
        </form>
      </main>
    </div>
  );
};

export default EditBook;
