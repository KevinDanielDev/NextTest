import MainBanner from "@/components/dashboard/banners/MainBanner";
import MovieSection from "@/components/dashboard/movies/MovieSection";
import NavBar from "@/components/navbar/NavBar";
import Sidebar from "@/components/dashboard/sidebar/SideBar";
import { getMovies } from "@/services/movies/movieService";
const DashboardLayout = async () => {
  const movies = await getMovies();

  return (
    <>
      <div>
        <NavBar />
        <MainBanner />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4 md:p-6 lg:p-8 bg-gray-900">
            <MovieSection title="Popular Movies" movies={movies} />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
