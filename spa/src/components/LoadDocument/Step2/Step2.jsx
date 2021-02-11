import { useState } from "react";

import { NavLink } from "react-router-dom";
import {
  FormControl,
  TextField,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { ReactComponent as CaretRight } from "../../../assets/icons/CaretRight.svg";
import { LoadedDocumentBar } from "../LoadedDocumentBar";

import styles from "./Step2.module.css";

const categories = [
  {
    value: "Уголовное право",
    label: "Уголовное право",
  },
  {
    value: "Гражданское право",
    label: "Гражданское право",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "37vw",
    },
  },
}));

const Step2 = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
      <div className={styles.wrapper}>
        <LoadedDocumentBar />
        <div className={styles.title}>Описание проекта</div>
        <div>
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl>
              <TextField
                required
                id="outlined-required"
                label="Название проекта"
                placeholder="Введите название проекта"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-textarea"
                label="Описание проекта"
                placeholder="Введите описание проекта"
                multiline
                variant="outlined"
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Категория законопроекта"
                value={category}
                onChange={handleChange}
                placeholder="Выберите категорию"
                variant="outlined"
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                id="outlined-required"
                label="Теги"
                placeholder="Введите теги, напр. #налоги, #экономика"
                variant="outlined"
              />
            </FormControl>
          </form>
          <div className={styles.buttons}>
            <NavLink exact to="/load/step3">
              <button className={styles.button}>
                <span>Далее</span>
                <CaretRight />
              </button>
            </NavLink>
            <button className={styles.saveDrawBtn}>
              <span>Сохранить в черновик</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export { Step2 };
