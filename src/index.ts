import { app } from "./app";
import { HOST, PORT } from "./env";

app.listen(PORT, HOST, () => {
  console.log(`[server]: listening at http://${HOST}:${PORT}`);
});
