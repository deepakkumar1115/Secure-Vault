import { pgTable, integer } from "drizzle-orm/pg-core";

export const visitorStats = pgTable("visitor_stats", {
  id: integer().primaryKey(),
  count: integer().notNull().default(0),
});
