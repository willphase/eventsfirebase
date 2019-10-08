import React, { Component } from "react";

const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

class DataEventsWorking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: []
    };
  }
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
    console.log(this.state);
  }
  render() {
    const { hits } = this.state;
    console.log(hits);
    return (
      <ul>
        {hits.map(hit => (
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        ))}
      </ul>
    );
  }
}
export default DataEventsWorking;
