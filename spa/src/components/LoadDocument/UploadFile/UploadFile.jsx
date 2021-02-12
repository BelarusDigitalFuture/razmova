import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fileActions } from "@actions";

import { UploadFileInput, UploadFileInProgress, UploadedFile } from "@components";


const UploadFile = (props) => {
  const { uploadAction, loading, uploadedFile, progress, stop, fileName } = props;
  const dispatch = useDispatch();

  if (loading) {
    return <UploadFileInProgress progress={progress} stop={stop} fileName={fileName} />
  }

  if (uploadedFile) {
    return <UploadedFile fileName={fileName} clearUpload={() => dispatch(fileActions.clearUpload())} />
  }

  return (
    <UploadFileInput onFileChange={uploadAction} />
  );
}

export { UploadFile };
