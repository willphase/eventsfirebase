import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../../store/actions/eventActions";
import { Redirect } from "react-router-dom";
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";

class CreateEvent extends Component {
  state = {
    title: "",
    content: "",
    image: "",
    imageURL: "",
    progress: 0
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createEvent(this.state);
    this.props.history.push("/");
  };
  handleUploadStart = () => {
    this.setState({
      progress: 0
    });
  };
  handleUploadSuccess = filename => {
    this.setState({
      image: filename,
      progress: 100
    });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url =>
        this.setState({
          imageURL: url
        })
      );
  };

  render() {
    console.log(this.state);
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Event</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Event Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <FileUploader
              accept="image/*"
              name="image"
              storageRef={firebase.storage().ref("images")}
              onUploadStart={this.handleUploadStart}
              onUploadSuccess={this.handleUploadSuccess}
            />
          </div>
          <div className="formimage">
            <label htmlFor="image">Image</label>
            {this.state.image && (
              <img alt={this.state.image} src={this.state.imageURL} />
            )}
          </div>
          <div className="input-field">
            <button className="btn pink ligten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: event => dispatch(createEvent(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent);
