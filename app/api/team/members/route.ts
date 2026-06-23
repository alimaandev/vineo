// app/api/team/members/route.ts
import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';
import { getClerkUserId } from '@/utils/clerk';

// GET /api/team/members - list all team members for the authenticated user
export async function GET(request: Request) {
  try {
    const userId = getClerkUserId();
    const { data: members, error } = await supabase
      .from('team_member')
      .select('*')
      .eq('user_id', userId);
    if (error) throw error;
    return NextResponse.json(members);
  } catch (error) {
    console.error('Error fetching team members:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// POST /api/team/members - create a new member (expects projectId and role)
export async function POST(request: Request) {
  try {
    const userId = getClerkUserId();
    const data = await request.json();
    const { data: newMember, error } = await supabase
      .from('team_member')
      .insert({ ...data, user_id: userId })
      .single();
    if (error) throw error;
    return NextResponse.json(newMember, { status: 201 });
  } catch (error) {
    console.error('Error creating team member:', error);
    return new NextResponse('Bad Request', { status: 400 });
  }
}

// PUT /api/team/members/:id - update a member by id (only allowed for owner)
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return new NextResponse('Missing id', { status: 400 });
    }
    const userId = getClerkUserId();
    const data = await request.json();
    const { data: updated, error } = await supabase
      .from('team_member')
      .update(data)
      .eq('id', id)
      .eq('user_id', userId)
      .single();
    if (error) throw error;
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating team member:', error);
    return new NextResponse('Bad Request', { status: 400 });
  }
}

// DELETE /api/team/members/:id - delete a member by id (owner only)
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return new NextResponse('Missing id', { status: 400 });
    }
    const userId = getClerkUserId();
    const { error } = await supabase
      .from('team_member')
      .delete()
      .eq('id', id)
      .eq('user_id', userId);
    if (error) throw error;
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting team member:', error);
    return new NextResponse('Bad Request', { status: 400 });
  }
}
