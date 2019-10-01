const initState = {
  events: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  ]
};
const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      console.log("created event", action.event);
      return state;
    case "CREATE_EVENT_ERROR":
      console.log("create event error", action.err);
      return state;
    default:
      return state;
  }
};

export default eventReducer;
