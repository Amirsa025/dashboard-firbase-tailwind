import React,{useContext} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {  auth } from "../../firebase";
import {useNavigate} from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext"
const Login = () => {
  const [error, setError] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext)
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user)
        navigate("/")
        dispatch({type:"LOGIN", payload:user})
      })
      .catch(() => {
       setError(true)
      });
  };
  return (
    <div className="login h-screen flex flex-col justify-center items-center">
      <h1 className="mb-4 text-3xl font-bold ">Login</h1>
      <form action="" className="flex flex-col" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          className="border border-gray-600 rounded-lg p-2 mb-3 outline-0"
          onChange={(event)=>setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="border border-gray-600 rounded-lg p-2 outline-0"
          onChange={(event)=>setPassword(event.target.value)}
        />
        <button className="btn w-52 h-8 bg-purple-700 mt-4 text-gray-100 rounded-lg ">
          submit
        </button>
        {error && (
          <span className="text-xs text-center mt-3  text-red-400 font-semibold ">
            {" "}
            Wrong email or password!!!!
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
