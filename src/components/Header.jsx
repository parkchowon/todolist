import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <p className="title">To Do List</p>
      <div className="wrapper">
        <div className="input-container">
          <input className="input" />
          <button className="register-btn">등록</button>
        </div>
        <button className="change-btn">변경</button>
      </div>
    </div>
  );
}

export default Header;
