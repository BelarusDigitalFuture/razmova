import { NavLink } from "react-router-dom";

import styles from "./LoadedDocumentBar2.module.css";

const documentInfo = [
  { label: "Название", info: "Уголовный Кодекс Республики Беларусь" },
  { label: "Категория", info: "Уголовное право" },
  {
    label: "Описание",
    info:
      "Переформулированы многие термины на современные. Убраны все наказания посредством смертной казни.",
  },
  { label: "Теги", info: ["#УГОЛОВКА", "#ОТМЕНАСМЕРТНОЙКАЗНИ"] },
];

const LoadedDocumentBar2 = () => {
  return (
    <div className={styles.wrapper}>
      {documentInfo.map((item) => (
        <div className={styles.item} key={item.label + item.info}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.info}>{item.info}</div>
        </div>
      ))}
      <NavLink exact to="/load/step2">
        <button className={styles.editBtn}>
          <span>Изменить</span>
        </button>
      </NavLink>
    </div>
  );
};

export { LoadedDocumentBar2 };
