// import Image from "next/image";

const LoginLeftSection = () => {
    return (
        <div className="flex-1 text-center lg:text-left text-white">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:mb-6">
                Welcome back to Quickbet Movies!
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-center mb-4 lg:mb-6">
                🎥 Ready to dive into the world of unlimited entertainment? Enter your
                credentials and let the cinematic adventure begin!
            </p>
            {/* <Image
                src=""
                alt="Login"
                width={400}
                height={400}
                className="rounded-lg"
            /> */}
        </div>
    );
};

export default LoginLeftSection;