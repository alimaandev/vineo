import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

// Assume authentication middleware provides userId in request headers or session
// For simplicity, we extract userId from the Authorization header as a Bearer token containing the user ID.
// In a real app, replace this with your auth solution (e.g., next-auth, JWT, etc.).

import { getClerkUserId } from '@/utils/clerk';

function getUserId(request: Request): string {
  // Use Clerk server‑side helper to get the authenticated user ID
  return getClerkUserId(request);
}

export async function GET(request: Request) {
  const userId = getUserId(request);
  if (!userId) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  try {
    const { data: settings, error } = await supabase
      .from('Settings')
      .select('*')
      .eq('userId', userId)
      .single();
    if (error && error.code !== 'PGRST116') { // no rows error
      console.error('Supabase GET settings error:', error);
      return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
    return NextResponse.json(settings ?? {});
  } catch (error) {
    console.error('GET settings exception:', error);
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
    // Upsert using Supabase
    const { data: updatedSettings, error } = await supabase
      .from('Settings')
      .upsert({ userId, ...body }, { onConflict: 'userId' })
      .single();
    if (error) {
      console.error('Supabase PATCH settings error:', error);
      return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
    }
    return NextResponse.json(updatedSettings);
  } catch (error) {
    console.error('PATCH settings exception:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
