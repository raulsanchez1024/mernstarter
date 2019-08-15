import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

export class Nav extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link onClick={this.onLogoutClick.bind(this)}>Logout</Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul>
        <li>
          <Link to="/docs">
            Docs
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    );

    return (
      <nav>
        <div className="left">
          <Link to="/" className="logo">
            <h3>MERN STARTER</h3>
          </Link>
        </div>
        <div className="right">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Nav);
