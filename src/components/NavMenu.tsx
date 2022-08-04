import React, { Component, useState } from "react";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import ToggleThemeButton from "./ToggleTheme";
import { DotsVerticalIcon, PencilIcon } from "@heroicons/react/solid";

export default function NavMenu() {

  const [state, setState] = useState({
    collapsed: true,
  });

  const toggleNavbar = () => {
    setState({
      collapsed: !state.collapsed,
    });
  }

  return (
    // <header>
    <nav className="xl:w-1/2 w-3/5
                    relative flex flex-wrap
                    items-center justify-between
                    mb-3
                    bg-[#00000000]"
    >
      <div className="container
                      flex flex-wrap
                      items-center justify-between
                      px-6 py-4"

      >
        <div className="w-full relative flex justify-between items-center">
          <Link className="pl-0 xl:pl-8
              text-2xl font-bold leading-relaxed whitespace-nowrap"
            id="logo"
            to="/"
          >
            Stift
          </Link>
          <div className="flex w-24 justify-between items-center">
            <ToggleThemeButton />
            <DropDown />
          </div>
        </div>
      </div>
    </nav>
  );
}
