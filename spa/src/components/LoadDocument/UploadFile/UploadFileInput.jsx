import React from "react";
import {DropzoneArea} from 'material-ui-dropzone'
import styles from "./UploadFile.module.css";

const UploadFileInput = (props) => {
  const { onFileChange } = props;

  const handleFileChange = (files) => {
    if (files && files[0]) {
      const file = new FormData();
      file.append("File", files[0], files[0].name);
      onFileChange && onFileChange(file);
    }
  };

  const dropzoneText = <>
    <div className={styles.title}>Перенесите сюда документ</div>
    <div className={styles.subtitle}>.PDF, ДО 100 MB</div>
  </>

  return (
    <DropzoneArea 
      onChange={handleFileChange} 
      filesLimit={1}
      maxFileSize={104857600}
      dropzoneText={dropzoneText}
      showPreviewsInDropzone={true}
      previewText="previewText"
      acceptedFiles={[".pdf"]}
     />
  );
  
}

export { UploadFileInput };
