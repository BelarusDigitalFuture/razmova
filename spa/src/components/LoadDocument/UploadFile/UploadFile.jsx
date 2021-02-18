import React from "react";
import { useDispatch } from "react-redux";
import { fileActions } from "@actions";

import { UploadFileInProgress, UploadedFile } from "@components";
import { Dropzone } from "@components/controls/Dropzone";

const UploadFile = (props) => {
  const { uploadAction, loading, uploadedFile, progress, stop, file } = props;
  const dispatch = useDispatch();
  const handleClearUpload = () => dispatch(fileActions.clearUpload());
  const fileName = file?.get('file')?.name;

  if (loading) {
    return <UploadFileInProgress progress={progress} stop={stop} fileName={fileName} />
  }

  if (uploadedFile) {
    return <UploadedFile fileName={fileName} clearUpload={handleClearUpload} />
  }

  return (
    <Dropzone accept="application/pdf" onChange={uploadAction} />
  );
}

export { UploadFile };
