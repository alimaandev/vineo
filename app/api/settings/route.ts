import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Assume authentication middleware provides userId in request headers or session
// For simplicity, we extract userId from the Authorization header as a Bearer token containing the user ID.
// In a real app, replace this with your auth solution (e.g., next-auth, JWT, etc.).

function getUserId(request: Request): string | null {
  const auth = request.headers.get('authorization');
  if (!auth) return null;
  const parts = auth.split(' ');
  if (parts.length !== 2) return null;
  // Here we just return the token part as userId placeholder
  return parts[1];
}

export async function GET(request: Request) {
  const userId = getUserId(request);
  if (!userId) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  try {
    const settings = await prisma.settings.findUnique({
      where: { userId },
    });
    if (!settings) {
      // Return empty defaults if not found
      return NextResponse.json({});
    }
    return NextResponse.json(settings);
  } catch (error) {
    console.error('GET settings error:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const userId = getUserId(request);
  if (!userId) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  try {
    const body = await request.json();
    // Expect body to be a partial settings object, e.g., { theme: 'dark' }
    const updatedSettings = await prisma.settings.upsert({
      where: { userId },
      update: body,
      create: { userId, ...body },
    });
    return NextResponse.json(updatedSettings);
  } catch (error) {
    console.error('PATCH settings error:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
