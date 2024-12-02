const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Music",
    "Romance",
  ];
  
  const Sidebar = () => {
    return (
      <aside className="hidden lg:block w-full lg:w-64 bg-gray-800 p-4 lg:min-h-screen">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-white">Search</h3>
          <input
            type="text"
            placeholder="Search for a movie..."
            className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Genres</h3>
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-600">
              {genres.map((genre, id) => (
                <li
                  key={id}
                  className="p-3 hover:bg-gray-600 hover:text-green-400 transition-all cursor-pointer"
                >
                  {genre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;
  