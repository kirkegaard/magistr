import { getQuotes } from "../../lib/data/quotes";

export default async (req, res) => {
  if (req.method === "GET") await Get(req, res);
  if (req.method === "POST") await Post(req, res);
};

const Get = async (req, res) => {
  const { order, orderBy, limit, offset } = req.query;
  const quotes = await getQuotes({ orderBy, order, limit, offset });
  res.status(200).json({
    message: quotes ? "Success" : "Quotes not found",
    data: quotes || [],
  });
};

const Post = (req, res) => {
  res.status(200).json({
    message: "Method not implemented yet",
  });
};
