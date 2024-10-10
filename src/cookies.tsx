"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.SESSION_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime(payload.expires).sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

// route tracking - auth, onboarding
export async function getPaths() {
  const session = cookies().get("paths")?.value;
  if (!session) return undefined;
  return await decrypt(session);
}

export async function setPaths(path: string) {
  const activePath = await getPaths();
  const data = activePath?.data ? [...new Set([...activePath.data, path])] : [path];
  const expires = new Date(Date.now() + 60 * 60 * 24 * 1 * 1000);
  const session = await encrypt({ data, expires });
  cookies().set("paths", session, { expires, httpOnly: true });
  return;
}

export async function clearPaths() {
  cookies().set("paths", "", { expires: new Date(0) });
}

// sessions control
export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return undefined;
  return await decrypt(session);
}

export async function createSession(data: any) {
  const activeSession = await getSession();
  const user = activeSession?.user ? { ...activeSession.user, ...data } : data;
  const expires = new Date(Date.now() + 60 * 60 * 24 * 7 * 1000);
  const session = await encrypt({ user, expires });

  cookies().set("session", session, { expires, httpOnly: true });
  return;
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);

  parsed.expires = new Date(Date.now() + 60 * 60 * 24 * 7 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}
