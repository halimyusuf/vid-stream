import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import StreamForm from "./StreamForm";
import { editStream, fetchStream } from "../../actions";

class StreamEdit extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  onSubmit = (formObj) => {
    const id = this.props.match.params.id;
    this.props.editStream(id, formObj);
    this.props.history.push("/");
  };

  renderForm = () => {
    const { stream } = this.props;
    if (stream) {
      return (
        <StreamForm
          onSubmit={this.onSubmit}
          btnTxt="Edit Stream"
          initialValues={_.pick(stream, "title", "description")}
        />
      );
    }
  };

  render() {
    // console.log(_.pick(stream, "title", "description"));

    return (
      <div>
        Stream Edit
        {this.renderForm()}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
