import { NextResponse } from "next/server";
import clientPromise from "@../../../lib/mongo";

import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("games");
    const gameData = await req.json();
    const game = await db.collection("games").insertOne(gameData);
    console.log(game);

    return NextResponse.json(game, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json("error", { status: 500 });
  }
}
export { handler as POST };
