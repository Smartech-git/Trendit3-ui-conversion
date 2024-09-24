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

// cookies authorizations
export async function authCookies(data: { type: "all" | "optional" }) {
  const expires = new Date(Date.now() + 365 * 60 * 60 * 24 * 1000);
  const session = await encrypt({ data, expires });
  cookies().set("a_c", session, { expires, httpOnly: true });

  return;
}

export async function updateAuthCookies(request: NextRequest) {
  const session = request.cookies.get("a_c")?.value;
  if (!session) return;
  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 365 * 60 * 60 * 24 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "a_c",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export async function getAuthCookies() {
  const session = cookies().get("a_c")?.value;
  if (!session) return undefined;
  return await decrypt(session);
}

// sessions control
export async function createSession(formData: any) {
  // Verify credentials && get the user
  const user = formData;

  // Create the session
  const expires = new Date(Date.now() + 60 * 60 * 24 * 7 * 1000);
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true });

  return;
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return undefined;
  return await decrypt(session);
}

export async function updateSession() {
  const session: any = cookies().get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return undefined;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}
