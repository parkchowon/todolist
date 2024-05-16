import { useEffect, useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [todolist, setTodolist] = useState(() => {
    const storage = localStorage.getItem("todolist");
    return !storage ? [] : JSON.parse(storage);
  });
  const [text, setText] = useState("");
  const [warningText, setWarningText] = useState("");

  //todolist 값이 변할 때 리렌더링
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  //form 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    inputVerify(e);
  };

  //input 값
  const handleInput = (e) => {
    setWarningText("");
    setText(e.target.value);
  };

  //유효성 검사
  const inputVerify = (e) => {
    const value = e.target.input.value;
    if (value === "") {
      setWarningText("빈칸입니다.");
    } else if (value.length > 30) {
      setWarningText("너무 깁니다");
    } else {
      console.log(e);
      const item = {
        id: Date.now(),
        todolist: value,
        isDone: false,
      };
      setTodolist([...todolist, item]);
      setText("");
      window.location.reload();
    }
  };

  return (
    <div className="header">
      <p className="title">To Do List</p>
      <div className="wrapper">
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <input
              value={text}
              className="input"
              name="input"
              onChange={handleInput}
              autoComplete="off"
              placeholder="할 일을 등록하세요!"
            />
            <button className="register-btn">등록</button>
          </form>
        </div>
      </div>
      <p className="warning-text">{warningText}</p>
    </div>
  );
};

export default Header;
