import React from "react";

const title = React.createElement("h1", { className: "title", style: { color: "green" } }, "Conditional Rendering");



function Column() {
    return (
        <div className="column">
            {title}

        </div>
    );
}

class ConditionalRendering extends React.Component {
    render() {
        return Column();
    }

}

export default ConditionalRendering;