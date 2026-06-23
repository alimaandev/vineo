// utils/clerk.ts – Helper to retrieve Clerk userId on the server side
import { getAuth } from '@clerk/nextjs/server';

/**
 * Extract the Clerk user ID from a Next.js request.
 * Throws if the user is not authenticated.
 */
export function getClerkUserId(): string {
  // In server components and API routes, Clerk can infer the request from cookies
  const { userId } = getAuth();
  if (!userId) {
    throw new Error('Unauthenticated: Clerk userId not found');
  }
  return userId;
}
