import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

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
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {signInForm ? "Sign In" : "Sign up"}
        </h1>
        {!signInForm && (
          <input
            type="test"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className=" bg-red-700 p-4 my-6 w-full">
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
