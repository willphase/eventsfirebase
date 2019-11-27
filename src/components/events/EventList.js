import React from "react";
import EventSummary from "./EventSummary";
import { Link } from "react-router-dom";

const EventList = ({ events }) => {
  console.log("Here are the events");
  console.log(events);
  return (
    <div className="event-list section">
      {events &&
        events.map(event => {
          return (
            <Link to={"/event/" + event.id} key={event.id}>
              <EventSummary event={event} />
            </Link>
          );
        })}
    </div>
  );
};

export default EventList;
