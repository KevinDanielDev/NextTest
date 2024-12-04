"use client";

import { useState } from "react";
import Branding from "./Branding";
import NavLinks from "./NavLinks";
import LoginModal from "../auth/AuthModal";
import ActionButtons from "./ActionsButtons";
import DropdownNav from "./DropDownNav";

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
                    <Branding />
                    <NavLinks />
                    <DropdownNav />
                    <ActionButtons
                        onLogin={() => openModal("login")}
                        onRegister={() => openModal("register")}
                    />
                </div>
            </div>
            <LoginModal mode={modalMode} />
        </>
    );
};

export default NavBar;
