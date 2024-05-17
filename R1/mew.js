const heading = React.createElement(
    "h1",
    {id : "currheading"}, // these brackets hold the attributes list
    "Hi from react");
const heading2 = React.createElement("h5",{},"small data");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);