import express from "express";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");

  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:1234/uploads/${item.image}`,
    };
  });

  return response.json(serializedItems);
});

routes.post("/points", async function (request, response) {
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
  } = request.body;

  // Criando uma transacao
  const trx = await knex.transaction();

  const insertedIds = await trx("points").insert({
    image: "image-dummy",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  });

  const point_id = insertedIds ? insertedIds[0] : null;

  const pointItems = items.map((item_id: number) => {
    return {
      item_id,
      point_id,
    };
  })

  await trx("point_items").insert(pointItems);

  return response.json({ success: true });

});

export default routes;