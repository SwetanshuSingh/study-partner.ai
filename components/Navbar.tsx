import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <nav className="w-full h-20 flex justify-center items-center">
            <header className="w-[60%] h-full bg-white flex items-center justify-between">
                <h2 className="text-xl font-semibold">StudyPartner.ai</h2>
                <Button className="rounded-xl font-semibold">Log In</Button>
            </header>
        </nav>
    )
}

export default Navbar;