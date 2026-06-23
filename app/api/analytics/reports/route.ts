// app/api/analytics/reports/route.ts – CRUD API for analytics reports using Prisma
import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

// GET /api/analytics/reports – list all reports for the authenticated user (placeholder: no auth)
export async function GET() {
  const reports = await prisma.report.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json({ reports });
}

// POST /api/analytics/reports – create a new report
export async function POST(request: Request) {
  const { title, data } = await request.json();
  const created = await prisma.report.create({
    data: {
      title,
      data,
    },
  });
  return NextResponse.json(created, { status: 201 });
}

// PUT /api/analytics/reports/:id – update an existing report (id from query params)
export async function PUT(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Missing report id' }, { status: 400 });
  }
  const { title, data } = await request.json();
  const updated = await prisma.report.update({
    where: { id },
    data: { title, data },
  });
  return NextResponse.json(updated);
}

// DELETE /api/analytics/reports/:id – delete a report
export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Missing report id' }, { status: 400 });
  }
  await prisma.report.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
