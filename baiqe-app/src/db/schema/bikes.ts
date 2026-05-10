import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { users } from "./auth";

export const bikes = pgTable("bikes", {
  id: uuid("id").defaultRandom().primaryKey(),

  userId: text("user_id")
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade",
    }),

  brand: text("brand").notNull(),

  model: text("model").notNull(),

  year: integer("year"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});
