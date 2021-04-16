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
  // export async function getStaticProps() {
  // const res = await fetch("http://0.0.0.0:3000/api/quotes");
  // const { data: quotes } = await res.json();
  const quotes = await getQuotes({});

  return {
    props: {
      quotes: quotes,
    },
    // revalidate: 30,
  };
}
