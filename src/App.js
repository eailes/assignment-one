import React, { Component } from "react";
import "./App.css";

import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    heroes: [
      {
        username: "Super-Man",
        quote: "I'm here to fight for truth, and justice, and the American way."
      },
      {
        username: "Bat-Man",
        quote: "You wanna get nuts? Come on! Let's get nuts!"
      },
      {
        username: "Spider-Man",
        quote: "This is my gift, my curse. Who am I? I'm Spider-man."
      }
    ]
  };

  changeUsernameHandler = event => {
    let clone = Object.assign({}, this.state.heroes);
    clone[0].username = event.target.value;
    this.setState({ clone });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          username={this.state.heroes[0].username}
          change={this.changeUsernameHandler}
        />
        {this.state.heroes.map((hero, i) => (
          <UserOutput username={hero.username} paragraph={hero.quote} key={i} />
        ))}
      </div>
    );
  }
}

export default App;
