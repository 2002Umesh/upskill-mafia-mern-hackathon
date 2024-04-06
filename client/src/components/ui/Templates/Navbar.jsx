import { Link, NavLink, Outlet } from "react-router-dom";
import { CircleUser, Menu, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ModeToggle from "../ModeToggle";

import { useAuth } from "@/store/auth";

function Navbar() {
  const { isLoggedIn, LogoutUser } = useAuth();

  return (
    <>
      <header className="fixed w-full top-0 flex h-16 items-center gap-4 border-b bg-opaque px-4 md:px-6 z-10">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            to="/search"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Search
          </Link>
         
          
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link to="/search" className=" text-muted-foreground hover:text-foreground">
                Search
              </Link>
             
              
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 ml-auto ">
          <DropdownMenu className="">
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to="/profile">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
              
     
              <DropdownMenuSeparator />

              {isLoggedIn ? (
                <DropdownMenuItem onClick={LogoutUser}>Logout</DropdownMenuItem>
              ) : (
                <>
                  <NavLink to="/signin">
                    {" "}
                    <DropdownMenuItem>Login </DropdownMenuItem>
                  </NavLink>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle></ModeToggle>
        </div>
      </header>

      <Outlet></Outlet>
    </>
  );
}

export default Navbar;
