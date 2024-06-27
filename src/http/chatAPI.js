import axios from "axios";

const host = axios.create({
  //   baseURL: "https://pulse-run-api.onrender.com/api",
});

export const getStartChat = async () => {
  const { data } = await host.post("begin");
  return data;
};
