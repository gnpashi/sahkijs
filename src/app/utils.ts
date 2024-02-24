import { cache } from "react";
import clientPromise from "@/../../lib/mongo";

export const getGames = cache(async () => {
  const client = await clientPromise;
  const db = client.db("games");
  let games = await db.collection("games").find({}).toArray();
  return games;
});
