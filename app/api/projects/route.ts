// app/api/projects/route.ts – CRUD API for Project model using Prisma
import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';
import { getClerkUserId } from '@/utils/clerk';

// GET /api/projects – list all projects for the authenticated user
export async function GET(request: Request) {
  try {
    const userId = getClerkUserId();
    const { data: projects, error } = await supabase
      .from('project')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json({ projects });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

// POST /api/projects – create a new project (expects title & optional description)
export async function POST(request: Request) {
  try {
    const userId = getClerkUserId();
    const { title, description } = await request.json();
    const { data: created, error } = await supabase
      .from('project')
      .insert({ title, description, user_id: userId })
      .single();
    if (error) throw error;
    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

// PUT /api/projects?id=xxx – update a project by id (title/description)
export async function PUT(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  try {
    const userId = getClerkUserId();
    const { title, description } = await request.json();
    const { data: updated, error } = await supabase
      .from('project')
      .update({ title, description })
      .eq('id', id)
      .eq('user_id', userId)
      .single();
    if (error) throw error;
    return NextResponse.json(updated);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

// DELETE /api/projects?id=xxx – delete a project
export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  try {
    const userId = getClerkUserId();
    const { error } = await supabase
      .from('project')
      .delete()
      .eq('id', id)
      .eq('user_id', userId);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
