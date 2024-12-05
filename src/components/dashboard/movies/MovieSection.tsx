import Image from "next/image";
import Link from "next/link";
import { IDataMovie } from "@/models";

const MovieSection = ({ title, movies }: { title: string; movies: IDataMovie[] }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies.map((movie) => (
          <Link href={`/welcome/movie/${movie.id}`} key={movie.id} passHref>
            <div
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
            >
              <div className="relative aspect-[2/3]">
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/placeholder.jpg"
                  }
                  alt={movie.title}
                  width={500}
                  height={750}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white truncate">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {new Date(movie.release_date).toLocaleDateString()}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-green-400 font-bold">
                    {movie.vote_average}%
                  </span>
                  <button className="text-gray-400 hover:text-white">♥</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
