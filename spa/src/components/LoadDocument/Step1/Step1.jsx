import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

import { ReactComponent as CaretRight } from "../../../assets/icons/CaretRight.svg";

import styles from "./Step1.module.css";

const Step1 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Тип и загрузка проекта</div>
      <div>
        <div className={styles.subtitle}>Что Вы хотите сделать?</div>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button className={styles.button}>Новый проект закона</Button>
          <Button className={styles.button}>
            Изменение существующего нормативного акта
          </Button>
        </ButtonGroup>
        <div className={styles.subtitle}>Тип нормативного акта</div>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button className={styles.button}>Закон</Button>
          <Button className={styles.button}>Кодекс</Button>
        </ButtonGroup>
        <div className={styles.subtitle}>Загрузка документа</div>
        <div className={styles.dnd}>Перенесите сюда документ</div>
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
