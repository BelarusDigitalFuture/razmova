import React from "react";
import { LinearProgress } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import styles from "./UploadFile.module.css";

const UploadedFile = (props) => {
  const { clearUpload, fileName } = props;

  return (
    <div className={styles.progressBarContainer}>
      <InsertDriveFileOutlinedIcon />
      <div>
        <div className={styles.progressBarText}>
          <span><b>{fileName}</b></span>
          <span className={styles.uploadCompletedMsg}>Загружено</span>
        </div>
      </div>
      <CloseOutlinedIcon onClick={clearUpload} className={styles.stop}/>
    </div>
  );
  
}

export { UploadedFile };
