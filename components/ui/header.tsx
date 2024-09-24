import MobileMenu from "./mobile-menu";
import AuthButton from "./authbutton";
import DarkModeToggle from "./darkmode-toggle";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Search } from "lucide-react";
import Navigation from "./navLink";

export default async function Header() {
  const supabase = createClient();
  const supabaseUserResponse = await supabase.auth.getUser();

  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <>
      <div className="fixed top-0 z-30 w-full animate-fadein-opacity border-b border-gray-400/20 bg-gray-100/10 backdrop-blur-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 sm:py-2">
          <div className="flex h-10 w-full items-center justify-between transition ease-in-out sm:text-lg">
            {/* Logo aligned to the far left
            <div className="mr-6 mt-3 flex items-center justify-start space-x-2">
              <Link href="/">
                <HeroTitle />
              </Link>
            </div> */}

            {/* Navigation and Search Bar */}
            <div className="flex flex-grow items-center space-x-4">
              {/* Navigation */}
              <div className="mr-24 flex space-x-8">
                <Navigation />
              </div>

              {/* Search Bar */}
              <div className="relative ml-auto w-full max-w-lg">
                <input
                  type="text"
                  className="bg-white w-full rounded-full border border-gray-300 py-3 pl-12 pr-16 text-gray-700 shadow-sm transition dark:bg-zinc-800 dark:text-gray-50"
                  placeholder="Search..."
                />
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-500 dark:text-gray-500"
                  size={24}
                />
              </div>
            </div>

            <div className="flex w-[28%] flex-row items-center justify-end space-x-2.5 md:w-[36%]">
              {/* AuthButton is hidden in production */}
              <AuthButton />

              <span
                className="hidden h-6 w-px rounded-full bg-gray-300 md:block"
                id="button__divider"
              ></span>

              {/* DARK/LIGHT MODE TOGGLE */}
              <DarkModeToggle />

              <span
                className="h-6 w-px rounded-full bg-gray-300 md:hidden"
                id="button__divider"
              ></span>

              <MobileMenu
                supabaseUser={
                  supabaseUserResponse.error || !supabaseUserResponse.data.user
                    ? "User not found"
                    : supabaseUserResponse
                }
                handleSignOut={handleSignOut}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
