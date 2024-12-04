"use client";

// import Image from "next/image";
import Link from "next/link";
import LoginModal from "../auth/login/LoginModal";
import { useState } from "react";

const NavBar = () => {
    const [modalMode, setModalMode] = useState<"login" | "register">("login");

    const openModal = (mode: "login" | "register") => {
        setModalMode(mode);
        const modal = document.getElementById("my_modal_5") as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <>
            <div className="bg-black">
                <div className="navbar px-4 md:px-10 flex items-center">
                    <div className="flex-none">
                        <div className="flex flex-col items-start md:items-center">
                            <p className="text-xl text-white font-bold">QUICKBET</p>
                            <p className="text-sm text-yellow-300">Movies</p>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-1 ml-10">
                        <Link className="btn btn-ghost text-sm text-white" href="/Popular">
                            Popular
                        </Link>
                        <Link className="btn btn-ghost text-sm text-white ml-10" href="/Favorites">
                            Favorites
                        </Link>
                    </div>
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

                    <div className="flex-none gap-2">
                        {/* <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                onClick={() => openModal("login")}
                                className="btn btn-circle avatar bg-white"
                            >
                                <div className="w-8 h-8 rounded-full">
                                    <Image
                                        src="/user.svg"
                                        alt="user"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                            </div>
                        </div> */}
                        <button
                            className="btn btn-sm btn-yellow"
                            onClick={() => openModal("login")}
                        >
                            Login
                        </button>
                        <button
                            className="btn btn-sm btn-yellow"
                            onClick={() => openModal("register")}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <LoginModal mode={modalMode} />
        </>
    );
};

export default NavBar;
