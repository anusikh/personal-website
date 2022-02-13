import React from "react";
import "./styles/Authenticate.css";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";
import { dataContext } from "./context/dataContext";
import { useNavigate } from "react-router";

function Authenticate() {
  // Context Api
  const dataCon = React.useContext(dataContext);
  const navigate = useNavigate();
  const { dispatch2 } = dataCon;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch2({ type: "auth", payload: true });
        navigate("/editor");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  return (
    <div className="Authenticate__Container">
      <table>
        <tbody>
          <tr>
            <td>email</td>
            <td>
              <input
                className="Authenticate__Inputs"
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>password</td>
            <td>
              <input
                className="Authenticate__Inputs"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="Authenticate__Button"
        onClick={() => signIn(email, password)}
      >
        Login
      </button>
    </div>
  );
}

export default Authenticate;
