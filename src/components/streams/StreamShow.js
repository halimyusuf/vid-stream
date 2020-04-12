import React, { Component } from "react";
import { connect } from "react-redux";
import flv from "flv.js";
import { fetchStream } from "../../actions";

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    let flvPlayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    flvPlayer.attachMediaElement(this.videoRef.current);
    flvPlayer.load();
    this.props.fetchStream(id);
  }

  render() {
    const { stream } = this.props;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{stream && stream.title}</h1>
        <p>{stream && stream.description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
