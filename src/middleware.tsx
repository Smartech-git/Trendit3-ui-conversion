import { NextResponse, NextRequest } from "next/server";
import { getSession, updateSession, getPathsCookies } from "./cookies";
import { cookiesType, pathsEnum } from "./types";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  await updateSession(request);
  const session = await getSession();
  const paths = await getPathsCookies();
  console.log(session);

  if (!session?.user?.access_token) {
    if (!request.nextUrl.pathname.startsWith("/login")) {
      return Response.redirect(new URL("/login/0", request.url));
    }
  } else if (!request.nextUrl.pathname.startsWith("/home")) {
    return Response.redirect(new URL("/home", request.url));
  }

  // if (request.nextUrl.pathname.startsWith(`/signup`)) {
  //   if (paths?.data) {
  //     if (!paths.data.includes(request.nextUrl.pathname)) {
  //       const response = NextResponse.redirect(new URL(paths.data.at(-1), request.url), 303);
  //       response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  //       return response;
  //     }
  //   } else if (request.nextUrl.pathname !== pathsEnum.email) {
  //     const response = NextResponse.redirect(new URL(pathsEnum.email, request.url), 303);
  //     response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  //     return response;
  //   }
  // }

  // if (request.nextUrl.pathname.startsWith(`/login`)) {
  //   if (paths?.data) {
  //     if (!paths.data.includes(request.nextUrl.pathname)) {
  //       return NextResponse.redirect(new URL(paths.data.at(-1), request.url), 308);
  //     }
  //   } else {
  //     if (request.nextUrl.pathname !== pathsEnum.login) {
  //       return NextResponse.redirect(new URL(pathsEnum.login, request.url), 308);
  //     }
  //   }
  // }
}

export const config = {
  matcher: ["/"],
};
