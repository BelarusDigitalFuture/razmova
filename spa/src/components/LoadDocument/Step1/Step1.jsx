import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";
import classNames from "classnames";
import { useState } from "react";

import { ReactComponent as CaretRight } from "../../../assets/icons/CaretRight.svg";
import { UploadFile } from "./../UploadFile";
import styles from "./Step1.module.css";

const Step1 = () => {
  const [isNewLawActive, SetNewLawActive] = useState(true);
  const [isEditLawActive, SetEditLawActive] = useState(false);
  const [isLawChecked, SetLawChecked] = useState(true);
  const [isCodeChecked, SetCodeChecked] = useState(false);
  const onStatus = () => {
    SetNewLawActive((isNewLawActive) => !isNewLawActive);
    SetEditLawActive((isEditLawActive) => !isEditLawActive);
  };
  const onLawType = () => {
    SetLawChecked((isLawChecked) => !isLawChecked);
    SetCodeChecked((isCodeChecked) => !isCodeChecked);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Тип и загрузка проекта</div>
      <div>
        <div className={styles.subtitle}>Что Вы хотите сделать?</div>
        <ButtonGroup
          fullWidth
          className={styles.btnGroup}
          disableElevation
          variant="contained"
          color="primary"
        >
          <Button
            onClick={onStatus}
            className={classNames(
              styles.switchBtn,
              isNewLawActive ? styles.btnActive : ""
            )}
          >
            Новый проект закона
          </Button>
          <Button
            onClick={onStatus}
            className={classNames(
              styles.switchBtn,
              isEditLawActive ? styles.btnActive : ""
            )}
          >
            Изменение существующего нормативного акта
          </Button>
        </ButtonGroup>
        <div className={styles.subtitle}>Тип нормативного акта</div>
        <ButtonGroup
          fullWidth
          className={styles.btnGroup}
          disableElevation
          variant="contained"
          color="primary"
        >
          <Button
            onClick={onLawType}
            className={classNames(
              styles.switchBtn,
              isLawChecked ? styles.btnActive : ""
            )}
          >
            Закон
          </Button>
          <Button
            onClick={onLawType}
            className={classNames(
              styles.switchBtn,
              isCodeChecked ? styles.btnActive : ""
            )}
          >
            Кодекс
          </Button>
        </ButtonGroup>
        <div className={styles.subtitle}>Загрузка документа</div>
        <UploadFile />
        <NavLink exact to="/load/step2">
          <button className={styles.button}>
            <span>Далее</span>
            <CaretRight />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export { Step1 };
