import { getQuote } from "../../../lib/data/quotes";

export default async (req, res) => {
  const { id } = req.query;
  const [quote] = await getQuote(id);
  res.status(200).json({
    message: quote ? "Success" : "Quote not found",
    data: quote || [],
  });
};
