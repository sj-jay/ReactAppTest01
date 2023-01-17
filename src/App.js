import React from 'react';
import './App.css';


// ---------------------------------------------------------------------------------------
/* ---Components and Props--- */
function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name} />
  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
function CommentFunction() {
  return <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />;

}

// -----------------------------------------------------------------------------
/* ---State and Lifecycle--- */



class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  // LifeCycle methods

  componentDidMount() { //runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
    this.timerID = setInterval(() =>
      this.tick(), 1000);//this method called tick() will runs every second.
    //It will use this.setState() to schedule updates to the component local state:
  }

  componentWillUnmount() {//this will tear down the timer when the component is unmounted
    clearInterval(this.timerID);
  }

  // Timer
  tick() {
    this.setState({
      date: new Date()
    })
  }


  render() {
    return (
      <div className="Clock">
        <h1>Hello, This is Clock....</h1>
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}

function FormattedDate(props) {
  return <h2>Time Now Is : {props.date.toLocaleTimeString()}.</h2>
}



// -----------------------------------------------------------------------------
// Main App Component
function Column() {
  const column = [CommentFunction(), <Clock />];
  return column;
}

function App() {
  return Column();
}



export default App;
