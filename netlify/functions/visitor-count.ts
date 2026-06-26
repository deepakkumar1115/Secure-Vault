import type { Config } from "@netlify/functions";
import { db } from "../../db/index.js";
import { visitorStats } from "../../db/schema.js";
import { eq, sql } from "drizzle-orm";

export default async (req: Request) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (req.method === "GET") {
    const [stats] = await db.select().from(visitorStats).where(eq(visitorStats.id, 1));
    return Response.json({ count: stats?.count ?? 0 }, { headers });
  }

  if (req.method === "POST") {
    const [result] = await db
      .insert(visitorStats)
      .values({ id: 1, count: 1 })
      .onConflictDoUpdate({
        target: visitorStats.id,
        set: { count: sql`${visitorStats.count} + 1` },
      })
      .returning();
    return Response.json({ count: result.count }, { headers });
  }

  return new Response("Method not allowed", { status: 405, headers });
};

export const config: Config = {
  path: "/api/visitor-count",
};
