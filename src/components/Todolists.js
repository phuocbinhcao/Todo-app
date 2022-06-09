import React, { Component } from "react";
import Main from "./body/Main";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import '../styles/todolist.scss'

class Todolists extends Component {
  state = {
    listTodos: [
      { id: 1, todos: "Công việc 1",status: false },
      { id: 2, todos: "Công việc 2",status: false },
      { id: 3, todos: "Công việc 3",status: false },
      { id: 4, todos: "Công việc 4",status: false },
      { id: 5, todos: "Công việc 5",status: false },
      { id: 6, todos: "Công việc 6",status: false },
    ],
    listTodoPagins: []
  };

  addNewTodo = (Todo) => {
    this.setState({
        listTodos: [...this.state.listTodos, Todo]
    })
  }
  deleteTodo = (Todo) => {
      let currentTodos = this.state.listTodos
      currentTodos= currentTodos.filter(item=> item.id !== Todo.id)
      this.setState({
          listTodos: currentTodos
      })
  }

  deleteAll = () => {
    this.setState({
      listTodos: []
    })
  }


  render() {
    return (
      <div className="todolist">
        <h1>Todolists application</h1>
        <Header addNewTodo={this.addNewTodo}/>
        <Main listTodos={this.state.listTodos} deleteTodo={this.deleteTodo}/>
        <Footer listTodos={this.state.listTodos} deleteAll={this.deleteAll}/>
      </div>
    );
  }
}

export default Todolists;
