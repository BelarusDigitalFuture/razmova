import React from "react";
import classnames from "classnames";
import { MenuBar } from "../../components/MenuBar";
import author1 from "../../assets/images/author-1.png";
import author2 from "../../assets/images/author-2.png";
import author3 from "../../assets/images/author-3.png";
import author4 from "../../assets/images/author-4.png";
import { ReactComponent as Find } from "../../assets/icons/find.svg";
import { ReactComponent as Chat } from "../../assets/icons/Chat.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/ArrowLeft.svg";
import {
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import styles from "./DiscussionPage.module.css";

function Discussions() {
  let { projectId, discussionId } = useParams();
  if (discussionId) {
    return (
      <>
        <div className={styles.header}>
          <Link to={`/discussion/${projectId}`} className={styles.backToAll}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.8777 16H4.97729" stroke="#272727" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.9366 7L4.97729 16L13.9366 25" stroke="#272727" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </Link>
          <div>
            <h1 className={styles.title}>
              Обсуждение № {discussionId}
            </h1>
            <p className={styles.projectCaption}>
              Уголовный Кодекс Республики Беларусь
        </p>
          </div>
        </div>

        <ul className={styles.comments}>
          <li>
            <div className={styles.comment}>
              <div className={styles.commentInfo}>
                <div className={styles.commentAuthorBox}>
                  <img src={author3} alt="" />
                  <div>
                    <div className={styles.commentAuthor}>
                      <div className={styles.commentAuthorName}>
                        <span>Валерия Пугачева</span>
                        <ul className={styles.commentAuthorTags}>
                          <li className={styles.commentAuthorExpert}>
                            Эксперт
                              </li>
                          <li className={styles.commentAuthorRating}>
                            Рейтинг: +737
                              </li>
                        </ul>
                      </div>
                    </div>
                    <p className={styles.commentAuthorTitle}>
                      Бывший инспектор по налогам и сборам
                        </p>
                  </div>
                </div>

                <div className={styles.commentActions}>
                  <button type="button" className={styles.button}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03931 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52185 9.18577C4.60063 9.25218 4.65906 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.1933 11.8683 8.27569 11.9208Z"
                        fill="#666666"
                        stroke="#666666"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                        В ИЗБРАННОЕ
                      </button>
                  <button
                    type="button"
                    className={classnames(styles.upvotes, styles.selected)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.99963 6.5H4.99963V13H1.99963C1.86703 13 1.73985 12.9473 1.64608 12.8536C1.55231 12.7598 1.49963 12.6326 1.49963 12.5V7C1.49963 6.86739 1.55231 6.74021 1.64608 6.64645C1.73985 6.55268 1.86703 6.5 1.99963 6.5V6.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.99963 6.5L7.49963 1.5C7.76228 1.5 8.02235 1.55173 8.265 1.65224C8.50765 1.75275 8.72813 1.90007 8.91385 2.08579C9.09956 2.2715 9.24688 2.49198 9.34739 2.73463C9.4479 2.97728 9.49963 3.23736 9.49963 3.5V5H13.3669C13.5086 5 13.6488 5.03015 13.7781 5.08846C13.9073 5.14677 14.0227 5.2319 14.1165 5.3382C14.2104 5.4445 14.2805 5.56954 14.3224 5.70502C14.3642 5.84051 14.3767 5.98334 14.3591 6.12403L13.6091 12.124C13.5789 12.3659 13.4614 12.5884 13.2787 12.7497C13.0959 12.911 12.8606 13 12.6169 13H4.99963"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                        +374
                      </button>
                  <button type="button" className={styles.downvotes}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.99963 3H4.99963V9.5H1.99963C1.86703 9.5 1.73985 9.44732 1.64608 9.35355C1.55231 9.25979 1.49963 9.13261 1.49963 9V3.5C1.49963 3.36739 1.55231 3.24021 1.64608 3.14645C1.73985 3.05268 1.86703 3 1.99963 3V3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.99963 9.5L7.49963 14.5C7.76228 14.5 8.02235 14.4483 8.265 14.3478C8.50765 14.2472 8.72813 14.0999 8.91385 13.9142C9.09956 13.7285 9.24688 13.508 9.34739 13.2654C9.4479 13.0227 9.49963 12.7626 9.49963 12.5V11H13.3669C13.5086 11 13.6488 10.9698 13.7781 10.9115C13.9073 10.8532 14.0227 10.7681 14.1165 10.6618C14.2104 10.5555 14.2805 10.4305 14.3224 10.295C14.3642 10.1595 14.3767 10.0167 14.3591 9.87597L13.6091 3.87597C13.5789 3.63411 13.4614 3.41163 13.2787 3.25032C13.0959 3.08902 12.8606 3 12.6169 3H4.99963"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                        -32
                      </button>
                </div>
              </div>
              <p className={styles.commentText}>
                В своей работе постоянно сталкивался с проблемами правильного консультирования населения насчёт статьи 115.
                Хотелось бы обсудить с экспертной группой данную статью тут, чтобы предложить адекватные изменения.
                  </p>
              <div className={styles.commentReply}>
                <button type="button" className={styles.button}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 9.5L14 6.5L11 3.5" fill="#666666" />
                    <path
                      d="M11 9.5L14 6.5L11 3.5"
                      stroke="#666666"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12.5C2 10.9087 2.63214 9.38258 3.75736 8.25736C4.88258 7.13214 6.4087 6.5 8 6.5H14"
                      stroke="#666666"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                      ОТВЕТИТЬ
                    </button>
              </div>
            </div>

            <ul className={classnames(styles.comments, styles.answers)}>
              <li>
                <div className={styles.comment}>
                  <div className={styles.commentInfo}>
                    <div className={styles.commentAuthorBox}>
                      <img src={author3} alt="" />
                      <div>
                        <div className={styles.commentAuthor}>
                          <div className={styles.commentAuthorName}>
                            <span>Валерия Пугачева</span>
                            <ul className={styles.commentAuthorTags}>
                              <li className={styles.commentAuthorExpert}>
                                Эксперт
                              </li>
                              <li className={styles.commentAuthorRating}>
                                Рейтинг: +737
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className={styles.commentAuthorTitle}>
                          Бывший инспектор по налогам и сборам
                        </p>
                      </div>
                    </div>

                    <div className={styles.commentActions}>
                      <button type="button" className={styles.button}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03931 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52185 9.18577C4.60063 9.25218 4.65906 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.1933 11.8683 8.27569 11.9208Z"
                            fill="#666666"
                            stroke="#666666"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        В ИЗБРАННОЕ
                      </button>
                      <button
                        type="button"
                        className={classnames(styles.upvotes, styles.selected)}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.99963 6.5H4.99963V13H1.99963C1.86703 13 1.73985 12.9473 1.64608 12.8536C1.55231 12.7598 1.49963 12.6326 1.49963 12.5V7C1.49963 6.86739 1.55231 6.74021 1.64608 6.64645C1.73985 6.55268 1.86703 6.5 1.99963 6.5V6.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.99963 6.5L7.49963 1.5C7.76228 1.5 8.02235 1.55173 8.265 1.65224C8.50765 1.75275 8.72813 1.90007 8.91385 2.08579C9.09956 2.2715 9.24688 2.49198 9.34739 2.73463C9.4479 2.97728 9.49963 3.23736 9.49963 3.5V5H13.3669C13.5086 5 13.6488 5.03015 13.7781 5.08846C13.9073 5.14677 14.0227 5.2319 14.1165 5.3382C14.2104 5.4445 14.2805 5.56954 14.3224 5.70502C14.3642 5.84051 14.3767 5.98334 14.3591 6.12403L13.6091 12.124C13.5789 12.3659 13.4614 12.5884 13.2787 12.7497C13.0959 12.911 12.8606 13 12.6169 13H4.99963"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        +374
                      </button>
                      <button type="button" className={styles.downvotes}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.99963 3H4.99963V9.5H1.99963C1.86703 9.5 1.73985 9.44732 1.64608 9.35355C1.55231 9.25979 1.49963 9.13261 1.49963 9V3.5C1.49963 3.36739 1.55231 3.24021 1.64608 3.14645C1.73985 3.05268 1.86703 3 1.99963 3V3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.99963 9.5L7.49963 14.5C7.76228 14.5 8.02235 14.4483 8.265 14.3478C8.50765 14.2472 8.72813 14.0999 8.91385 13.9142C9.09956 13.7285 9.24688 13.508 9.34739 13.2654C9.4479 13.0227 9.49963 12.7626 9.49963 12.5V11H13.3669C13.5086 11 13.6488 10.9698 13.7781 10.9115C13.9073 10.8532 14.0227 10.7681 14.1165 10.6618C14.2104 10.5555 14.2805 10.4305 14.3224 10.295C14.3642 10.1595 14.3767 10.0167 14.3591 9.87597L13.6091 3.87597C13.5789 3.63411 13.4614 3.41163 13.2787 3.25032C13.0959 3.08902 12.8606 3 12.6169 3H4.99963"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        -32
                      </button>
                    </div>
                  </div>
                  <p className={styles.commentText}>
                    Еще хочу добавить, что статья 115 назначить ответственный комитет (Комитет Государственной Думы по государственному строительству и законодательству); представить отзывы, предложения и замечания к законопроекту.
                  </p>
                  <div className={styles.commentReply}>
                    <button type="button" className={styles.button}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 9.5L14 6.5L11 3.5" fill="#666666" />
                        <path
                          d="M11 9.5L14 6.5L11 3.5"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12.5C2 10.9087 2.63214 9.38258 3.75736 8.25736C4.88258 7.13214 6.4087 6.5 8 6.5H14"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      ОТВЕТИТЬ
                    </button>
                  </div>
                </div>
              </li>

              <li>
                <div className={styles.comment}>
                  <div className={styles.commentInfo}>
                    <div className={styles.commentAuthorBox}>
                      <img src={author4} alt="" />
                      <div>
                        <div className={styles.commentAuthor}>
                          <div className={styles.commentAuthorName}>
                            <span>Валентин Аверин</span>
                            <ul className={styles.commentAuthorTags}>
                              <li className={styles.commentAuthorRating}>
                                Рейтинг: +737
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className={styles.commentAuthorTitle}>Безработный</p>
                      </div>
                    </div>

                    <div className={styles.commentActions}>
                      <button type="button" className={styles.button}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03931 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52185 9.18577C4.60063 9.25218 4.65906 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.1933 11.8683 8.27569 11.9208Z"
                            fill="#666666"
                            stroke="#666666"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        В ИЗБРАННОЕ
                      </button>
                      <button type="button" className={styles.upvotes}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.99963 6.5H4.99963V13H1.99963C1.86703 13 1.73985 12.9473 1.64608 12.8536C1.55231 12.7598 1.49963 12.6326 1.49963 12.5V7C1.49963 6.86739 1.55231 6.74021 1.64608 6.64645C1.73985 6.55268 1.86703 6.5 1.99963 6.5V6.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.99963 6.5L7.49963 1.5C7.76228 1.5 8.02235 1.55173 8.265 1.65224C8.50765 1.75275 8.72813 1.90007 8.91385 2.08579C9.09956 2.2715 9.24688 2.49198 9.34739 2.73463C9.4479 2.97728 9.49963 3.23736 9.49963 3.5V5H13.3669C13.5086 5 13.6488 5.03015 13.7781 5.08846C13.9073 5.14677 14.0227 5.2319 14.1165 5.3382C14.2104 5.4445 14.2805 5.56954 14.3224 5.70502C14.3642 5.84051 14.3767 5.98334 14.3591 6.12403L13.6091 12.124C13.5789 12.3659 13.4614 12.5884 13.2787 12.7497C13.0959 12.911 12.8606 13 12.6169 13H4.99963"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        +37
                      </button>
                      <button
                        type="button"
                        className={classnames(
                          styles.downvotes,
                          styles.selected
                        )}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.99963 3H4.99963V9.5H1.99963C1.86703 9.5 1.73985 9.44732 1.64608 9.35355C1.55231 9.25979 1.49963 9.13261 1.49963 9V3.5C1.49963 3.36739 1.55231 3.24021 1.64608 3.14645C1.73985 3.05268 1.86703 3 1.99963 3V3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.99963 9.5L7.49963 14.5C7.76228 14.5 8.02235 14.4483 8.265 14.3478C8.50765 14.2472 8.72813 14.0999 8.91385 13.9142C9.09956 13.7285 9.24688 13.508 9.34739 13.2654C9.4479 13.0227 9.49963 12.7626 9.49963 12.5V11H13.3669C13.5086 11 13.6488 10.9698 13.7781 10.9115C13.9073 10.8532 14.0227 10.7681 14.1165 10.6618C14.2104 10.5555 14.2805 10.4305 14.3224 10.295C14.3642 10.1595 14.3767 10.0167 14.3591 9.87597L13.6091 3.87597C13.5789 3.63411 13.4614 3.41163 13.2787 3.25032C13.0959 3.08902 12.8606 3 12.6169 3H4.99963"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        -39
                      </button>
                    </div>
                  </div>
                  <p className={styles.commentText}>
                    Ой да кому воообще нужны ваши налоги, нету налогов – нету
                    проблем
                  </p>
                  <div className={styles.commentReply}>
                    <button type="button" className={styles.button}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 9.5L14 6.5L11 3.5" fill="#666666" />
                        <path
                          d="M11 9.5L14 6.5L11 3.5"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12.5C2 10.9087 2.63214 9.38258 3.75736 8.25736C4.88258 7.13214 6.4087 6.5 8 6.5H14"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      ОТВЕТИТЬ
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </li>

        </ul>
      </>
    );
  }
  return (
    <>
      <div>
        <h1 className={styles.title}>
          Уголовный Кодекс Республики Беларусь
            </h1>
        <p className={styles.projectCaption}>
          Переформулированы многие термины на современные. Убраны все
          наказания посредством смертной казни.
            </p>

        <ul className={styles.tags}>
          <li className={styles.tag}>Уголовное право</li>
          <li className={classnames(styles.tag, styles.tagHighlighted)}>
            #уголовка
              </li>
          <li className={classnames(styles.tag, styles.tagHighlighted)}>
            #Отменасмертнойказни
              </li>
        </ul>
        <div className={styles.projectMeta}>
          <ul className={styles.statuses}>
            <li className={styles.status}>Чтение I</li>
            <li className={styles.status}>Чтение II</li>
            <li
              className={classnames(
                styles.status,
                styles.statusHighlighted
              )}
            >
              Чтение III
                </li>
            <li className={styles.status}>Опубликован в базе</li>
          </ul>
          <div className={styles.deadline}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4.5V8H11.5"
                stroke="#666666"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5Z"
                stroke="#666666"
                strokeMiterlimit="10"
              />
              <path
                d="M12.2427 1.63574L14.364 3.75706"
                stroke="#666666"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.63599 3.75706L3.75731 1.63574"
                stroke="#666666"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Осталось 3 дня</span>
          </div>
        </div>
      </div>

      <h2 className={styles.subtitle}>Инициаторы</h2>
      <ul className={styles.authors}>
        <li className={styles.author}>
          <img src={author1} alt="" />
          <span>Валерий Роналду</span>
        </li>
        <li className={styles.author}>
          <img src={author2} alt="" />
          <span>Геннадий Газманов</span>
        </li>
        <li className={styles.author}>
          <img src={author3} alt="" />
          <span>Валерия Пугачева</span>
        </li>
        <li className={classnames(styles.authorCount, styles.author)}>
          <span>+32 инициатора</span>
        </li>
      </ul>

      <div className={styles.searchBar}>
        <Find />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Поиск обсуждений по ID, ключевым словам"
        />
      </div>

      <div>
        <h2 className={styles.subtitle}>Общее Обсуждение</h2>
        <ul className={styles.comments}>
          <li>
            <div className={styles.comment}>
              <div className={styles.commentInfo}>
                <div className={styles.commentAuthorBox}>
                  <img src={author3} alt="" />
                  <div>
                    <div className={styles.commentAuthor}>
                      <div className={styles.commentAuthorName}>
                        <span>Валерия Пугачева</span>
                        <ul className={styles.commentAuthorTags}>
                          <li className={styles.commentAuthorExpert}>
                            Эксперт
                              </li>
                          <li className={styles.commentAuthorRating}>
                            Рейтинг: +737
                              </li>
                        </ul>
                      </div>
                    </div>
                    <p className={styles.commentAuthorTitle}>
                      Бывший инспектор по налогам и сборам
                        </p>
                  </div>
                </div>

                <div className={styles.commentActions}>
                  <button type="button" className={styles.button}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03931 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52185 9.18577C4.60063 9.25218 4.65906 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.1933 11.8683 8.27569 11.9208Z"
                        fill="#666666"
                        stroke="#666666"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                        В ИЗБРАННОЕ
                      </button>
                  <button
                    type="button"
                    className={classnames(styles.upvotes, styles.selected)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.99963 6.5H4.99963V13H1.99963C1.86703 13 1.73985 12.9473 1.64608 12.8536C1.55231 12.7598 1.49963 12.6326 1.49963 12.5V7C1.49963 6.86739 1.55231 6.74021 1.64608 6.64645C1.73985 6.55268 1.86703 6.5 1.99963 6.5V6.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.99963 6.5L7.49963 1.5C7.76228 1.5 8.02235 1.55173 8.265 1.65224C8.50765 1.75275 8.72813 1.90007 8.91385 2.08579C9.09956 2.2715 9.24688 2.49198 9.34739 2.73463C9.4479 2.97728 9.49963 3.23736 9.49963 3.5V5H13.3669C13.5086 5 13.6488 5.03015 13.7781 5.08846C13.9073 5.14677 14.0227 5.2319 14.1165 5.3382C14.2104 5.4445 14.2805 5.56954 14.3224 5.70502C14.3642 5.84051 14.3767 5.98334 14.3591 6.12403L13.6091 12.124C13.5789 12.3659 13.4614 12.5884 13.2787 12.7497C13.0959 12.911 12.8606 13 12.6169 13H4.99963"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                        +374
                      </button>
                  <button type="button" className={styles.downvotes}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.99963 3H4.99963V9.5H1.99963C1.86703 9.5 1.73985 9.44732 1.64608 9.35355C1.55231 9.25979 1.49963 9.13261 1.49963 9V3.5C1.49963 3.36739 1.55231 3.24021 1.64608 3.14645C1.73985 3.05268 1.86703 3 1.99963 3V3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.99963 9.5L7.49963 14.5C7.76228 14.5 8.02235 14.4483 8.265 14.3478C8.50765 14.2472 8.72813 14.0999 8.91385 13.9142C9.09956 13.7285 9.24688 13.508 9.34739 13.2654C9.4479 13.0227 9.49963 12.7626 9.49963 12.5V11H13.3669C13.5086 11 13.6488 10.9698 13.7781 10.9115C13.9073 10.8532 14.0227 10.7681 14.1165 10.6618C14.2104 10.5555 14.2805 10.4305 14.3224 10.295C14.3642 10.1595 14.3767 10.0167 14.3591 9.87597L13.6091 3.87597C13.5789 3.63411 13.4614 3.41163 13.2787 3.25032C13.0959 3.08902 12.8606 3 12.6169 3H4.99963"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                        -32
                      </button>
                </div>
              </div>
              <p className={styles.commentText}>
                В своей работе постоянно сталкивалась с проблемами
                правильного консультирования населения насчёт статьи 115.
                Хотелось бы обсудить с экспертной группой данную статью тут,
                чтобы предложить адекватные изменения.
                  </p>
              <div className={styles.commentReply}>
                <button type="button" className={styles.button}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 9.5L14 6.5L11 3.5" fill="#666666" />
                    <path
                      d="M11 9.5L14 6.5L11 3.5"
                      stroke="#666666"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12.5C2 10.9087 2.63214 9.38258 3.75736 8.25736C4.88258 7.13214 6.4087 6.5 8 6.5H14"
                      stroke="#666666"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                      ОТВЕТИТЬ
                    </button>
              </div>
            </div>

            <div className={styles.commentOpen}>
              <button type="button">Открыть обсуждение (127)</button>
            </div>
          </li>

          <li>
            <div className={styles.comment}>
              <div className={styles.commentInfo}>
                <div className={styles.commentAuthorBox}>
                  <img src={author4} alt="" />
                  <div>
                    <div className={styles.commentAuthor}>
                      <div className={styles.commentAuthorName}>
                        <span>Валентин Аверин</span>
                        <ul className={styles.commentAuthorTags}>
                          <li className={styles.commentAuthorRating}>
                            Рейтинг: +737
                              </li>
                        </ul>
                      </div>
                    </div>
                    <p className={styles.commentAuthorTitle}>Безработный</p>
                  </div>
                </div>

                <div className={styles.commentActions}>
                  <button type="button" className={styles.button}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03931 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52185 9.18577C4.60063 9.25218 4.65906 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.1933 11.8683 8.27569 11.9208Z"
                        fill="#666666"
                        stroke="#666666"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                        В ИЗБРАННОЕ
                      </button>
                  <button type="button" className={styles.upvotes}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.99963 6.5H4.99963V13H1.99963C1.86703 13 1.73985 12.9473 1.64608 12.8536C1.55231 12.7598 1.49963 12.6326 1.49963 12.5V7C1.49963 6.86739 1.55231 6.74021 1.64608 6.64645C1.73985 6.55268 1.86703 6.5 1.99963 6.5V6.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.99963 6.5L7.49963 1.5C7.76228 1.5 8.02235 1.55173 8.265 1.65224C8.50765 1.75275 8.72813 1.90007 8.91385 2.08579C9.09956 2.2715 9.24688 2.49198 9.34739 2.73463C9.4479 2.97728 9.49963 3.23736 9.49963 3.5V5H13.3669C13.5086 5 13.6488 5.03015 13.7781 5.08846C13.9073 5.14677 14.0227 5.2319 14.1165 5.3382C14.2104 5.4445 14.2805 5.56954 14.3224 5.70502C14.3642 5.84051 14.3767 5.98334 14.3591 6.12403L13.6091 12.124C13.5789 12.3659 13.4614 12.5884 13.2787 12.7497C13.0959 12.911 12.8606 13 12.6169 13H4.99963"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                        +37
                      </button>
                  <button
                    type="button"
                    className={classnames(
                      styles.downvotes,
                      styles.selected
                    )}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.99963 3H4.99963V9.5H1.99963C1.86703 9.5 1.73985 9.44732 1.64608 9.35355C1.55231 9.25979 1.49963 9.13261 1.49963 9V3.5C1.49963 3.36739 1.55231 3.24021 1.64608 3.14645C1.73985 3.05268 1.86703 3 1.99963 3V3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.99963 9.5L7.49963 14.5C7.76228 14.5 8.02235 14.4483 8.265 14.3478C8.50765 14.2472 8.72813 14.0999 8.91385 13.9142C9.09956 13.7285 9.24688 13.508 9.34739 13.2654C9.4479 13.0227 9.49963 12.7626 9.49963 12.5V11H13.3669C13.5086 11 13.6488 10.9698 13.7781 10.9115C13.9073 10.8532 14.0227 10.7681 14.1165 10.6618C14.2104 10.5555 14.2805 10.4305 14.3224 10.295C14.3642 10.1595 14.3767 10.0167 14.3591 9.87597L13.6091 3.87597C13.5789 3.63411 13.4614 3.41163 13.2787 3.25032C13.0959 3.08902 12.8606 3 12.6169 3H4.99963"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                        -39
                      </button>
                </div>
              </div>
              <p className={styles.commentText}>
                Ой да кому воообще нужны ваши налоги, нету налогов – нету
                проблем
                  </p>
              <div className={styles.commentReply}>
                <button type="button" className={styles.button}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 9.5L14 6.5L11 3.5" fill="#666666" />
                    <path
                      d="M11 9.5L14 6.5L11 3.5"
                      stroke="#666666"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12.5C2 10.9087 2.63214 9.38258 3.75736 8.25736C4.88258 7.13214 6.4087 6.5 8 6.5H14"
                      stroke="#666666"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                      ОТВЕТИТЬ
                    </button>
              </div>
            </div>

            <div className={styles.commentOpen}>
              <button type="button">Открыть обсуждение (8)</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export function DiscussionPage() {
  let { projectId } = useParams();

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <MenuBar />
      </header>
      <main className={styles.content}>
        <section className={styles.project}>
          <Link to={"/"} className={styles.back}>
            <ArrowLeft />
            Назад
          </Link>
          <article className={styles.text}>
            2. Индивидуальный предприниматель до окончания налогового периода
            признается плательщиком в отношении всех объектов налогообложения:
            при возникновении обстоятельства, указанного в подпункте 1.1 пункта
            1 настоящей статьи, – начиная с 1-го числа месяца, следующего за
            месяцем возникновения такого обстоятельства; при принятии решения об
            уплате налога на добавленную стоимость – начиная с 1-го числа
            месяца, указанного в уведомлении о принятом решении об уплате налога
            на добавленную стоимость, если иное не предусмотрено частью второй
            настоящего пункта. Индивидуальный предприниматель, государственная
            регистрация которого осуществлена в текущем налоговом периоде,
            представивший уведомление о принятом решении об уплате налога на
            добавленную стоимость в месяце его государственной регистрации,
            признается плательщиком в отношении всех объектов налогообложения
            начиная с дня его государственной регистрации и до окончания
            налогового периода.
            <br></br>
            <strong>
              Статья 114. Исполнение обязанности плательщика организациями и
              индивидуальными предпринимателями при реализации товаров (работ,
              услуг), имущественных прав на территории Республики Беларусь
              иностранными организациями
            </strong>
            1. При реализации товаров (работ, услуг), имущественных прав на
            территории Республики Беларусь иностранными организациями, не
            осуществляющими деятельность в Республике Беларусь через постоянное
            представительство и не состоящими в связи с этим на учете в
            налоговых органах Республики Беларусь (далее в настоящей главе –
            иностранные организации, не состоящие на учете в налоговых органах
            Республики Беларусь), обязанность по исчислению и уплате в бюджет
            налога на добавленную стоимость возлагается на состоящие на учете в
            налоговых органах Республики Беларусь организации и, если иное не
            установлено статьей 141 настоящего Кодекса, индивидуальных
            предпринимателей, приобретающих данные товары (работы, услуги),
            имущественные права.
            <br></br>
            Такие организации и индивидуальные предприниматели имеют права и
            несут обязанности, установленные статьями 21 и 22 настоящего
            Кодекса. 2. Иностранные организации, в том числе генеральные
            подрядчики, субподрядчики, осуществляющие строительство, монтаж или
            сборку объектов и (или) иные работы и услуги, относящиеся к
            строительной деятельности: 2.1. состоящие в связи с этим на учете в
            налоговых органах Республики Беларусь, исчисляют и уплачивают налог
            на добавленную стоимость с начала осуществления такой деятельности
            на территории Республики Беларусь; 2.2. не состоящие в связи с этим
            на учете в налоговом органе Республики Беларусь, исчисляют и
            уплачивают налог на добавленную стоимость начиная с месяца, на
            который приходится наиболее ранняя из дат: день, следующий за днем
            постановки на учет в налоговом органе Республики Беларусь в
            соответствии с частью третьей подпункта 1.5 пункта 1 статьи 70
            настоящего Кодекса; день, следующий за днем истечения периода,
            установленного пунктами 3 и 4 статьи 180 настоящего Кодекса. 3. При
            реализации товаров (работ, услуг), имущественных прав на территории
            Республики Беларусь иностранными организациями, не состоящими на
            учете в налоговых органах Республики Беларусь, на основе договоров
            комиссии, поручения и иных аналогичных гражданско-правовых договоров
            обязанность по исчислению и уплате в бюджет налога на добавленную
            стоимость возлагается на состоящие на учете в налоговых органах
            Республики Беларусь организации и индивидуальных предпринимателей,
            осуществляющих предпринимательскую деятельность на основе таких
            договоров с иностранными организациями, не состоящими на учете в
            налоговых органах Республики Беларусь. Такие организации и
            индивидуальные предприниматели имеют права и несут обязанности,
            установленные статьями 21 и 22 настоящего Кодекса. 4. Обязанность по
            исчислению и уплате в бюджет налога на добавленную стоимость
            возлагается также на организации и индивидуальных предпринимателей,
            состоящих на учете в налоговых органах Республики Беларусь,
            участвующих в расчетах непосредственно с иностранными организациями,
            не состоящими на учете в налоговых органах Республики Беларусь, и
            заключивших c такими иностранными организациями договор (в том числе
            договор, устанавливающий оказание услуг по заключению договора на
            приобретение (реализацию) работ (услуг), имущественных прав), в
            результате которого товары (работы, услуги), имущественные права
            реализуются на территории Республики Беларусь. Такие организации и
            индивидуальные предприниматели имеют права и несут обязанности,
            установленные статьями 21 и 22 настоящего Кодекса. 5. На обороты по
            реализации товаров (работ, услуг), имущественных прав на территории
            Республики Беларусь иностранными организациями, не состоящими на
            учете в налоговых органах Республики Беларусь, распространяются
            положения пункта 2 статьи 115 и пункта 1 статьи 118 настоящего
            Кодекса.
            <br></br>
            <strong>
              Статья 115. Объекты налогообложения налогом на добавленную
              стоимость
            </strong>
            <br></br>
            1. Объектами налогообложения налогом на добавленную стоимость
            признаются: 1.1. обороты по реализации товаров (работ, услуг),
            имущественных прав на территории Республики Беларусь, включая
            обороты: 1.1.1. по реализации товаров (работ, услуг), имущественных
            прав плательщиком своим работникам; 1.1.2. по обмену товарами
            (работами, услугами), имущественными правами; 1.1.3. по
            безвозмездной передаче товаров (работ, услуг), имущественных прав;
            1.1.4. по передаче товаров (работ, услуг), имущественных прав по
            соглашению о предоставлении взамен исполнения обязательства
            отступного, а также предмета залога залогодателем залогодержателю
            (кредитору) при неисполнении или ненадлежащем исполнении
            обеспеченного залогом обязательства; 1.1.5. по передаче
            лизингодателем предмета договора финансовой аренды (лизинга) (далее
            – предмет лизинга) лизингополучателю; 1.1.6. по сдаче арендодателем
            объекта аренды арендатору; 1.1.7. по отгрузке (возврату) возвратной
            тары продавцом покупателю (покупателем продавцу). Возвратной тарой
            является тара, стоимость которой не включается в цену реализации
            отгружаемых в ней товаров и которая подлежит возврату продавцу
            товаров на условиях и в сроки, установленные договором или
            законодательством; 1.1.8. по реализации товаров (работ, услуг),
            имущественных прав, возникающие у доверительного управляющего в
            связи с доверительным управлением имуществом по договору
            доверительного управления имуществом в интересах вверителя
            (выгодоприобретателя); 1.1.9. по передаче товаров в рамках договора
            займа в виде вещей; 1.1.10. по прочему выбытию товаров собственного
            производства, помещенных под таможенную процедуру беспошлинной
            торговли, в магазинах беспошлинной торговли, если при их
            приобретении в товарно-транспортных накладных была выделена ставка
            налога на добавленную стоимость в размере ноль (0) процентов в
            соответствии с подпунктом 1.10 пункта 1 статьи 122 настоящего
            Кодекса; 1.1.11. по передаче имущественных прав на объекты
            интеллектуальной собственности; 1.1.12. исключен; 1.1.13. по
            передаче имущества в безвозмездное пользование ссудополучателю;
            1.1.14. по передаче абонентом субабонентам всех видов полученных
            энергии, газа, воды; 1.2. ввоз товаров на территорию Республики
            Беларусь и (или) иные обстоятельства, с наличием которых настоящий
            Кодекс и (или) акты Президента Республики Беларусь, таможенное
            законодательство, международные договоры Республики Беларусь,
            составляющие право Евразийского экономического союза, связывают
            возникновение обязанности по уплате налога на добавленную стоимость.
          </article>
          <Link to={`/discussion/${projectId}/164`} className={styles.anchor}>
            <span>34</span>
            <div className={styles.bubble}>
              <div className={styles.icon}>
                {" "}
                <Chat />
              </div>
              <span>№ 164</span>
            </div>
          </Link>
          <Link to={`/discussion/${projectId}/165`} className={styles.anchor}>
            <span>34</span>
            <div className={styles.bubble}>
              <div className={styles.icon}>
                {" "}
                <Chat />
              </div>
              <span>№ 165</span>
            </div>
          </Link>
          <button
            type="button"
            className={classnames(styles.anchor, styles.anchorCreate)}
          >
            <span>Начать обсуждение</span>
            <div className={styles.icon}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.875 6H10.125"
                  stroke="#F0FEF2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 1.875V10.125"
                  stroke="#F0FEF2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </section>
        <section className={styles.discussion}>
          <Switch>
            <Route path="/discussion/:projectId/:discussionId" component={Discussions} />
            <Route path="/discussion/:projectId" component={Discussions} />
          </Switch>
        </section>
        <form
          className={styles.inputBox}
          onSubmit={(event) => event.preventDefault()}
        >
          <textarea
            className={styles.input}
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Введите сообщение..."
          ></textarea>
          <button type="submit" className={styles.submit}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1513 9.45506L3.95479 2.06504C3.84377 2.00286 3.71642 1.97606 3.58976 1.98821C3.4631 2.00035 3.34317 2.05086 3.24598 2.133C3.1488 2.21513 3.079 2.32497 3.04591 2.44783C3.01283 2.5707 3.01803 2.70073 3.06083 2.82056L5.54997 9.79017C5.59852 9.92611 5.59852 10.0747 5.54997 10.2106L3.06083 17.1802C3.01803 17.3 3.01283 17.4301 3.04591 17.5529C3.079 17.6758 3.1488 17.7856 3.24598 17.8678C3.34317 17.9499 3.4631 18.0004 3.58976 18.0126C3.71642 18.0247 3.84377 17.9979 3.95479 17.9357L17.1513 10.5457C17.2482 10.4914 17.3289 10.4123 17.3851 10.3164C17.4413 10.2206 17.4709 10.1115 17.4709 10.0004C17.4709 9.88928 17.4413 9.78019 17.3851 9.68434C17.3289 9.58849 17.2482 9.50935 17.1513 9.45506V9.45506Z"
                stroke="#FDF3F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.625 10H10.625"
                stroke="#FDF3F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </main>
    </div>
  );
}
