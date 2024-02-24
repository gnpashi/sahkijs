import { NextResponse } from "next/server";
import clientPromise from "@/../../lib/mongo";

import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("games");

    const games = await db.collection("games").find({}).toArray();
    console.log(games);

    return NextResponse.json(games, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json("error", { status: 200 });
  }
}
export { handler as GET };
