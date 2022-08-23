import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //   name: { firstName: "Mohsin", lastName: "Ali" },
      //   company: "The Hexaa",
      monsters: [
        // {
        //   id: "2wefgbn",
        //   name: "Linda",
        // },
        // {
        //   id: "098uhnn",
        //   name: "Frank",
        // },
        // {
        //   id: "mnbvftu",
        //   name: "Jacky",
        // },
        // {
        //   id: "56yghbn",
        //   name: "Andrew",
        // },
      ],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return { name: { firstName: "Ahmed", lastName: "Ali" } };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header> */}
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className={"monsters-search-box"}
          placeholder={"search monster"}
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
