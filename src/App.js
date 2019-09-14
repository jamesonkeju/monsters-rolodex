import React, { Component } from "react";
import CardList from "./components/card-list/card-list-component";
import "./App.css";
import Search from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super();

    // this will give you access to the state props

    this.state = {
      monsters: [],
      searchFiled: "",
      totalCount: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchFiled: e.target.value });
  };

  render() {
    const { monsters, searchFiled } = this.state;
    const filterRequest = monsters.filter(
      monster =>
        monster.name.toLowerCase().includes(searchFiled.toLowerCase()) ||
        monster.email.toLowerCase().includes(searchFiled.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <React.Fragment>
          <Search
            placeHolder="Fetch Your Monster"
            handleChange={this.handleChange}
            totalCount={filterRequest.length}
          ></Search>

          <CardList monsters={filterRequest} />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
