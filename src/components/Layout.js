import React, { Component } from "react";
import { NavMenu } from "./NavMenu";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="flex flex-col items-center">

        <NavMenu />

        <div className="container flex flex-col items-center">
          <main className="w-3/4 px-2 py-3">
            <div className="flex flex-col items-center px-4">
              {this.props.children}
            </div>
          </main>
        </div>

      </div>
    );
  }
}
