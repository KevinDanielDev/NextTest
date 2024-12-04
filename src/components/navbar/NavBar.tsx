"use client";

import { useState, useEffect } from "react";
import Branding from "./Branding";
import NavLinks from "./NavLinks";
import LoginModal from "../auth/AuthModal";
import ActionButtons from "./ActionsButtons";
import DropdownNav from "./DropDownNav";
import Image from "next/image";
import OptionsUser from "./OptionsUser";

const NavBar = () => {
    const [modalMode, setModalMode] = useState<"login" | "register">("login");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const checkToken = () => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    };

    useEffect(() => {
        checkToken();
        const handleStorageChange = () => checkToken();
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const openModal = (mode: "login" | "register") => {
        setModalMode(mode);
        const modal = document.getElementById("my_modal_5") as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setShowOptions(false);
    };

    return (
        <>
            <div className="bg-black">
                <div className="navbar px-4 md:px-10 flex items-center">
                    <Branding />
                    <NavLinks />
                    <DropdownNav />
                    {isLoggedIn ? (
                        <div className="relative bg-white rounded-full flex items-center ml-auto">
                            <Image
                                src="/user.svg"
                                alt="User Avatar"
                                width={40}
                                height={40}
                                className="rounded-full cursor-pointer"
                                onClick={toggleOptions}
                            />
                            {showOptions && (
                                <div className="absolute top-12 right-0 rounded-md z-50">
                                    <OptionsUser onLogout={handleLogout} />
                                </div>
                            )}
                        </div>
                    ) : (
                        <ActionButtons
                            onLogin={() => openModal("login")}
                            onRegister={() => openModal("register")}
                        />
                    )}
                </div>
            </div>
            <LoginModal mode={modalMode} />
        </>
    );
};

export default NavBar;
