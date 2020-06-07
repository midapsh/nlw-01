import path from "path";
import express from "express";
import cors from "cors";
import routes from "./routes";
// Inicializando arquivo de inicializacao do typescript
// Video 1: 57:53
// npx tsc --init
// Inicializar aplicacao
// npx ts-node src/server.ts
// ou
// npm run dev
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(1234);