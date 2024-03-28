import { Logo } from "./logo";
import { Search } from "./search";
import { Actions } from "./actions";
import { ModeToggle } from "@/components/mode-toggle";



export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-background px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      <ModeToggle />
      <Search />
      <Actions />
    </nav>
  );
};
