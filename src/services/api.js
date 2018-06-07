import axios from "axios";

export function fetchPlaylist(url) {
  return axios(url).then(res => res.data);
}
