import { NextResponse } from "next/server";

// Root layout (app/layout.jsx) needs to know the current path to skip the
// public site's Navbar/Footer/vendor bundle for /admin routes, but a Server
// Component layout has no direct access to the request URL - only
// next/headers. Stamping it onto a request header here is the standard way
// to bridge that gap.
export function middleware(request) {
  const headers = new Headers(request.headers);
  headers.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
