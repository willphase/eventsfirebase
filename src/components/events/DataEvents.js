import React, { Component } from "react";
import moment from "moment";

const API =
  "https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/9201059e-43ed-4369-885e-0b867652feac/resource/8900fdb2-7f6c-4f50-8581-b463311ff05d/download/festivals-and-events-json-feed.json";
// const DEFAULT_QUERY = "?id=9201059e-43ed-4369-885e-0b867652feac";
/*
      <ul>
        {hits.map(hit => (
          <li key={hit.calEvent.recId}>
            <a href={hit.calEvent.eventWebsite}>{hit.calEvent.eventName}</a>
          </li>
        ))}
      </ul>
      
*/
class DataEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: []
    };
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/9201059e-43ed-4369-885e-0b867652feac/resource/8900fdb2-7f6c-4f50-8581-b463311ff05d/download/festivals-and-events-json-feed.json"
    )
      .then(response => response.json())
      .then(data => this.setState({ hits: data.map(item => item.calEvent) }));
    console.log(this.state);
  }
  render() {
    const { hits } = this.state;
    console.log(hits);
    return (
      <div>
        {hits.slice(0, 90).map(hit => (
          <div className="card z-depth-0 event-summary">
            <div
              key={hit.recId}
              className="card-content grey-text text-darken-3"
            >
              <div className="content-eventlistimage">
                <img
                  alt={hit.eventName}
                  src={
                    hit.thumbImage
                      ? "https://secure.toronto.ca" + hit.thumbImage.url
                      : "https://via.placeholder.com/150"
                  }
                />
              </div>
              <div className="trythis">
                <div className="content-eventlist">
                  <span className="card-title">
                    <a href={hit.eventWebsite} target="blank">
                      {hit.eventName}
                    </a>
                  </span>
                  <p>{hit.description}</p>
                  <p className="grey-text">
                    {moment(hit.startDate).format("dddd, MMMM Do, h:mm a")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default DataEvents;
