import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "@/services/auth/loginService";

const useLoginForm = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        loading: false,
        error: "",
    });
    
    const validate = () => {
        if (!state.email || !state.password) {
            toast.error("Both email and password are required.");
            return false;
        }
        return true;
    };

    const closeModal = () => {
        const modal = document.getElementById("my_modal_5") as HTMLDialogElement;
        if (modal) {
            modal.close();
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (!validate()) return;
        e.preventDefault();

        setState((state) => ({ ...state, error: "", loading: true }));

        try {
            await login(state.email, state.password);
            toast.success("Login successful! Welcome!");
            closeModal();
        } catch (err) {
            setState((prev) => ({
                ...prev,
                error: "Invalid email or password.",
            }));
            toast.error("Login failed. Please try again.");
            console.error(err);
        } finally {
            setState((state) => ({ ...state, email: '', password: '', loading: false,
            }));
        }
    };

    return {
        ...state,
        setEmail: (email: string) =>
            setState((state) => ({ ...state, email })),
        setPassword: (password: string) =>
            setState((state) => ({ ...state, password })),
        handleSubmit,
    };
};

export default useLoginForm;