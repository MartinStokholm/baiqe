// src/app/page.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bike, Wrench, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <div className="mb-6 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-sm text-zinc-400">
          Digital garage for cyclists
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Know every part on your bike.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Build a virtual version of your bike, track components, manage
          maintenance, and instantly find compatible replacement parts.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="cursor-pointer">
            Get Started
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-900"
          >
            View Demo Garage
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
        <Card className="border-zinc-800 bg-zinc-900 text-zinc-100">
          <CardContent className="p-6">
            <Bike className="mb-4 h-10 w-10" />

            <h2 className="text-xl font-semibold">Build Your Bike</h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Create a digital version of your bike and keep track of every
              installed component.
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900 text-zinc-100">
          <CardContent className="p-6">
            <Wrench className="mb-4 h-10 w-10" />

            <h2 className="text-xl font-semibold">Track Maintenance</h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Log services, replacements, and repairs so you always know what
              your bike needs next.
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900 text-zinc-100">
          <CardContent className="p-6">
            <ShieldCheck className="mb-4 h-10 w-10" />

            <h2 className="text-xl font-semibold">Find Compatible Parts</h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Quickly discover replacement parts that fit your exact drivetrain
              and bike setup.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
