import { redirect } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';

export default async function DashboardPage() {
  // Get session from the existing auth endpoint
  const authRes = await fetch('/api/auth', { cache: 'no-store' });
  if (!authRes.ok) redirect('/login');

  const session = await authRes.json();
  const userId = session?.user?.id;

  if (!userId) redirect('/login');

  const bikesRes = await fetch(`/api/user/bikes?userId=${encodeURIComponent(
    userId,
  )}`, { cache: 'no-store' });

  const bikes = bikesRes.ok ? await bikesRes.json() : [];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Your Garage</h1>

        {bikes.length === 0 ? (
          <div className="text-zinc-400">No bikes yet.</div>
        ) : (
          <div className="grid gap-4">
            {bikes.map((bike: any) => (
              <Card key={bike.id} className="border-zinc-800 bg-zinc-900 text-zinc-100">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold">{bike.brand} {bike.model}</h2>
                  <p className="text-sm text-zinc-400">Year: {bike.year ?? '—'}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
