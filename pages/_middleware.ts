import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
export function middleware(req: NextRequest, res: NextResponse) {
  const siteFromCookie = req.cookies && req.cookies.theme;
  const hasCookie = !!siteFromCookie;
  // Only rewrite files that don't have a file extension

  if (!PUBLIC_FILE.test(req.nextUrl.pathname) && req.nextUrl.pathname === "/") {
    if (hasCookie) {
      if (siteFromCookie === "default") {
        req.nextUrl.pathname = `/`;
        return NextResponse.rewrite(req.nextUrl);
      }
      req.nextUrl.pathname = `/sites/${siteFromCookie}`;
      return NextResponse.rewrite(req.nextUrl);
    }
    return NextResponse.next();
  }
}
