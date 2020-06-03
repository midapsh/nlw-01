import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  const msg = "Hello";
  return response.json({ msg });
});

export default routes;