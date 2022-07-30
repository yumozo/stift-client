import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="flex flex-col items-center">
        <NavMenu />
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}
