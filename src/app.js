import React, { Component } from "react";
import CardList from "./cradlist";
import { robo } from "./robo";
import Searchbox from "./searchbox";

const state = {
  robots: robo,
  searchfield: "",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robo,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    const filteredRobots = this.state.robots.filter((rb) => {
      return rb.name
        .toLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });
    console.log(filteredRobots);
  };

  render() {
    return (
      <div className="tc">
        <h1>Friendly BOTS</h1>
        <Searchbox searchange={this.onSearchChange} />
        <CardList robots={this.state.robo} />
      </div>
    );
  }
}

export default App;
