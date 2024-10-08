import React, { useMemo } from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

interface SidebarButton {
  title: string;
  icon: React.ReactNode;
  link: string;
}

function SideBar() {
  const sidebarMenuItems: SidebarButton[] = useMemo(
    () => [
      {
        title: "Home",
        icon: <BiHomeCircle />,
        link: "/",
      },
      {
        title: "Explore",
        icon: <BiHash />,
        link: "/explore",
      },
      {
        title: "Notifications",
        icon: <BsBell />,
        link: "/notifications",
      },
      {
        title: "Messages",
        icon: <BsEnvelope />,
        link: "/messages",
      },
      {
        title: "Bookmarks",
        icon: <BsBookmark />,
        link: "/bookmarks",
      },
      {
        title: "Profile",
        icon: <BiUser />,
        link: "/profile",
      },
      {
        title: "More Options",
        icon: <SlOptions />,
        link: "/more",
      },
    ],
    []
  );
  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="h-9 w-full cursor-pointer transition-all flex justify-center mt-2">
        <img
          src="https://i.ibb.co/YWRBhPX/Flick-Dark.png"
          alt="Logo"
          className="h-9 w-auto"
        />
      </div>

      <ul className="space-y-4">
        {sidebarMenuItems.map((item) => (
          <li key={item.title}>
            <Link
              className="flex items-center justify-center md:justify-start space-x-3 p-3 hover:bg-gray-200 rounded-full w-full"
              to={item.link}
            >
              <span className="text-2xl ">{item.icon}</span>
              <span className="hidden md:block">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-full mt-5">
        <button className="hidden sm:block bg-[#1d9bf0] font-semibold text-lg py-2 px-4 rounded-full w-full">
          Create Post
        </button>
        <button className=" sm:hidden bg-[#1d9bf0] font-semibold text-lg py-2 rounded-full w-full flex justify-center">
          <IoMdAddCircle />
        </button>
      </div>
    </div>
  );
}

export default SideBar;
