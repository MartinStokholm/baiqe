import { relations } from "drizzle-orm";

import { bikes } from "./bikes";
import { users } from "./auth";

export const usersRelations = relations(users, ({ many }) => ({
  bikes: many(bikes),
}));

export const bikesRelations = relations(bikes, ({ one }) => ({
  user: one(users, {
    fields: [bikes.userId],
    references: [users.id],
  }),
}));
