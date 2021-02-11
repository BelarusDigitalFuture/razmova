import { NavLink } from "react-router-dom";
import { FormControl, TextField, makeStyles } from "@material-ui/core";
import classNames from "classnames";

import styles from "./Step3.module.css";
import { LoadedDocumentBar } from "../LoadedDocumentBar";
import { LoadedDocumentBar2 } from "../LoadedDocumentBar2";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "37vw",
    },
  },
}));

const Step3 = () => {
  const classes = useStyles();
  return (
    <div className={styles.wrapper}>
      <LoadedDocumentBar />
      <LoadedDocumentBar2 />
      <div className={styles.title}>Участники проекта</div>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl>
            <TextField
              required
              id="outlined-required"
              label="Инициаторы"
              placeholder="Введите ФИО или email"
              variant="outlined"
            />
            <div className={styles.formLabel}> Члены команды</div>
            <TextField
              id="outlined-basic"
              label="Должность"
              placeholder="Введите должность"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="ФИО/email"
              placeholder="Введите ФИО или email"
              variant="outlined"
            />
          </FormControl>
        </form>
        <div className={styles.buttons}>
          <NavLink exact to="/load/step3">
            <button className={styles.button}>
              <span>Отправить на модерацию</span>
            </button>
          </NavLink>
          <button className={classNames(styles.button, styles.saveDrawBtn)}>
            <span>Сохранить в черновик</span>
          </button>
          <NavLink exact to="/load/preview">
            <button
              className={classNames(styles.button, styles.openPreviewBtn)}
            >
              <span>Открыть предпросмотр</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { Step3 };
