import React, { Component } from "react";
import NavMenu from "./NavMenu";

export default function Layout(props: any) {

  return (
      <div className="flex flex-col items-center regular-text-color">

        <NavMenu />

        <main className="container flex flex-col items-center w-3/4 px-2 py-3">
          <div className="flex flex-col items-center px-4">
            {props.children}
          </div>
        </main>

      </div>
  );
}
