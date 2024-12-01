import MainBanner from "@/components/banners/MainBanner";
import MovieSection from "@/components/movies/MovieSection";
import NavBar from "@/components/navbar/NavBar";
import Sidebar from "@/components/sidebar/SideBar";

const DashboardLayout = () => {
  return (
    <>
      <div>
        <NavBar />
        <MainBanner />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4 md:p-6 lg:p-8 bg-gray-900">
            <MovieSection title="Popular" count={8} />
            <MovieSection title="Now Playing" count={6} />
            <MovieSection title="Upcoming" count={6} />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
