import { getConnection } from "../db";

const Model = (row) => ({
  id: row.id,
  text: row.content,
  date: new Date(row.dateadded).toJSON(),
  votes: {
    wins: row.won,
    losses: row.lost,
    total: row.total,
    elo: row.elo,
    score: row.score,
  },
});

const getQuote = async (id) => {
  const conn = await getConnection();
  const [rows, fields] = await conn.query(
    `
    SELECT
      *
    FROM
      quote
    LEFT JOIN
      quote_vote
    ON
      quote.id = quote_vote.quote_id
    WHERE id = ?`,
    [id]
  );
  return rows.map((row) => Model(row));
};

const getQuotes = async ({ orderBy = "id", order = "DESC", limit = 100, offset = 0 }) => {
  const conn = await getConnection();
  const [rows, fields] = await conn.query(
    `
    SELECT
      *
    FROM
      quote
    LEFT JOIN
      quote_vote
    ON
      quote.id = quote_vote.quote_id
    ORDER BY ${orderBy} ${order}
    LIMIT ${offset}, ${limit}
    `
  );
  return rows.map((row) => Model(row));
};

export { getQuote, getQuotes };
