import axios from "axios";

const BASE_URL = "https://visvotsav-w1hn.vercel.app";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const postQuery = async (data) => {
  return await axiosInstance.post("/api/queries", data);
};

export const postSubmit = async (data) => {
  const formData = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    event: data.event,
    branch: data.branch,
    duNumber: data.duNumber,
    participants: data.participants,
    participantsDetails: [...data.participantDetails],
  };
  console.log(formData);
  return await axiosInstance.post("/api/form-submit", formData);
};
