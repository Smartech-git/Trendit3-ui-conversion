import { NextResponse, NextRequest } from "next/server";
import { getSession, updateSession } from "./cookies";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  await updateSession();
  const user = await getSession();
  console.log(request.nextUrl.pathname);

  if (!user?.user) {
    if (request.nextUrl.pathname === `/`) {
      return Response.redirect(new URL("login/0", request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith(`/signup`)) {
    if (!["/signup/email", "/signup/email-confirmation"].includes(request.nextUrl.pathname)) {
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
