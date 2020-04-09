import React from "react";

const Todos = ({ props, deleteTodos }) => {
  //   {
  //     console.log(props);
  //   }
  const todoList = props.length ? (
    props.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodos(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no todo's left.Wohoo!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
