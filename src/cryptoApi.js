import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

const currency = "usd";

export const getTrending = () =>
  api.get("/search/trending").then((res) => res.data);

export const getPrice = (id) =>
  api
    .get(`/simple/price?ids=${id}&vs_currencies=${currency}`)
    .then((res) => res.data);

export const getAllCoins = () =>
  api.get(`/coins/markets?vs_currency=${currency}`).then((res) => res.data);
