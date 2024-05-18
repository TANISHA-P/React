const heading = React.createElement(
    "h1",
    {id : "currheading"}, // these brackets hold the attributes list
    "Hi from react");
const heading2 = React.createElement("h5",{},"small data");
const root = ReactDOM.createRoot(document.getElementById("root"));

// creating a DOM structure
// <div>
//      <div>
//          <h1> I am h1 tag </h1>
//      </div>
// </div>


const parentdiv = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child"},
        [ React.createElement(
            "h1",
            {},
            "I am h1 tag"
        ),
        React.createElement(
            "h1",
            {},
            "I am sibling of previous h1"
        ) ]
    )
)
root.render(parentdiv);