import Link from "next/link";

const DropdownNav = () => {
    return (
        <div className="flex md:hidden flex-1 justify-end">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                        <Link href="/Popular" className="text-black">
                            Popular
                        </Link>
                    </li>
                    <li>
                        <Link href="/Favorites" className="text-black">
                            Favorites
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownNav;
