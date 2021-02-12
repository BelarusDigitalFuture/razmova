import axios from "axios";
import { config } from "../globals";
import { updateHeaders } from "@helpers";

export const fileService = {
    upload
};

function upload(file, source, onProgress) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    onUploadProgress: (progressEvent) => {
      onProgress(Math.round(progressEvent.loaded * 100 / progressEvent.total));
    },
    cancelToken: source.token
  };

  updateHeaders(requestOptions.headers);

  return axios.post(`${config.apiUrl}/files`, file, requestOptions);
}