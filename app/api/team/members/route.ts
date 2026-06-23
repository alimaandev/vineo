// app/api/team/members/route.ts
import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

// GET /api/team/members - list all team members
export async function GET(request: Request) {
  try {
    const { data: members, error } = await supabase
    .from('TeamMember')
    .select('*');
  if (error) throw error;
    return NextResponse.json(members);
  } catch (error) {
    console.error('Error fetching team members:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// POST /api/team/members - create a new member
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { data: newMember, error } = await supabase
      .from('TeamMember')
      .insert(data)
      .single();
    if (error) throw error;
    return NextResponse.json(newMember, { status: 201 });
  } catch (error) {
    console.error('Error creating team member:', error);
    return new NextResponse('Bad Request', { status: 400 });
  }
}

// PUT /api/team/members/:id - update a member by id
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return new NextResponse('Missing id', { status: 400 });
    }
    const data = await request.json();
    const updated = await prisma.teamMember.update({
      where: { id: Number(id) },
      data,
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating team member:', error);
    return new NextResponse('Bad Request', { status: 400 });
  }
}

// DELETE /api/team/members/:id - delete a member by id
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return new NextResponse('Missing id', { status: 400 });
    }
    await prisma.teamMember.delete({ where: { id: Number(id) } });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting team member:', error);
    return new NextResponse('Bad Request', { status: 400 });
  }
}
