import React from "react";
import moment from "moment";

const EventSummary = ({ event }) => {
  return (
    <div className="card z-depth-0 event-summary">
      <div className="card-content grey-text text-darken-3">
        <div>
          <img
            className="image-list"
            align="left"
            alt={event.image}
            src={event.imageURL}
          />
        </div>
        <div className="content-eventlist">
          <span className="card-title">{event.title}</span>
          <p>
            Posted by {event.authorFirstName} {event.authorLastName}
          </p>
          <p className="grey-text">
            {moment(event.createdAt.toDate()).calendar()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventSummary;
