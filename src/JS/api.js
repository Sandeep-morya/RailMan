import axios from "axios";

export const getPnrStaus = (pnr) => {
  const options = {
    method: "GET",
    url: `https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${pnr}`,
    headers: {
      "X-RapidAPI-Key": "25a08ff1ecmshb0e013342682ff5p1df7bbjsn9bf370586ba4",
      "X-RapidAPI-Host": "pnr-status-indian-railway.p.rapidapi.com",
    },
  };

  axios.request(options);

  return axios.request(options);
};

export const getStaions = (query) => {
  const options = {
    method: "POST",
    url: "https://rstations.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "25a08ff1ecmshb0e013342682ff5p1df7bbjsn9bf370586ba4",
      "X-RapidAPI-Host": "rstations.p.rapidapi.com",
    },
    data: `{"search":"${query}"}`,
  };

  return axios.request(options);
};
