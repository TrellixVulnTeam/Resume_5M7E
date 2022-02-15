import React from 'react';
import {useContext} from 'react';
import {List} from './List/List.jsx'
import { Transition } from 'react-transition-group';
import { AppContext } from '../App';// контекст
// import styles from './Sidebar.module.sass';
import './Sidebar.sass';


export function Sidebar() {


  const {theme, menu} = useContext(AppContext)

  /*
   * theme = true светлый режим сайта/ false темный режим
   */
  let cssTheme = theme ?
  `${'Sidebar'} ${'Sidebar_Light'}`:
  `${'Sidebar'} ${'Sidebar_Dark'}`

  console.log(`${cssTheme}`);
  console.log(menu);
return (
    <Transition
      in={menu}
      timeout={2500}
      unmountOnExit>
        {menu => (
          <nav className={`${cssTheme} ${menu}`}>
          <h3> Содержание</h3>
          <hr />
          <List/>
          <code>
            Проект Resume создан c использованием библиотеки React.
            <br />
            <a href="https://ru.reactjs.org"> На сайт React</a>
          </code>
        </nav>
        )}
    </Transition>

  )
}
