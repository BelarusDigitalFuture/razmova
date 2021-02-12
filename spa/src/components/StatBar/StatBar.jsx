import styles from "./StatBar.module.css";

import CheckCircle from "../../assets/icons/CheckCircle.svg";
import UserCircle from "../../assets/icons/UserCircle.svg";
import ChatCircleText from "../../assets/icons/ChatCircleText.svg";
import CloudArrowUp from "../../assets/icons/CloudArrowUp.svg";

const Stats = [
  { value: "10 192", title: "Загружено проектов", icon: CloudArrowUp },
  { value: "1 201 384", title: "Оставлено комментариев", icon: ChatCircleText },
  {
    value: "504 234",
    title: "Пользователей зарегистрировано",
    icon: UserCircle,
  },
  { value: "4 192", title: "Проектов прошло слушания", icon: CheckCircle },
];

const StatBar = () => {
  return (
    <div className={styles.wrapper}>
      {Stats.map((item) => (
        <div className={styles.statItem} key={item.title + item.value}>
          <div className={styles.statInfo}>
            <div className={styles.value}>{item.value}</div>
            <div className={styles.title}>{item.title}</div>
          </div>
          <div className={styles.statIcon}>
            <img src={item.icon} alt="icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export { StatBar };
