import "react-toastify/dist/ReactToastify.css";
import InputField from "@/components/common/InputField";
import SubmitButton from "@/components/common/SubmitButton";
import ErrorMessage from "@/components/common/ErrorMessage";
import useAuthForm from "@/hooks/auth/useAuthForm";

interface AuthFormProps {
    mode: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
    const {
        email,
        password,
        confirmPassword,
        loading,
        error,
        setEmail,
        setPassword,
        setConfirmPassword,
        handleSubmit,
    } = useAuthForm(mode);

    return (
        <div className="flex justify-center items-center">
            <div className="rounded-xl shadow-lg p-6 lg:p-8 max-w-lg w-96 text-white overflow-hidden relative">
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                    <InputField
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <InputField
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    {mode === "register" && (
                        <InputField
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                        />
                    )}
                    {error && <ErrorMessage message={error} />}
                    <SubmitButton
                        loading={loading}
                        label={mode === "login" ? "Login" : "Register"}
                    />
                </form>
            </div>
        </div>
    );
};

export default AuthForm;
