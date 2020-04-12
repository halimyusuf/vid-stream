import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions/index";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => (
    <div>
      {this.props.streams.map((stream) => (
        <div className="list-group-item" key={stream.id}>
          <Link to={`/streams/show/${stream.id}`}>
            <h3 className="mb-1">{stream.title}</h3>
          </Link>
          <p className="mb-1">{stream.description}</p>
        </div>
      ))}
    </div>
  );

  loading = () => <div>loading...</div>;
  render() {
    const { streams } = this.props;
    return (
      <div className="list-group">
        <div>
          <h1>Stream List</h1>
        </div>
        <Link to="/streams/new">
          <button
            style={{ float: "right", position: "relative", top: "-60px" }}
            className="btn btn-primary lg"
          >
            Create Stream
          </button>
        </Link>
        {streams.length < 0 && this.loading()}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
