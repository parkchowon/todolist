import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import "../styles/CardListItem.css";

const CardListItem = (props) => {
  const [todolist, setTodolist] = useState(() => {
    const storage = localStorage.getItem("todolist");
    return !storage ? [] : JSON.parse(storage);
  });
  const index = todolist.findIndex((item) => item.id === props.id);

  //todolist 값이 변할 때 리렌더링
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  //완료,취소 버튼 누를 시
  const handleClickDone = () => {
    todolist[index].isDone ? changeState(false) : changeState(true);
  };

  //삭제하기
  const handleClickRemove = () => {
    console.log(props.id);
    const removeList = todolist.filter((item) => item.id !== props.id);
    setTodolist([...removeList]);
    window.location.reload();
  };

  //상태 바꾸기
  const changeState = (value) => {
    let changeList = [...todolist];
    changeList[index].isDone = value;
    setTodolist(changeList);
    window.location.reload();
  };

  return (
    <div className="card-div">
      <p className="card-todo">{props.todolist}</p>
      <IoMdCloseCircle
        className="card-close-btn"
        size="23"
        onClick={handleClickRemove}
      />
      <button className="card-done-btn" onClick={handleClickDone}>
        {props.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
};

export default CardListItem;
