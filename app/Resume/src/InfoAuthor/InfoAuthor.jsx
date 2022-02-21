import PropTypes from 'prop-types';
import React, { useContext} from 'react';
import screen from './istockphoto-1173458627-612x612.jpg';
import phone from './iconsphone.png';
import telegram from './iconstelegram.png';
import twitter from './iconstwitter.png';
import email from './iconsemail.png';


import { AppContext } from '../App';// контекст
import styles from './InfoAuthor.module.sass';


export function InfoAuthor() {

  const {theme, infoAutor} = useContext(AppContext)

  /*
   * theme = true светлый режим сайта/ false темный режим
   */
  let cssTheme = theme ?
  `${styles.infoAuthor} ${styles.light}`:
  `${styles.infoAuthor} ${styles.dark}`

  const arrayDiv =
  {
    screen : (<div id="screen"
             className={styles["infoAuthor-chart"]}
             style={{backgroundImage: `url(${screen})`}}>
             </div>),

    contact : (<div id="contact" className={styles["infoAuthor-chart"]}>
                <ol className={`${cssTheme} ${styles["infoAuthor-chart-ol"]}`}>
                  <li>
                    <img src={phone} alt="logo phone"/>
                    <h2>8(995)313-78-15</h2>
                  </li>
                  <li>
                    <img src={telegram} alt="telegram" />
                    <h2><a className={cssTheme} href="https://t.me/Goodweb3">Telegram</a></h2>
                  </li>
                  <li>
                    <img src={twitter} alt="twitter" />
                    <h2><a className={cssTheme} href="https://twitter.com/SKYNET64927015">Twitter</a></h2>
                  </li>
                  <li>
                    <img src={email} alt="email" />
                    <h2><a href="mailto:esaul-00@mail.ru" className={cssTheme}>Написать письмо</a></h2>
                  </li>

                </ol>
              </div>),

    author : (<div id="author" className={styles["infoAuthor-chart"]}>
              <p>Здраствуйте! Расскажу коротко о себе,  меня зовут Егоров Сергей Анатольевич, возраст 33 года, очень позитивный, жизнерадостный и целеустремленный человек 😁, люблю смотреть на звезды, люблю ходить в турпоходы.
              Ранее сфера моей деятельности лежала в области транспортной логистики 🚆. Программированием занимался регулярно в свободное время, нравилось решать трудные задачи необычным способом. На данный момент решил сменить область деятельности и занятся программированием, а если точнее то веб-программированием. Ищу вакансию на позицию junior react developer с зарплатной вилкой от 50.000тр до 60.000тр после вычета всех налогов. Готов рассмотреть вакансии с релокацией.</p>
              </div>),

    github : (<div id="github" className={styles["infoAuthor-chart"]}>
      <p>
        <a href="https://github.com/COD-ESA/Resume/tree/master" className={cssTheme}> Первый - source данного Resume</a>
          <hr />
        <a href="https://github.com/Sirius100/ModifTodo" className={cssTheme}>Второй - source app Todo </a>
          <hr />
        <a href="https://sirius100.github.io/" className={cssTheme}>онлайн версия app Todo</a>
        <hr />
        </p>
      </div>),

    education : (<div id="education" className={styles["infoAuthor-chart"]}>
                <p>В наличии имеется диплом о высшем техническом образовании. Закончил Владимирский государственный университет имени Александра Григорьевича и Николая Григорьевича Столетовых, по специальности &laquo; Вычислительные машины, комплексы, системы и сети &raquo;</p>
                </div>),

    skill : (<div id="skill" className={styles["infoAuthor-chart"]}>
              <p>В разработке использую следующие инструменты:
                <ul className={styles["infoAuthor-chart-ol"]}>
                  <li>Visual studio code ☺</li>
                    <hr />
                  <li>шаблонизатор Pug</li>
                    <hr />
                  <li>css препроцессор SCSS</li>
                    <hr />
                  <li>для автоматизации рутинных задач Gulp</li>
                    <hr />
                  <li>системы контроля версий Github</li>
                    <hr />
                  <li>в новых проектах использую React</li>
                </ul>
              </p>
            </div>)
  }


  return (


    <div className={cssTheme}>

        {arrayDiv[infoAutor]}

    </div>

  )
}
