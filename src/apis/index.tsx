import axios from "axios";

export const axiosDefault = axios.create({
  baseURL: "https://proxy.cors.sh/http://api.data.go.kr",
  headers: {
    "Content-Type": "application/json",
    "x-cors-api-key":
      "live_7e11ac0c11f6b0a7d4f3d11ded385c4fdf4382b926264954727f1200ab482cc8",
  },
});

export const axiosParking = axios.create({
  baseURL: "https://proxy.cors.sh/http://api.kcisa.kr",
  headers: {
    "Content-Type": "application/json",
    "x-cors-api-key":
      "live_7e11ac0c11f6b0a7d4f3d11ded385c4fdf4382b926264954727f1200ab482cc8",
  },
});
