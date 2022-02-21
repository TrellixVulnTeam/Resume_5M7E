// import PropTypes from 'prop-types';
import React from 'react';
import { useContext } from 'react';
// import {useState} from 'react';

import { AppContext } from '../../App';// контекст
import styles from './List.module.sass';


export function List() {

  const  {theme, handleClickList} = useContext(AppContext)

    /*
   * theme = true светлый режим сайта/ false темный режим
   */
  let cssTheme = theme ?
  `${styles.list} ${styles.light}`:
  `${styles.list} ${styles.dark}`

  return (
    /**перехватываю onclick через делигирование */
    <>
      <ol className={cssTheme} onClick={handleClickList}>
        <li>
          <a href="#contact"> Как со мной связаться?</a>
        </li>
          <hr />

        <li>
          <a href="#author">Обо мне</a>
        </li>
          <hr />

        <li>
          <a href="#github">Мой репозитарий на github</a>
        </li>
          <hr />

        <li>
          <a href="#education">Образование</a>
        </li>
          <hr />

        <li>
          <a href="#skill">Мои навыки</a>
        </li>
          <hr />
      </ol>
    </>

  )
}
