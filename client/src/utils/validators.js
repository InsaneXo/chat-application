import { isValidUsername } from "6pp";

const usernameValidator = (username) => {
  if (!isValidUsername(username))
    return { isVaild: false, errorMessage: "Username is Invaild" };
};

export default usernameValidator;
