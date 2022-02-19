import type { NextFetchEvent, NextRequest } from "next/server";

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function middleware(
  req: NextRequest & NextApiRequest,
  ev: NextFetchEvent
) {
  if (req.nextUrl.pathname == "/") {
    const token = await getToken({
      req: req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV == "production",
    });

    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!token) return NextResponse.redirect("/login");

    // If user is authenticated, continue.
    return NextResponse.next();
  }
}
