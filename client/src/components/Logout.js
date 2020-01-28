import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authAction";
import { NavLink } from "reactstrap";
import PropTypes from "prop-types";

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  navStyle = {
    color: "white"
  };

  render() {
    return (
      <Fragment>
        <NavLink style={this.navStyle} onClick={this.props.logout} href="#">
          logout
        </NavLink>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
