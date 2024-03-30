import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex justify-center items-center">
      <header className="w-[60%] h-full bg-white flex items-center justify-between">
        <h2 className="text-xl font-semibold">StudyPartner.ai</h2>
        <Link href="/signin">
          <Button className="rounded-xl font-semibold">Log In</Button>
        </Link>
      </header>
    </nav>
  );
};

export default Navbar;
