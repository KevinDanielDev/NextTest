import Image from "next/image";

const MovieSection = ({ title, count }: { title: string; count: number }) => {
    return (
        <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array(count)
                    .fill("")
                    .map((_, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
                        >
                            <div className="relative aspect-video">
                                <Image
                                    src="/movie-dashboard.jpeg"
                                    alt="Movie"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Movie Title</h3>
                                <p className="text-sm text-gray-400">Release Date</p>
                                <div className="mt-2 flex items-center justify-between">
                                    <span className="text-green-400 font-bold">95%</span>
                                    <button className="text-gray-400 hover:text-white">♥</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MovieSection;
