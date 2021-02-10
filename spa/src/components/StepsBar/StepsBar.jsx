import { NavLink } from "react-router-dom";

import styles from "./StepsBar.module.css";
import { ReactComponent as ArrowLeft } from "../../assets/icons/ArrowLeft.svg";
import { ReactComponent as CaretRight } from "../../assets/icons/CaretRight.svg";

const StepsBar = ({ handleLinkClick }) => {
  const Steps = [
    {
      title: "Шаг 1",
      description: "Тип проекта и загрузка документа",
      to: "/load/step1",
    },
    { title: "Шаг 2", description: "Описание проекта", to: "/load/step2" },
    { title: "Шаг 3", description: "Участники проекта", to: "/load/step3" },
  ];

  return (
    <div className={styles.wrapper}>
      <NavLink
        exact
        to="/"
        activeClassName={styles.active}
        className={styles.navLink}
        onClick={handleLinkClick}
      >
        <div className={styles.cancel}>
          <ArrowLeft />
          <span className={styles.cancelTitle}>Отменить</span>
        </div>
      </NavLink>

      <ul className={styles.stepsFlow}>
        {Steps.map((item) => (
          <li className={styles.stepItem} key={item.title + item.description}>
            <NavLink
              exact
              to={item.to}
              activeClassName={styles.active}
              className={styles.navLink}
              onClick={handleLinkClick}
            >
              <div className={styles.stepWrapper}>
                <div className={styles.stepTexts}>
                  <div className={styles.stepTitle}>{item.title}</div>
                  <div className={styles.stepDescription}>
                    {item.description}
                  </div>
                </div>
                <div>
                  <CaretRight />
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { StepsBar };
