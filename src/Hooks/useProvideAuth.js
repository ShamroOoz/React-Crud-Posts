import { useEffect, useState } from "react";
import { userObj } from "Assests/Users";
// import { useSessionStorage, useLocalStorage } from "Hooks/useStorage";

export function useProvideAuth() {
  const [user, setUser] = useState(null);
  //   const [age, setAge, removeAge] = useLocalStorage("age", 26);

  const signin = (useData) => {
    let { user: username, pwd: password } = useData;

    let ispresent = userObj.some(
      (user) => user.username === username && user.password === password
    );

    if (!ispresent) {
      throw new Error("User Not Found");
    }

    setTimeout(() => {
      let [obj] = userObj.filter(
        (user) => user.username === username && user.password === password
      );
      return setUser(obj);
    }, 1000); // fake async
  };

  const signout = (callback) => {
    setUser(null);
    return setTimeout(callback, 100);
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {}, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signout,
  };
}
