import mysql from "mysql2/promise";

const getConnection = async () => {
  const conn = await mysql.createConnection({
    host: "db",
    user: "example",
    password: "example",
    database: "example",
  });
  return conn;
};

export { getConnection };
