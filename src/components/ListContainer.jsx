import { useState } from "react";
import "../styles/ListContainer.css";
import CardListItem from "./CardListItem";

const ListContainer = (props) => {
  const [todolist] = useState(() => {
    const storage = localStorage.getItem("todolist");
    return !storage ? [] : JSON.parse(storage);
  });

  const list = todolist.filter((item) => {
    return item.isDone === props.isDone;
  });

  return (
    <div className="list-container">
      <p className="state-text">{props.working}</p>
      <div className="item-container">
        {list.map((item) => {
          return (
            <CardListItem
              key={item.id}
              id={item.id}
              todolist={item.todolist}
              isDone={props.isDone}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListContainer;
