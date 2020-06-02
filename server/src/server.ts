import express from "express";
// Inicializando arquivo de inicializacao do typescript
// Video 1: 57:53
// npx tsc --init
// Inicializar aplicacao
// npx ts-node src/server.ts
const app = express();

app.get(
  "/users",
  (request, response) => {
    console.log("listagem de usuario");
    const msg = "Hello Oi";
    response.json({ msg });
  },
);

app.listen(1234);