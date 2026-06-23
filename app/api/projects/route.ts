// app/api/projects/route.ts – CRUD API for Project model using Prisma
import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

// Helper to extract userId – placeholder (real auth should replace this)
function getUserId(request: Request): string | null {
  const auth = request.headers.get('authorization');
  if (!auth) return null;
  const parts = auth.split(' ');
  return parts.length === 2 ? parts[1] : null;
}

// GET /api/projects – list all projects (optionally filter by owner)
export async function GET(request: Request) {
  try {
    const { data: projects, error } = await supabase
      .from('Project')
      .select('*')
      .order('createdAt', { ascending: false });
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
    const { title, description } = await request.json();
    const created = await prisma.project.create({ data: { title, description } });
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
    const { title, description } = await request.json();
    const updated = await prisma.project.update({ where: { id }, data: { title, description } });
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
    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
