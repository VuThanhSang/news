"use client";
import {
  CalendarIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

// dateString = 'Wednesday, 2 August 2023'
const Header = () => {
  const [language, setLanguage] = useState(false);
  const [mode, setMode] = useState("light");
  const getDateString = (date: Date) => {
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    return `${day}, ${dayOfMonth} ${month} ${year}`;
  };
  const date = new Date(Date.now());

  return (
    <div className="flex justify-center space-x-12  mt-3 ">
      <div className="flex space-x-1">
        <SunIcon className="w-5" />
        <h3 className="text-sm mt-2">29</h3>
        <h3 className="text-sm mt-2">Tp.HCM</h3>
      </div>
      <div className="flex space-x-1">
        <CalendarIcon className="w-5" />
        <h3 className="text-sm mt-2">{getDateString(date)}</h3>
      </div>
      <button className="bg-blue-700 text-white p-2  rounded text-sm ">
        Breaking News
      </button>
      <h3 className="text-xs mt-3">Cập nhật xu hướng hoa mới nhất</h3>
      {/* swap language */}
      <div
        className=" cursor-pointer w-32 rounded-xl h-6 mt-2 border-4 border-slate-950 border-opacity-80 items-center"
        onClick={() => {
          setLanguage(!language);
        }}
      >
        <div className="flex justify-between">
          <p className="text-xs ml-3 ">
            <strong> Ngôn Ngữ</strong>
          </p>
          <ChevronDownIcon className="w-5 " />
        </div>
        {language && (
          <div className="flex flex-col justify-center mt-1 border-2 border-slate-950 z-50">
            <button className="border-2">Tiếng việt</button>
            <button>English</button>
          </div>
        )}
      </div>
      {/* dark mode light mode */}
      {mode === "light" && (
        <div
          className="flex items-center cursor-pointer w-12 rounded-xl h-6 mt-2 bg-slate-400"
          onClick={() => {
            setMode("dark");
          }}
        >
          <SunIcon className="rounded-full bg-white w-5 m-0.5" />
        </div>
      )}
      {mode === "dark" && (
        <div
          className="flex items-center justify-end cursor-pointer w-12 rounded-xl h-6 mt-2 bg-gray-500"
          onClick={() => {
            setMode("light");
          }}
        >
          <MoonIcon className="rounded-full bg-gray-900 w-5 m-0.5 text-white" />
        </div>
      )}
    </div>
  );
};
export default Header;
