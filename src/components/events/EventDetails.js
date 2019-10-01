import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

function EventDetails(props) {
  const { event, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (event) {
    return (
      <div className="container section event-details">
        <div className="card z-depth-0">
          <div className="card-content content-eventdetails">
            <div>
              <img alt={event.image} src={event.imageURL} />
            </div>
            <div>
              <span className="card-title">{event.title}</span>
              <p>{event.content}</p>
              <div className="grey lighten-4 grey-text">
                <div>
                  Posted by {event.authorFirstName} {event.authorLastName}
                </div>
                <div>{moment(event.createdAt.toDate()).calendar()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Project Loading...</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const events = state.firestore.data.events;
  const event = events ? events[id] : null;
  return {
    event: event,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "events" }])
)(EventDetails);
