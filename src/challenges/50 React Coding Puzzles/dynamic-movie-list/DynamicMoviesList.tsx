import { Filter, Play, SearchIcon, SortAsc } from "lucide-react";
import { ChangeEvent, useState } from "react";

const data = [
  {
    id: 1,
    title: "Movie 1",
    genre: "Action",
    releaseYear: 2020,
    director: "Majid 102",
  },
  {
    id: 2,
    title: "Movie 2",
    genre: "Comedy",
    releaseYear: 2019,
    director: "Majid 103",
  },
  {
    id: 3,
    title: "Movie 3",
    genre: "Action",
    releaseYear: 2021,
    director: "Majid 104",
  },
  {
    id: 4,
    title: "Movie 3",
    genre: "Tech",
    releaseYear: 2021,
    director: "Majid 105",
  },
  {
    id: 5,
    title: "Movie 3",
    genre: "Action",
    releaseYear: 2021,
    director: "Majid 106",
  },
  {
    id: 6,
    title: "Movie 4",
    genre: "Action",
    releaseYear: 2008,
    director: "Majid 107",
  },
];
const DynamicMoviesList = () => {
  const [movies, setMovies] = useState(data);
  const [genre, setGenre] = useState("");
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("title");

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGenre(e.target.value);
  };
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  let filteredMovies = movies.filter((movie) => {
    if (genre) {
      return movie.genre === genre;
    }
    return true;
  });

  if (sortOption) {
    filteredMovies = filteredMovies.sort((a, b) => {
      if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      } else {
        return a.releaseYear - b.releaseYear;
      }
    });
  }

  if (query) {
    filteredMovies = filteredMovies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query) ||
        movie.director.toLowerCase().includes(query)
    );
  }

  return (
    <div className=" text-slate-200 p-4 sm:p-8 w-full h-full overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-slate-100">
          Movie Collection
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative">
            <select
              onChange={handleFilterChange}
              value={genre}
              className=" bg-gray-800 focus:outline-1  text-slate-200 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none  w-full sm:w-auto"
            >
              <option value="">All Genres</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Tech">Technology</option>
            </select>
            <Filter
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none"
              size={18}
            />
          </div>

          <div className="relative">
            <select
              onChange={handleSortChange}
              value={sortOption}
              className=" bg-gray-800 focus:outline-1  text-slate-200 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none  w-full sm:w-auto"
            >
              <option value="title">Sort by Title</option>
              <option value="releaseYear">Sort by Release Year</option>
            </select>
            <SortAsc
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none"
              size={18}
            />
          </div>
          <div className="relative">
            <form className="flex focus-within:ring-1 ring-zinc-300 px-2 items-center bg-gray-800 py-1 gap-2  rounded-md">
              <input
                type="text"
                className="w-full text-zinc-200 py-1 px-2 outline-0 border-0"
                value={query}
                onChange={handleQueryChange}
              />
              <SearchIcon className="w-5 h-5 text-white" />
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transform-3d">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-stone-800 cursor-pointer rounded-lg shadow  transition-all duration-300 transform hover:scale-[1.025] hover:rotate-1"
            >
              <div className="relative aspect-video text-white">
                <img
                  src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(
                    movie.title
                  )}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <Play
                    className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
                    size={48}
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-100 mb-1 truncate">
                  {movie.title}
                </h3>
                <p className="text-sm text-slate-400">{movie.releaseYear}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicMoviesList;
