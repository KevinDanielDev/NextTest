import Image from "next/image";

const LoginLeftSection = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-slate-950 rounded-xl shadow-lg p-6 lg:p-8 max-w-lg w-96 text-white overflow-hidden">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:mb-6">
          Welcome back to Quickbet Movies!
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-center mb-4 lg:mb-6">
          🎥 Ready to dive into the world of unlimited entertainment? Enter your
          credentials and let the cinematic adventure begin!
        </p>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src="/login.png"
            alt="Login"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginLeftSection;
