import "./styles.css";
import React, { Component } from "react";
import { TodoData } from "./TodoData";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";

// export default function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "asc",
      listNum: "",
      TodoLists: TodoData
    };
  }

  onSort = (listNum, sortType) => {
    listNum.sort((a, b) => {
      const isReversed = sortType === "asc" ? 1 : -1;
      return isReversed * a.text.localeCompare(b.text);
    });
    this.setState({ sortType });
  };

  render() {
    return (
      {},
      (
        <div className="App text-secondary">
          <Nav
            lists1={this.state.TodoLists.TodoList1}
            lists2={this.state.TodoLists.TodoList2}
            lists3={this.state.TodoLists.TodoList3}
            lists4={this.state.TodoLists.TodoList4}
            lists5={this.state.TodoLists.TodoList5}
            lists6={this.state.TodoLists.TodoList6}
            lists7={this.state.TodoLists.TodoList7}
            sortType={this.state.sortType}
            listNum={this.state.listNum}
            onSort={this.onSort}
          />
        </div>
      )
    );
  }
}

export default App;
