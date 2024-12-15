import {
  HiMiniBars4,
  HiOutlineBell,
  HiMiniChevronDown,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import DarkModeToggle from "./DarkModeToggle";
import FullScreen from "./FullScreen";

import { HiMenu } from "react-icons/hi";

const userNavigation = [
  { name: "Your profile", href: "/profile" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ setSidebarOpen, collapsed, setCollapsed }) => {
  return (
    <div>
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  border-b dark:border-neutral-600 bg-white dark:bg-neutral-800 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 dark:text-white lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <HiMiniBars4 className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="lg:block text-gray-500 dark:text-gray-400 focus:outline-none hidden"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="sr-only">Toggle sidebar</span>
          <HiMenu className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Separator */}
        <div
          className="h-6 w-px bg-gray-900/10 dark:bg-white/10 lg:hidden"
          aria-hidden="true"
        />

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          {/* <SearchTable /> */}
          {/* <form className="relative flex flex-1" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <HiMagnifyingGlass
              className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="block h-full w-full border-0 py-0 dark:bg-slate-800 dark:text-white pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:ring-offset-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
           
            />
          </form> */}
          <div className="flex-1 hidden max-w-xs m-auto sm:block">
            <label htmlFor="" className="sr-only">
              {" "}
              Search{" "}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <HiMagnifyingGlass
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>

              <input
                type="search"
                name=""
                id=""
                className="block w-full py-2 pl-10 border dark:bg-neutral-700 border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                placeholder="Type to search"
              />
            </div>
          </div>
          {/* Separator */}

          <div className="flex flex-1 justify-end items-center gap-x-4 lg:gap-x-6">
            <div
              className="h-6 w-px bg-gray-900/10 dark:bg-white/10 lg:hidden"
              aria-hidden="true"
            />
            <FullScreen />

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 dark:bg-white/10 lg:hidden"
              aria-hidden="true"
            />

            <DarkModeToggle />

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 dark:bg-white/10 lg:hidden"
              aria-hidden="true"
            />

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="-m-1.5 flex items-center p-1.5">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full bg-gray-50"
                  src={`https://ui-avatars.com/api/?name=Admin&background=random&size=40`}
                  alt=""
                />
              </MenuButton>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white dark:bg-neutral-800 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900 dark:text-white"
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
