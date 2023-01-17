import React from "react";

const title = React.createElement("h1", { className: "title", style: { color: "red" } }, "Handling Events");

class Form extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}
class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
    }
    // This syntax ensures `this` is bound within handleClick.
    toggleThis = () => {
        if (!this.state.isToggleOn) {
            console.log("Button is toggled on");
        }
        else {
            console.log("Button is toggled off");
        }
        this.setState({ isToggleOn: !this.state.isToggleOn });
        console.log(!this.state.isToggleOn);

    }
    render() {
        return (
            <div>
                <button onClick={this.toggleThis}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
            </div>
        );
    }
}

function Column() {
    return (
        <div className="column">
            {title}
            <Form />
            <ToggleButton />

        </div>
    );
}

class EventPrint extends React.Component {
    render() {
        return Column();
    }

}

export default EventPrint;