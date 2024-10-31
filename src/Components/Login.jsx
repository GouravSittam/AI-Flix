import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../Utils/validate";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data

    

    const nameValue = signInForm ? null : name.current.value;
    const message = checkValidData(email.current.value, password.current.value, nameValue);
    setErrorMessage(message);
    // console.log(message);
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(nameValue);
    //sign in  / signup
  };

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {signInForm ? "Sign In" : "Sign up"}
        </h1>
        {!signInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 text-lg py-2">{errorMessage}</p>
        <button
          className=" bg-red-700 p-4 my-6 w-full"
          onClick={handleButtonClick}
        >
          {signInForm ? "Sign In" : "Sign up"}
        </button>
        <p
          className="text-sm text-gray-500 py-4 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {signInForm
            ? "New to Netflix? Sign up Now"
            : "Already registred? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
