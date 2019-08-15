import React, { Component } from 'react'
import { connect } from "react-redux";

export class Landing extends Component {

  render() {
    const { isAuthenticated } = this.props.auth;
    const greetByName = (
      <>
        <h3>Welcome to MERN STARTER, {this.props.auth.user.name}</h3>
        <p>start building 👷‍♂️🏗🚧</p>
      </>
    );

    const greetGuest = (
      <>
        <h3>Welcome to MERN STARTER</h3>
        <p>start building 👷‍♂️🏗🚧</p>
      </>
    );

    return (
      <div className="welcome">
        { isAuthenticated ? greetByName : greetGuest }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
)(Landing);
