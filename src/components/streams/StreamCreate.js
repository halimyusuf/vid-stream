import React, { Component } from "react";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";
import { createStream } from "../../actions";

class StreamCreate extends Component {
  onSubmit = (formObj) => {
    this.props.createStream(formObj);
  };

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm btnTxt="Create Stream" onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
