import LoginrightSection from "./LoginRightSection";
import LoginForm from "./LoginForm";
import ButtonBack from "./ButtonBack";


const LoginModal = () => {
    return (
        <>
            <dialog id="my_modal_5" className="modal w-full h-full bg-transparent flex items-center justify-center">
                <div className="w-full max-w-4xl h-auto backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                        <ButtonBack />
                        <LoginForm />
                        <LoginrightSection />
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default LoginModal;
