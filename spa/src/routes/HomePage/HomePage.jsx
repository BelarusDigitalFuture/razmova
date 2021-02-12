import React from "react";
import { MenuBar } from "../../components/MenuBar";
import { ProjectsList } from "../../components/ProjectsList";
import { StatBar } from "../../components/StatBar";
import styles from "./HomePage.module.css";

import Star from "../../assets/icons/Star.svg";
import Fire from "../../assets/icons/Fire.svg";
import New from "../../assets/icons/New.svg";

const Projects = [
  {
    id: 1,
    title:
      "О ратификации поправки к Статьям Соглашения Международной финансовой корпорации.",
    code: "11-086",
    commentsQty: "43",
    tags: [{ title: "Информационные технологии" }, { title: "Чтение II" }],
    time: "3 дня",
  },
  {
    id: 2,
    title: "Об изменении Кодекса Республики Беларусь об образовании.",
    code: "11-087",
    commentsQty: "2",
    tags: [{ title: "Информационные технологии" }, { title: "Чтение II" }],
    time: "3 дня",
  },
  {
    id: 3,
    title:
      "Об изменении Закона Республики Беларусь «Об автомобильном транспорте и автомобильных перевозках.",
    code: "09-170",
    commentsQty: "121",
    tags: [{ title: "Информационные технологии" }, { title: "Чтение II" }],
    time: "3 дня",
  },
  {
    id: 4,
    title:
      "О ратификации поправки к Статьям Соглашения Международной финансовой корпорации.",
    code: "11-086",
    commentsQty: "43",
    tags: [{ title: "Информационные технологии" }, { title: "Чтение II" }],
    time: "3 дня",
  },
  {
    id: 5,
    title:
      "О ратификации поправки к Статьям Соглашения Международной финансовой корпорации.",
    code: "11-086",
    commentsQty: "43",
    tags: [{ title: "Информационные технологии" }, { title: "Чтение II" }],
    time: "3 дня",
  },
  {
    id: 6,
    title:
      "О ратификации поправки к Статьям Соглашения Международной финансовой корпорации.",
    code: "11-086",
    commentsQty: "43",
    tags: [{ title: "Информационные технологии" }, { title: "Чтение II" }],
    time: "3 дня",
  },
];

function HomePage() {
  return (
    <div>
      <MenuBar />
      <div className={styles.content}>
        <div className={styles.blocks}>
          <ProjectsList
            title="Интересные проекты"
            projects={Projects}
            icon={Star}
          />
          <ProjectsList
            title="Активно обсуждаются"
            projects={Projects}
            icon={Fire}
          />
          <ProjectsList
            title="Недавно загруженные"
            projects={Projects}
            icon={New}
          />
        </div>
        <StatBar />
      </div>
    </div>
  );
}

export { HomePage };
