import express from "express";
import routes from "./routes";
// Inicializando arquivo de inicializacao do typescript
// Video 1: 57:53
// npx tsc --init
// Inicializar aplicacao
// npx ts-node src/server.ts
// ou
// npm run dev
const app = express();

app.use(express.json());
app.use(routes);

app.listen(1234);