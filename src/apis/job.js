import axios from "axios";
import { Navigate } from "react-router-dom";
export const createJobPost = async (jobPostPayload) => {
  const backendUrl = "http://localhost:3000/api/v1";
  try {
    const reqUrl = `${backendUrl}/job/create`;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.post(reqUrl, jobPostPayload);
    return response.data;
  } catch (error) {
    if (error.isTokenExpired) {
      localStorage.clear();
      Navigate("/login");
    }
    console.log(error);
  }
};
export const getJobDetailsById = async (jobPostId) => {
  const backendUrl = "http://localhost:3000/api/v1";
  try {
    const reqUrl = `${backendUrl}/job/job-details/${jobPostId}`;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.get(reqUrl);
    return response.data;
  } catch (error) {
    console.log(error);
    // toast something went wrong please try after sometime
  }
};
export const updateJobPostById = async (jobPostId, updatedFormData) => {
  const backendUrl = "http://localhost:3000/api/v1";
  try {
    const reqUrl = `${backendUrl}/job/update/${jobPostId}`;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.put(reqUrl, updatedFormData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllJobPost = async (filter) => {
  const backendUrl = "http://localhost:3000/api/v1";
  try {
    const reqUrl = `${backendUrl}/job/all?title=${filter?.title || ""}&skills=${
      filter?.skills || ""
    }`;
    const response = await axios.get(reqUrl);
    return response.data;
  } catch (error) {
    console.log(error);
    // toast something went wrong please try after sometime
  }
};
