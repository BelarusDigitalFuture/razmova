import { NavLink } from "react-router-dom";

import styles from "./Project.module.css";
import { ReactComponent as ChatCircleText } from "../../../assets/icons/ChatCircleTextgrey.svg";
import { ReactComponent as Alarm } from "../../../assets/icons/Alarm.svg";

const Project = ({ item }) => {
  return (
    <NavLink exact to="/discussion/3">
      <div className={styles.project} key={item.title + item.id}>
        <div>
          <div className={styles.code}>{item.code}</div>
        </div>
        <div className={styles.description}>
          <div className={styles.top}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.comments}>
              <ChatCircleText />
              {item.commentsQty}
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.tags}>
              {item.tags.map((tag) => (
                <div className={styles.tag} key={tag.title}>
                  {tag.title}
                </div>
              ))}
            </div>
            <div className={styles.alarm}>
              <Alarm />
              {item.time}
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export { Project };
