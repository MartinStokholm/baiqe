import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import * as schema from '@/db/schema';
import { randomUUID } from 'crypto';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name } = body as { email?: string; name?: string };

    if (!email) {
      return new NextResponse(JSON.stringify({ error: 'missing email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const id = randomUUID();

    await db.insert(schema.users).values({ id, email, name }).run();

    return new NextResponse(JSON.stringify({ id, email, name }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const message = (err as Error).message || String(err);

    if (message.toLowerCase().includes('unique') || message.toLowerCase().includes('duplicate')) {
      return new NextResponse(JSON.stringify({ error: 'email already exists' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new NextResponse(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
