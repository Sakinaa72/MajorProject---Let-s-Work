export const getJwtToken = () => {
  const tokenString = localStorage.getItem("token");
  if (tokenString) {
    return JSON.parse(tokenString);
  } else {
    return null;
  }
};
