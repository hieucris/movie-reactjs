import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-2 dark:bg-gray-800 dark:text-gray-100 bg-black bg-opacity-40 text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="123"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://statics.vincom.com.vn/http/vincom-ho/anh_logo_vincom/logo.png/a1a7d00fa868bf6d0919727d6bf52998.webp"
            style={{ width: "50px" }}
            alt="123"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              rel="noopener noreferrer"
              href="123"
              className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              activeClassName="border-b-2 border-white"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/movies"
              rel="noopener noreferrer"
              href="123"
              className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              activeClassName="border-b-2 border-white"
            >
              Movies
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/tvshows"
              rel="noopener noreferrer"
              href="123"
              className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              activeClassName="border-b-2 border-white"
            >
              TV Shows
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contacts"
              rel="noopener noreferrer"
              href="123"
              className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              activeClassName="border-b-2 border-white"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
