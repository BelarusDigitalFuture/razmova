import { fileConstants } from "@constants";

export function files(state = {}, action) {
  switch (action.type) {
    case fileConstants.UPLOAD_REQUEST:
        return {
            ...state,
            loading: true,
            stop: action.stop,
            file: action.file,
            fileName: action.fileName,
            progress: 0
        };
    case fileConstants.CLEAR_UPLOAD:
        return {
            ...state,
            loading: false,
            stop: action.stop,
            file: undefined,
            fileName: undefined,
            uploadedFile: undefined
        };
    case fileConstants.UPLOAD_PROGRESS:
        return {
            ...state,
            progress: action.progress,
            file: action.file
        };
    case fileConstants.UPLOAD_SUCCESS:
        return {
            ...state,
            loading: false,
            uploadedFile: action.payload
        };
    case fileConstants.UPLOAD_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.error,
            progress: 0
        };
    default:
      return state;
  }
}
