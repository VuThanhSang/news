import {
  FilmIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <div className="navbar__pc">
        <Image
          src="https://res.cloudinary.com/dgfsdhshs/image/upload/v1690972141/342361885_1380596292731006_4100003069245366268_n_pv89my.png"
          alt="logo"
          width={300}
          height={150}
          className="m-auto mt-5 mb-5"
        />
        <div className="flex justify-between items-center w-full h-16 bg-blue-700 ">
          <div className="w-10/12 flex justify-between items-center ml-auto mr-auto">
            <Link href="/">
              <button className="nav-category flex  ">
                <HomeIcon className="w-5 h-5 mr-3 text-[#DB9E55]" />
                <p className="text-[#DB9E55]"> Home </p>
              </button>
            </Link>
            <button className="nav-category">Garden</button>
            <button className="nav-category">Style</button>
            <button className="nav-category">Decor</button>
            <button className="nav-category">Holidays</button>
            <button className="nav-category">Wellness</button>
            <button className="nav-category">20 State Flower Garden</button>
            <button className="nav-category">News letter</button>
            <button className="nav-category">Shop</button>
            {/* <div className="nav-category w-0.5 h-16 bg-gray-500"></div> */}
            {/* <input
            type="text"
            placeholder="Search for"
            className="bg-blue-700 w-36 text-white border-0 h-[100%] focus:outline-none focus:border-none"
          /> */}
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 text-white mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="navbar__mobile hidden">
        <Image
          src="https://res.cloudinary.com/dgfsdhshs/image/upload/v1690972141/342361885_1380596292731006_4100003069245366268_n_pv89my.png"
          alt="logo"
          width={300}
          height={150}
          className="m-auto mt-5 mb-5"
        />
        <div className="flex justify-between items-center w-10/12 h-16 bg-blue-700 m-auto mt-5 rounded-xl">
          <button className="nav-category bg-blue-500 w-20 h-16 rounded-xl ">
            Home
          </button>
          <div className="flex">
            <input
              type="text"
              placeholder="Search for"
              className="bg-blue-700 w-36 text-white border-0 h-[100%] focus:outline-none focus:border-none"
            />
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 text-white mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
            {/* mở rộng  */}
            <FilmIcon className="ml-3 mr-3 text-base" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
