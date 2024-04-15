import axios from "axios";
export const registerUser = async ({ email, password, name, mobile }) => {
  const backendURL = "http://localhost:3000/api/v1";
  try {
    const reqUrl = `${backendURL}/auth/register`;
    const response = await axios.post(reqUrl, {
      email,
      password,
      name,
      mobile,
    });
    return response.data;
  } catch (error) {
    alert(error);
  }
};
export const loginUser = async (email, password) => {
  const backendURL = "http://localhost:3000/api/v1";
  try {
    const reqUrl = `${backendURL}/auth/login`;
    const response = await axios.post(reqUrl, { email, password });
    return response.data;
  } catch (error) {
    console.log(error);
    alert("sonmething went wrong");
  }
};
