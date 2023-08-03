import { MagnifyingGlassCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <Image
        src="https://res.cloudinary.com/dgfsdhshs/image/upload/v1690972141/342361885_1380596292731006_4100003069245366268_n_pv89my.png"
        alt="logo"
        width={200}
        height={100}
        className="ml-28"
      />
      <div className="flex  items-center w-10/12 h-16 bg-blue-700 m-auto rounded-xl">
        <button className="nav-category bg-blue-500 w-20 h-16 rounded-xl ">
          Home
        </button>
        <button className="nav-category">Garden</button>
        <button className="nav-category">Style</button>
        <button className="nav-category">Decor</button>
        <button className="nav-category">Holidays</button>
        <button className="nav-category">Wellness</button>
        <button className="nav-category">20 State Flower Garden</button>
        <button className="nav-category">News letter</button>
        <button className="nav-category">Shop</button>
        <div className="nav-category w-0.5 h-16 bg-gray-500"></div>
        <input
          type="text"
          placeholder="Search for"
          className="bg-blue-700 w-36 text-white border-0"
        />
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-5 text-white "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
