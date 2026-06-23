// utils/clerk.ts
import { auth } from '@clerk/nextjs/server';

/**
 * Extract the Clerk user ID from a Next.js App Router Server context.
 * Throws if the user is not authenticated.
 */
export async function getClerkUserId(): Promise<string> {
  // auth() is asynchronous in newer Clerk/Next.js versions
  const { userId } = await auth();
  
  if (!userId) {
    throw new Error('Unauthenticated: Clerk userId not found');
  }
  
  return userId;
}
