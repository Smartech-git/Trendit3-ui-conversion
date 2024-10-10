import { NextResponse, NextRequest } from "next/server";
import { getSession, updateSession, getPaths } from "./cookies";
import {cookiesType, pathsEnum } from "./types";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  await updateSession(request);
  const session = await getSession();
  const paths = await getPaths();
  console.log(session)
  if (!session?.user?.access_token) {
    if (!request.nextUrl.pathname.startsWith("/signup") && !request.nextUrl.pathname.startsWith("/reset-password") && !request.nextUrl.pathname.startsWith("/login")) {
      return Response.redirect(new URL("login/0", request.url));
    }
  } else if (request.nextUrl.pathname !== `/home`) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (request.nextUrl.pathname.startsWith(`/signup`)) {
    if (paths?.data) {
      if (!paths.data.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL(paths.data.at(-1), request.url), 308);
      }
    } else {
      if (request.nextUrl.pathname !== pathsEnum.email) {
        return NextResponse.redirect(new URL(pathsEnum.email, request.url), 308);
      }
    }
  }

  if (request.nextUrl.pathname.startsWith(`/login`)) {
    if (paths?.data) {
      if (!paths.data.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL(paths.data.at(-1), request.url), 308);
      }
    } else {
      if (request.nextUrl.pathname !== pathsEnum.login) {
        return NextResponse.redirect(new URL(pathsEnum.login, request.url), 308);
      }
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpeg|jpg|svg)).*)"],
};
