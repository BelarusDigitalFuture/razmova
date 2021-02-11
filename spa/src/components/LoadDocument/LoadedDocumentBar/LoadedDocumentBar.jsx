import { NavLink } from "react-router-dom";

import styles from "./LoadedDocumentBar.module.css";

const documentInfo = [
  { label: "Файл", info: "y028ru.pdf" },
  { label: "Вы публикуете", info: "Новый закон" },
  { label: "Тип", info: "Кодекс" },
];

const LoadedDocumentBar = () => {
  return (
    <div className={styles.wrapper}>
      {documentInfo.map((item) => (
        <div key={item.label + item.info}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.info}>{item.info}</div>
        </div>
      ))}
      <NavLink exact to="/load/step1">
        <button className={styles.editBtn}>
          <span>Изменить</span>
        </button>
      </NavLink>
    </div>
  );
};

export { LoadedDocumentBar };
