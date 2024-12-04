import LoginRightSection from "./LoginRightSection";
import ButtonBack from "./ButtonBack";
import { ToastContainer } from "react-toastify";
import AuthForm from "./LoginForm";

interface IAuthModalProps {
    mode: "login" | "register";
}

const AuthModal: React.FC<IAuthModalProps> = ({ mode }) => {
    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <dialog id="my_modal_5" className="modal w-full h-full bg-transparent flex items-center justify-center">
                <div className="w-full max-w-4xl h-auto backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                        <ButtonBack />
                        <AuthForm mode={mode} />
                        <LoginRightSection />
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default AuthModal;
