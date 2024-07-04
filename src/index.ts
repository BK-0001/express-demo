import express from "express";

const PORT = 3000;
const HOST = "localhost";

const app = express();

app.listen(PORT, HOST, () => {
  console.log(`[server]: listening at http://${HOST}:${PORT}`);
});
