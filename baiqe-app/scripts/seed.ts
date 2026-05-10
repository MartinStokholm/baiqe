import "dotenv/config";

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { bikes, users } from "@/db/schema";

async function seed() {
  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, "test@example.com"),
  });

  if (existingUser) {
    console.log("User already exists");
    return;
  }

  const [user] = await db
    .insert(users)
    .values({
      id: crypto.randomUUID(),
      email: "test@example.com",
      name: "Test Rider",
    })
    .returning();

  await db.insert(bikes).values({
    userId: user.id,
    brand: "Trek",
    model: "Fuel EX 8",
    year: 2022,
  });

  console.log("Seed complete");
}

seed();
