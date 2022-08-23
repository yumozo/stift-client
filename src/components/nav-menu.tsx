import { useState } from "react";
import DropDown from "./dropdown";
import { Link } from "react-router-dom";

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
                    fixed flex flex-wrap
                    items-center justify-between"
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
          <div className="flex w-12 justify-between items-center">
            {/* <ToggleThemeButton /> */}
            <DropDown />
          </div>
        </div>
      </div>
    </nav>
  );
}
