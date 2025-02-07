import { Link } from "react-router-dom";

const Card = ({ item, animation }) => {
  const { project_name, id, description, image, live_link } = item;
  return (
    <div data-aos={animation}>
      <div className="group relative w-full">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative p-5 z-10 h-[410px] flex flex-col justify-between">
            <div>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt=""
                  className="w-full h-44 min-h-44 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 space-y-3">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  {project_name}
                </h3>
                <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <Link
                to={live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <span className="text-sm font-medium">Live Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-external-link w-4 h-4"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </Link>
              <Link
                to={`/viewDetails/${id}`}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                href="/project/67a0d2f569b5d975f5820a86"
              >
                <span className="text-sm font-medium">Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
