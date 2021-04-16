import styles from "./Quote.module.css";

const Quote = ({ text, date, votes }) => {
  const df = new Intl.DateTimeFormat("da-DK", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date(date));

  return (
    <div className={styles.quote}>
      <small className={styles.date}>{df}</small>
      <pre className={styles.text}>{text}</pre>
      <ul className={styles.meta}>
        <li title={votes.wins} className={styles.icon}>
          👍
        </li>
        <li title={votes.losses} className={styles.icon}>
          👎
        </li>
        <li title={votes.score.toFixed(2)} className={styles.icon}>
          ❤️
        </li>
      </ul>
    </div>
  );
};

export default Quote;
