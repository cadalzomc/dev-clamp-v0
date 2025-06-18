import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuth = !!token;
  const pathname = req.nextUrl.pathname;

  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = isAuth ? "/dashboard" : "/landing";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
