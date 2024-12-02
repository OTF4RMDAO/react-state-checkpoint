import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "Josh Oluwatobi",
        bio: "A passionate developer who loves React.",
        imgSrc: "https://bestarion.com/wp-content/uploads/2021/03/Web-Developer.jpg",
        profession: "Software Engineer"
      },
      shows: false,
      timeSinceMounted: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { Person, shows, timeSinceMounted } = this.state;
    return (
      <div className="App">
        <h1>React State Checkpoint</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div>
            <img src={Person.imgSrc} alt="Profile" />
            <h2>{Person.fullName}</h2>
            <p>{Person.bio}</p>
            <h3>{Person.profession}</h3>
          </div>
        )}
        <p>Time since component mounted: {timeSinceMounted}s</p>
      </div>
    );
  }
}

export default App;
