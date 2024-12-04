import Link from "next/link";

const NavLinks = () => {
    return (
        <div className="hidden md:flex flex-1 ml-10">
            <Link className="btn btn-ghost text-sm text-white" href="/Popular">
                Popular
            </Link>
            <Link className="btn btn-ghost text-sm text-white ml-10" href="/Favorites">
                Favorites
            </Link>
        </div>
    );
};

export default NavLinks;
