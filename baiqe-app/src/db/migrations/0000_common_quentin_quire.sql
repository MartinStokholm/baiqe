CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "bike_components" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"bike_id" uuid NOT NULL,
	"component_id" uuid NOT NULL,
	"installed_at" timestamp DEFAULT now() NOT NULL,
	"removed_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "bikes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"brand" text NOT NULL,
	"model" text NOT NULL,
	"year" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "components" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"category" text NOT NULL,
	"brand" text NOT NULL,
	"model" text NOT NULL,
	"speed" integer,
	"metadata" jsonb
);
--> statement-breakpoint
ALTER TABLE "bike_components" ADD CONSTRAINT "bike_components_bike_id_bikes_id_fk" FOREIGN KEY ("bike_id") REFERENCES "public"."bikes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bike_components" ADD CONSTRAINT "bike_components_component_id_components_id_fk" FOREIGN KEY ("component_id") REFERENCES "public"."components"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bikes" ADD CONSTRAINT "bikes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;