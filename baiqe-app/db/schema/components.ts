import { integer, jsonb, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const components = pgTable("components", {
  id: uuid("id").defaultRandom().primaryKey(),

  category: text("category").notNull(),

  brand: text("brand").notNull(),

  model: text("model").notNull(),

  speed: integer("speed"),

  metadata: jsonb("metadata"),
});
