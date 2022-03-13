import { useRef, useState, useEffect, useMemo } from "react";
import {
  AtSymbolIcon,
  LockClosedIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "Context/AuthProvider";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const userRef = useRef();
  const errRef = useRef();
  const { signin } = useAuth();
  let { current: from } = useRef(location.state?.from?.pathname || "/");

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user, pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    ///callapi
    try {
      await signin({ user, pwd });
      setUser("");
      setPwd("");
      setMatchPwd("");

      navigate(from, { replace: true });
    } catch (err) {
      console.log(err.message);
      setErrMsg(err.message);
      errRef.current.focus();
    }
  };

  return (
    <div className="h-screen grid content-center -mt-20">
      <div className=" container sm:w-1/2 mx-auto flex justify-center item-center p-8">
        <form onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-3 text-center">
            Hello Again!
          </h1>
          <p
            ref={errRef}
            className={
              errMsg ? "text-red-400  text-lg mb-2 font-normal" : "hidden"
            }
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div
            className={`flex items-center border-2  py-2 px-3 rounded-2xl 
            ${user && !validName ? "border-red-400 mb-2" : "mb-4 "}
          `}
          >
            <AtSymbolIcon
              className={`h-5 w-5   ${
                user && !validName ? "text-red-400" : "text-gray-400"
              }`}
            />
            <input
              className="pl-2 outline-none border-none"
              placeholder="UserName"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
          </div>

          <p
            id="uidnote"
            className={
              userFocus && user && !validName
                ? "bg-black  text-white relative  rounded-md text-sm p-1 mb-4 "
                : " hidden"
            }
          >
            <InformationCircleIcon className="inline-flex w-3 h-5 mr-2 stroke-white" />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <div
            className={`flex items-center border-2  py-2 px-3 rounded-2xl 
            ${pwd && !validPwd ? "border-red-400 mb-4" : "mb-4 "}
          `}
          >
            <LockClosedIcon
              className={`h-5 w-5   ${
                pwd && !validPwd ? "text-red-400" : "text-gray-400"
              }`}
            />
            <input
              className="pl-2 outline-none border-none"
              placeholder="Password"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
          </div>
          <p
            id="pwdnote"
            className={
              pwdFocus && !validPwd
                ? "bg-black text-white relative -bottom-3 rounded-md text-sm p-1 mb-4"
                : "hidden"
            }
          >
            <InformationCircleIcon className="inline-flex w-3 h-5 mr-2 stroke-white" />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>

          <div
            className={`flex items-center border-2  py-2 px-3 rounded-2xl 
            ${matchPwd && !validMatch ? "border-red-400" : "mb-4 "}
          `}
          >
            <LockClosedIcon
              className={`h-5 w-5   ${
                matchPwd && !validMatch ? "text-red-400" : "text-gray-400"
              }`}
            />
            <input
              className="pl-2 outline-none border-none"
              placeholder="Confirm Password"
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
          </div>
          <p
            id="confirmnote"
            className={
              matchFocus && !validMatch
                ? "bg-black text-white relative -bottom-3 rounded-md text-sm p-1 mb-4"
                : "hidden"
            }
          >
            <InformationCircleIcon className="inline-flex w-3 h-5 mr-2 stroke-white" />
            Must match the first password input field.
          </p>

          <button
            disabled={!validName || !validPwd || !validMatch ? true : false}
            type="submit"
            className="block w-full disabled:opacity-75 disabled:cursor-not-allowed  bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
