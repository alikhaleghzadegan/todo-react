import "./anojstyle.css";
import React from "react";
import Form from "./components/NewTaskForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
/>;

function App() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="profile">
            <h3>Hello, John!</h3>
          </div>
          <h3 id="logout">Log out</h3>
        </div>
      </header>
      <main>
        <h1>John's To Do List!</h1>
        <Form />
      </main>
    </div>
  );
}

export default App;
