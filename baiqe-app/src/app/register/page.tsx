'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        router.push('/login');
        return;
      }

      const data = await res.json().catch(() => ({ error: 'Registration failed' }));
      setError(data?.error || 'Registration failed');
    } catch (err) {
      setError((err as Error).message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
      <Card className="w-full max-w-md border-zinc-800 bg-zinc-900">
        <CardContent className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Create account</h1>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="w-full rounded border border-zinc-700 bg-transparent px-3 py-2 text-zinc-100"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded border border-zinc-700 bg-transparent px-3 py-2 text-zinc-100"
            />

            {error && <div className="text-sm text-destructive">{error}</div>}

            <div className="flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? 'Creating…' : 'Create account'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
