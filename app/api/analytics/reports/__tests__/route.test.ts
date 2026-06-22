import { GET, POST, PUT, DELETE } from '@/app/api/analytics/reports/route';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

jest.mock('@/lib/prisma');

describe('Analytics reports API', () => {
  afterEach(() => jest.clearAllMocks());

  test('GET returns list of reports', async () => {
    (prisma.report.findMany as jest.Mock).mockResolvedValue([]);
    const res = await GET();
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.reports).toEqual([]);
  });

  test('POST creates a report', async () => {
    const mockReport = { id: 'r1', title: 'Test', data: {} };
    (prisma.report.create as jest.Mock).mockResolvedValue(mockReport);
    const req = new Request('http://localhost/api/analytics/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Test', data: {} }),
    });
    const res = await POST(req);
    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json).toMatchObject(mockReport);
  });

  test('PUT updates a report when id supplied', async () => {
    const updated = { id: 'r1', title: 'Updated', data: {} };
    (prisma.report.update as jest.Mock).mockResolvedValue(updated);
    const req = new Request('http://localhost/api/analytics/reports?id=r1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Updated', data: {} }),
    });
    const res = await PUT(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toMatchObject(updated);
  });

  test('DELETE removes a report when id supplied', async () => {
    (prisma.report.delete as jest.Mock).mockResolvedValue({});
    const req = new Request('http://localhost/api/analytics/reports?id=r1', { method: 'DELETE' });
    const res = await DELETE(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({ success: true });
  });
});
