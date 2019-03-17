function loginCheck(username, password) {
  console.log(username, password);
  if (username === "allen" && password === "123") {
    return true;
  }
}

module.exports = {
  loginCheck
};
