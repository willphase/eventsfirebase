import React, { Component } from "react";
import EventList from "../events/EventList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import DataEventList from "../events/DataEventList";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  render() {
    const { events, auth } = this.props;
    console.log(events);
    let filteredEvents =
      events &&
      events.filter(event => {
        return event.title.indexOf(this.state.search) !== -1;
      });
    console.log("dashboard props", this.props);
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div>
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m5" />
          <EventList events={(events, filteredEvents)} />
          <div className="col s12 m5 offset-m5" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.firestore.ordered.events,
    auth: state.firebase.auth
  };
};

// orderBy: ["createdAt", "desc"]

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "events",
      // where: ["title", "==", "Yoga"],
      orderBy: ["createdAt", "desc"]
    }
  ])
)(Dashboard);
