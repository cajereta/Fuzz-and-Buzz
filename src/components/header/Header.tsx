import {
  AudioLines,
  CircleUser,
  Menu,
  Search,
  ShoppingCart,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { ModeToggle } from "../dark-mode/mode-toggle";
import { CartHeader } from "../cart/CartHeader";

export const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-6 md:text-sm lg:gap-8 justify-around">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <AudioLines />
          <span className="sr-only">Fuzz & Buzz</span>
        </a>
        <a
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground font-bold"
        >
          Products
        </a>

        <a
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground font-bold"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground font-bold"
        >
          Warranty
        </a>
        <a
          href="#"
          className="text-foreground transition-colors hover:text-foreground font-bold"
        >
          Contact Us
        </a>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <AudioLines className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Products
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              About Us
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Warranty
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Contact Us
            </a>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full md:w-[30rem]  items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              className="bg-background rounded-full text-foreground border"
            >
              <CircleUser className="h-5 w-5 " />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only">Fuzz & Buzz</span>
              </a>
              <p className="text-muted-foreground">No items in cart.</p>
              <CartHeader />
              <Button className="font-bold">Proceed to Checkout</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
