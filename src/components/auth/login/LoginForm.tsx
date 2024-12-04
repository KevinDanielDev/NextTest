import "react-toastify/dist/ReactToastify.css";
import ButtonsAuth from "./ButtonsAuth";
import useLoginForm from "@/hooks/auth/useLoginForm";
import InputField from "@/components/common/InputField";
import SubmitButton from "@/components/common/SubmitButton";
import ErrorMessage from "@/components/common/ErrorMessage";

const LoginForm = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        error,
        loading,
        handleSubmit,
    } = useLoginForm();
    return (
         <>
        <div className="flex justify-center items-center">
            <div className="rounded-xl shadow-lg p-6 lg:p-8 max-w-lg w-96 text-white overflow-hidden relative">
                <ButtonsAuth />
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
                    {error && <ErrorMessage message={error} />}
                    <SubmitButton loading={loading} label="Continue" />
                </form>
                <p className="text-center text-xs sm:text-sm text-white mt-4">
                    For any questions, reach out to{" "}
                    <a href="mailto:support@quickbetmovies.com" className="text-yellow-400">
                        support@quickbetmovies.com
                    </a>
                </p>
            </div>
        </div>
         </>
    );
};

export default LoginForm
