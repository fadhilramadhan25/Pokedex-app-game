import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="sticky bottom-0 border-gray-200 bg-black px-2 py-2.5 sm:px-4">
      <div className="grid grid-flow-row auto-rows-max grid-cols-2">
        <Link
          className="flex flex-col items-center font-arcade text-xs text-white"
          to={"/home"}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            className="h-8 w-8 text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
          </svg>
          Home
        </Link>

        <Link
          className="flex flex-col items-center font-arcade text-xs text-white"
          to={"/mypokemon"}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="h-8 w-8 text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M14.5 12a2.5 2.5 0 01-5 0 2.5 2.5 0 015 0zm7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8z"></path>
          </svg>
          My Pokemon
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
