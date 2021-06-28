import Todos from "./Todos";
import AddTodo from "./AddTodo";
import React, { Component } from "react";
import { TodoData } from "./TodoData";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoLists: TodoData
    };
  }

  handleAddTodo = (getItem, currentTodoList) => {
    currentTodoList.push(getItem);
    this.setState({ newlist: currentTodoList });
  };

  handleToggleTodo = (getTodo) => {
    const updateDone = !getTodo.done;
    getTodo.done = updateDone;
    this.setState(getTodo);
  };

  render() {
    let d = new Date(); // Get current date

    let day = new Array(7); // Create array of days
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednesday";
    day[4] = "Thursday";
    day[5] = "Friday";
    day[6] = "Saturday";

    /* Extract day from date as number and find matching index from array */
    let n = day[d.getDay()];

    // Create a variable to store selected todo list
    let todo;

    // Test which todo list based on current day and set the correct list to the variable
    if (n === "Monday") {
      todo = (
        <Todos
          todolists={this.state.TodoLists.TodoList1}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoLists.TodoList1;
    } else if (n === "Tuesday") {
      todo = (
        <Todos
          todolists={this.state.TodoLists.TodoList2}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoLists.TodoList2;
    } else if (n === "Wednesday") {
      todo = (
        <Todos
          todolists={this.state.TodoLists.TodoList3}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoLists.TodoList3;
    } else if (n === "Thursday") {
      todo = (
        <Todos
          todolists={this.state.TodoLists.TodoList4}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoLists.TodoList4;
    } else if (n === "Friday") {
      todo = (
        <Todos
          todolists={this.state.TodoLists.TodoList5}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoLists.TodoList5;
    } else if (n === "Saturday") {
      todo = (
        <Todos
          todolists={this.state.TodoLists.TodoList6}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoLists.TodoList6;
    } else if (n === "Sunday") {
      todo = (
        <Todos
          todolists={this.state.TodoLists.TodoList7}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoLists.TodoList7;
    }

    return (
      <div className="App">
        <h1>
          <span className="d-flex justify-content-center text-warning">
            {n}'s
          </span>
          Todo List
        </h1>
        {/* <TodoList1 /> */}
        {/* <TodoList2 /> */}
        {/* Render the variable that contains the todo component calling */}
        {todo}
        <AddTodo addItem={this.handleAddTodo} currentList={this.currentList} />
      </div>
    );
  }
}

export default Home;
