import { useState } from "react";
import "./App.css";

function App() {
  let [email, setemail] = useState("");
  let [passward, setpassward] = useState("");
  let [femail, setfemail] = useState("");
  let [fpassward, setfpassward] = useState("");

  function channgehandler(e) {
    setemail(e.target.value);
  }
  function channgehandler1(e1) {
    setpassward(e1.target.value);
  }

  function submithandler(e) {
    e.preventDefault();
    setfemail(email);
    setfpassward(passward);
    setemail("");
    setpassward("");
  }

  return (
    <form onSubmit={submithandler}>
      <fieldset className="main">
        <lable>Email:-</lable>
        <input
          type="email"
          className="input"
          onChange={channgehandler}
          value={email}
        />
        <br />
        <lable>Passward:-</lable>
        <input
          type="passward"
          className="input"
          onChange={channgehandler1}
          value={passward}
        />
        <br />
        <input type="submit" className="input input1" value="Login" />
      </fieldset>
      <div className="data">
        <h4>data</h4>
        <p>
          <span>Email:-</span>
          {femail}
        </p>
        <p>
          <span>Passward:-</span>
          {fpassward}
        </p>
      </div>
    </form>
  );
}

export default App;
