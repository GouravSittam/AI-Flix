const checkValidData = (email, password,name) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
    const isNamevalid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if(!isNamevalid)return"Name is not valid";
  return null;
};

export default checkValidData;
