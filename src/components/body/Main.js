import React, { Component } from "react";
import "../../styles/main.scss";
import Pagination from "../pagination/Pagination"; 
import {  toast } from 'react-toastify';


class Main extends Component {
  handleDelete = (item) => {
    this.props.deleteTodo(item);
    toast.warning("Delete success!")

  };

  render() {
    let { listTodos } = this.props;
    return (
      <div className="main">
        <div className="body">
        {listTodos.reverse().map((item) => {
          return (
            <div className="main__item" key={item.id}>
              <div className="main__item--todo">
                <input type="checkbox" />
                <p>{item.todos}</p>
              </div>
              <div className="main__item--Icon">
                <span><i className="fa-solid fa-pen-to-square"></i></span>
                <span onClick={() => this.handleDelete(item)}><i className="fa-solid fa-trash-can"></i></span>
              </div>
            </div>
          );
        })}
        </div>
        <Pagination />
      </div>
    );
  }
}

export default Main;
