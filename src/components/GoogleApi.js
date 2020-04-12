import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleApi extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "216791221766-opn3rujr9o0s3c7lqclkkugjcpntpnfh.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.getAuthStatus(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(() =>
            this.getAuthStatus(this.auth.isSignedIn.get())
          );
        });
    });
  }

  getAuthStatus = (signIn) => {
    signIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  signIn = () => {
    this.auth.signIn();
  };

  signOut = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    return !this.props.signedIn ? "signIn" : "signOut";
  };

  render() {
    console.log(this.props);

    const btn = this.renderAuthButton();
    return (
      <div>
        <button className="btn btn-primary" onClick={this[btn]}>
          {" "}
          {btn}{" "}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { signedIn: state.auth.signedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleApi);
