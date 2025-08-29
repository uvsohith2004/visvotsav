import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_PRODUCTION_BACKEND_URL
    : import.meta.env.VITE_DEVELOPMENT_BACKEND_URL;
console.log("Base URL:", BASE_URL);
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
