import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import * as schema from '@/db/schema';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ error: 'missing userId' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const bikes = await db.select().from(schema.bikes).where(schema.bikes.userId.eq(userId));

    return new NextResponse(JSON.stringify(bikes), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
