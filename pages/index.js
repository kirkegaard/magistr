import Head from "next/head";
import { getQuotes } from "../lib/data/quotes";
import { Quotes, Quote } from "../components/Quotes";
import styles from "../styles/Home.module.css";

export default function Home({ quotes = [] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hader Georgehale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Magistr</h1>
        <Quotes>
          {quotes.map((quote) => (
            <Quote key={quote.id} {...quote} />
          ))}
        </Quotes>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { order, orderBy, limit, offset } = context.query;
  const quotes = await getQuotes({ orderBy, order, limit, offset });

  return {
    props: {
      quotes: quotes,
    },
    // revalidate: 30,
  };
}
