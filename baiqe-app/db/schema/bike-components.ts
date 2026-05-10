import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

import { bikes } from "./bikes";
import { components } from "./components";

export const bikeComponents = pgTable("bike_components", {
  id: uuid("id").defaultRandom().primaryKey(),

  bikeId: uuid("bike_id")
    .notNull()
    .references(() => bikes.id, {
      onDelete: "cascade",
    }),

  componentId: uuid("component_id")
    .notNull()
    .references(() => components.id),

  installedAt: timestamp("installed_at").defaultNow().notNull(),

  removedAt: timestamp("removed_at"),
});
