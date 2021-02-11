import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

// import UserMenu from "../UserMenu/UserMenu";
import styles from "./MenuBar.module.css";
import { userActions } from "../../helpers/store/actions";
import { ReactComponent as Notification } from "../../assets/icons/bell.svg";
import { ReactComponent as Find } from "../../assets/icons/find.svg";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as CaretDown } from "../../assets/icons/CaretDown.svg";
import { ReactComponent as Plus } from "../../assets/icons/Plus.svg";
import avatar from "../../assets/avatar.png";

const MenuBar = ({ handleLinkClick }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

  const MenuItems = [
    { title: "Все законопроекты", to: "/" },
    { title: "Мои законопроекты", to: "/" },
    { title: "Действующие законы", to: "/" },
  ];

  return (
    <div className={styles.navigationBar}>
      <NavLink exact to="/">
        <div className={styles.logo}>
          <Logo />
        </div>
      </NavLink>
      <div className={styles.menuFilterLaws}>
        <ul className={styles.filterItems}>
          {MenuItems.map((item) => (
            <li key={item.title + item.to}>
              <div className={styles.menuItemTitle}>
                <NavLink
                  exact
                  to={item.to}
                  activeClassName={styles.active}
                  className={styles.navLink}
                  onClick={handleLinkClick}
                >
                  {item.title}
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.searchBar}>
        <Find />
        <input type="text" className={styles.searchInput} placeholder="Поиск" />
      </div>
      <div className={styles.addLaw}>
        <NavLink exact to="/load">
          <button className={styles.button}>
            <div className={styles.plus}>
              <Plus />
            </div>
            Добавить законопроект
          </button>
        </NavLink>
      </div>
      <div className={styles.notifications}>
        <Notification />
      </div>

      <div className={styles.userBlock}>
        <img
          className={styles.avatarImage}
          src={avatar}
          alt="avatar"
          onKeyPress={() => toggle(!open)}
        />
        <div className={styles.userName}>Вася Пупкин</div>
        <CaretDown onClick={() => toggle(!open)} />
      </div>
      {/* {open && <UserMenu />} */}
    </div>
  );
};

export { MenuBar };
