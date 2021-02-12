import React from "react";
import { LinearProgress } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import styles from "./UploadFile.module.css";

const UploadFileInProgress = (props) => {
  const { progress, stop, fileName } = props;

  return (
    <div className={styles.progressBarContainer}>
      <InsertDriveFileOutlinedIcon />
      <div>
        <div className={styles.progressBarText}>
          <span><b>{fileName}</b></span>
          <span>{progress}</span>
        </div>
      <LinearProgress variant="determinate" value={progress} />
      </div>
      <CloseOutlinedIcon onClick={stop} className={styles.stop}/>
    </div>
  );
  
}

export { UploadFileInProgress };
