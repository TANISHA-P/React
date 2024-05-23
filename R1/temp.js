import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));
const firstLine = <h1>Hello Moto</h1>

const TempComp = () => (
    <div id = "t1">
        <Title/>
        {Title()}
        {temp}
        <h1> Hi</h1>
        <div className="t2">
            <h2>Myself Tanisha</h2>
        </div>
    </div>
);

const Title = () => <h1>I am Title</h1>;
const temp = (
    <div id = "tx">
        <h1> Hi</h1>
        <div className="ty">
            <h2>Myself Tanisha</h2>
        </div>
    </div>
)

root.render(<TempComp/>);