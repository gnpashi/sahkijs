import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@../../../lib/mongo";

async function handler(req: NextRequest, res: NextResponse) {
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
