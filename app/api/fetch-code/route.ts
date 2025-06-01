import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rawUrl = searchParams.get('url');

  if (!rawUrl || !rawUrl.startsWith('https://raw.githubusercontent.com/')) {
    return NextResponse.json({ error: 'Invalid or missing raw URL' }, { status: 400 });
  }

  try {
    const res = await fetch(rawUrl);
    if (!res.ok) throw new Error('Failed to fetch');

    const code = await res.text();
    return NextResponse.json({ code });
  } catch (err) {
    return NextResponse.json({ error: 'Could not fetch code' }, { status: 500 });
  }
}
