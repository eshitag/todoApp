import React, { Component } from "react";
// import Todos from "./Todos";
// import Form from "./Form";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";

class App extends Component {
  // state = {
  //   todos: [
  //     { id: 1, content: "buy groceries" },
  //     { id: 2, content: "go for a walk" },
  //     { id: 3, content: "make a todo App" },
  //   ],
  // };

  // deleteTodo = (id) => {
  //   const todos = this.state.todos.filter((todo) => {
  //     return todo.id !== id;
  //   });

  //   this.setState({
  //     todos: todos,
  //   });
  // };

  // addTodo = (todo) => {
  //   todo.id = Math.random();
  //   let todos = [...this.state.todos, todo];
  //   this.setState({
  //     todos: todos,
  //   });
  // };

  render() {
    console.log("in App-component!");
    return (
      // <div className="container">
      //   <h1 className="center blue-text">Todo's</h1>
      //   <Todos props={this.state.todos} deleteTodos={this.deleteTodo} />
      //   <Form addTodo={this.addTodo} />
      // </div>
      <div>
        <AddTodo />
        {console.log("AddTodo-component called!")}
        <VisibleTodoList />
        {console.log("VisibleTodoList-component called!")}
        <Footer />
        {console.log("Footer-component called!")}
      </div>
    );
  }
}

export default App;
