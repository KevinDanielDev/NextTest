import ButtonsAuth from "./ButtonsAuth";

const LoginForm = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="rounded-xl shadow-lg p-6 lg:p-8 max-w-lg w-96 text-white overflow-hidden relative">
            <ButtonsAuth />
                <form className="space-y-4 sm:space-y-6">
                    <div>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="input input-bordered w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="input input-bordered w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <button type="submit" className="w-full py-2 sm:py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition" >
                        Continue
                    </button>
                </form>
                <p className="text-center text-xs sm:text-sm text-white mt-4">
                    For any questions, reach out to{" "}
                    <a href="mailto:support@quickbetmovies.com" className="text-yellow-400">
                        support@quickbetmovies.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
