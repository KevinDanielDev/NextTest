import Image from "next/image";
import { IDataMovie } from "@/models";

const MovieSection = ({ title, movies }: { title: string; movies: IDataMovie[] }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {/* Grid responsivo */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
          >
            {/* Imagen */}
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
            {/* Detalles */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white truncate">{movie.title}</h3>
              <p className="text-sm text-gray-400">{movie.release_date.toString()}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-green-400 font-bold">
                  {movie.vote_average}%
                </span>
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
