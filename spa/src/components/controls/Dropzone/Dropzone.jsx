import React from "react";
import {useDropzone} from 'react-dropzone';
import cn from "classnames";

import {Button} from "@components/controls/Button";
import CloudArrowUpMedium from "../../../assets/icons/CloudArrowUpMedium.svg";
import styles from "./Dropzone.module.scss";

const Dropzone = ({ onChange, accept }) => {
    const onDrop = (files) => {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        const formData = new FormData();
        formData.append("file", files[0], files[0].name);
        onChange && onChange(formData);
      };

    const onDragOver = (event) => {
        if (isDragReject) {
            event.dataTransfer.dropEffect = "none";
        }
    };

    const {
        getRootProps,
        getInputProps,
        open,
        isDragAccept,
        isDragReject
      } = useDropzone({
          accept,
          onDrop,
          onDragOver, 
          noClick: true,
          noKeyboard: true});

    return (
        <div {...getRootProps({className: cn(styles.dropzoneContainer, { [styles.active]: isDragAccept, [styles.reject]: isDragReject })})}>
            <svg preserveAspectRatio='none' className={styles.svg}>
                    <rect // dashed border with width=2px radius=8px dashSize=8px dashSpace=8px
                        rx="8"
                        ry="8"
                        width="100%"
                        height="100%"
                        className={styles.rect}
                    
                    />
            </svg>
            <input {...getInputProps()} />
            <img src={CloudArrowUpMedium} alt="icon" />
            <p className={styles.title}>Перенесите сюда документ</p>
            <p className={styles.subtitle}>.PDF, ДО 100 MB</p>
            <p>
                Или <Button secondary onClick={open}>Выберите файл</Button>
            </p>
        </div>
    );
};

export { Dropzone };
