import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "@/services/auth/loginService";
import { register } from "@/services/auth/registerService";

const useAuthForm = (mode: "login" | "register") => {
    const [state, setState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        loading: false,
        error: "",
    });

    const validate = () => {
        if (!state.email || !state.password) {
            toast.error("Email and password are required.");
            return false;
        }

        if (mode === "register" && state.password !== state.confirmPassword) {
            toast.error("Passwords do not match.");
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

        setState((prev) => ({ ...prev, error: "", loading: true }));

        try {
            if (mode === "login") {
                await login(state.email, state.password);
                toast.success("Login successful! Welcome!");
            } else {
                await register(state.email, state.password);
                toast.success("Registration successful!");
            }

            // Notificar a otros componentes que el token se ha actualizado
            window.dispatchEvent(new Event("storage"));
            closeModal();
        } catch (err) {
            setState((prev) => ({
                ...prev,
                error: mode === "login" ? "Invalid email or password." : "Registration failed.",
            }));
            toast.error(
                mode === "login"
                    ? "Login failed. Please try again."
                    : "Registration failed. Please try again."
            );
            console.error(err);
        } finally {
            setState((prev) => ({
                ...prev,
                email: "",
                password: "",
                confirmPassword: "",
                loading: false,
            }));
        }
    };

    return {
        ...state,
        setEmail: (email: string) =>
            setState((prev) => ({ ...prev, email })),
        setPassword: (password: string) =>
            setState((prev) => ({ ...prev, password })),
        setConfirmPassword: (confirmPassword: string) =>
            setState((prev) => ({ ...prev, confirmPassword })),
        handleSubmit,
    };
};

export default useAuthForm;
