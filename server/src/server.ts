import express from "express";
// Inicializando arquivo de inicializacao do typescript
// Video 1: 57:53
// npx tsc --init

const app = express();

app.get(
  "/users",
  () => {
    console.log("listagem de usuario");
  },
);

app.listen(1234);