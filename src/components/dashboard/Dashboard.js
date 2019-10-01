import React, { Component } from "react";
import EventList from "../events/EventList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { events, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6" />
          <EventList events={events} />
          <div className="col s12 m5 offset-m1" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    events: state.firestore.ordered.events,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "events", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
