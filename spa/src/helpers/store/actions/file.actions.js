import axios from "axios";
import { fileConstants } from "../constants";
import { fileService } from "@services";
import { alertActions } from "./";

export const fileActions = {
    upload,
    clearUpload
};

function upload(formData, fileName) {
  let source = axios.CancelToken.source();

  return (dispatch) => {
    dispatch(request(formData, source.cancel, fileName));

    fileService.upload(formData, source, (percent) => dispatch(progress(formData, percent))).then(
      (payload) => {
        dispatch(success(payload));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(file, stop, fileName) {
    return { type: fileConstants.UPLOAD_REQUEST, file, stop, fileName};
  }
  function progress(file, progress) {
    return { type: fileConstants.UPLOAD_PROGRESS, file, progress };
  }
  function success(payload) {
    return { type: fileConstants.UPLOAD_SUCCESS, payload };
  }
  function failure(error) {
    return { type: fileConstants.UPLOAD_FAILURE, error };
  }
}

function clearUpload() {
  return (dispatch) => {
    dispatch(request());
  };

  function request(file, stop, fileName) {
    return { type: fileConstants.CLEAR_UPLOAD};
  }
}