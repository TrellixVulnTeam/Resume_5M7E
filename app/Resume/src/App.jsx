import React, {useState } from 'react'
import {Header} from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import {Footer} from './Footer/Footer'
import PropTypes from 'prop-types';
import { InfoAuthor } from './InfoAuthor/InfoAuthor';

import styles from './App.module.sass'


export const AppContext = React.createContext()

function App() {

  const [theme, setTheme] = useState(false)//состояние темы - режим темный/темный по умолчанию (theme=false)

  const  [menu, setMenu] = useState(false) // состояние меню - скрыто по умолчанию (menu=false)

  // infoAutor хранит в себе имя слайда для отображения
  const [infoAutor, setinfoAuthor] = useState("screen");

  // для запуска анимации при смене слайда
  const [cssTrans, setcssTrans] = useState(false);

  // отвечает за сменю надписи на button при смене темы
  const handleOnClickTheme = (event) => {

    if (event.target.textContent === "Light theme" || "Dark theme" )
      setTheme(!theme)
  }

  // показывает/закрывает панель меню
  const handleCallMenu = (event) => {
    setMenu(!menu)
  }

  // получает клик от ссылки (тега "а") из компонента List (в меню)и передает через context компоненту infoAuthor какой div отображать
  const handleClickList = (event) => {

    if(event.target.tagName !== "A")
      return;
    setinfoAuthor(event.target.hash.slice(1));
    setcssTrans(!cssTrans);
  }

  let cssApp = theme ?
    "App App_Light":
    "App App_Dark"

  return (

    <AppContext.Provider value={{handleOnClickTheme, theme, handleCallMenu, menu, handleClickList, infoAutor, cssTrans}}>
      <div className={cssApp}>

        <div  style={{width:"100%", height:"10vh"}}>
          <Header />
        </div>

        <div className={styles["App-main"]}>

          <Sidebar/>
          <InfoAuthor/>

        </div>


        <div style={{width:"100%", height: "10vh"}}>
          <Footer />
        </div>
      </div>
    </AppContext.Provider>

  );
}

export default App;

App.propsTypes = {
  handleOnClickTheme: PropTypes.func,
  handleCallMenu: PropTypes.func,

}
