import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "./utils/supabase/middleware";
import { createClient } from "@/utils/supabase/server";

export async function middleware(request: NextRequest) {
  // Update the session as before
  const response = await updateSession(request);

  // Check if the route should be protected
  const protectedPaths = ["/api"];
  const isProtectedRoute = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedRoute) {
    const supabase = createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      // Redirect to login page if no session
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  // If everything fine return response from updateSession
  return response;
}
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/signin",
    "/signup",
  ],
};
