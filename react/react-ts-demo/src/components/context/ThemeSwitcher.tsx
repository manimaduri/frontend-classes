import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const ThemeSwitcher = () => {
  const context = useContext(ThemeContext);

  if(!context){
    throw new Error("ThemeSwitcher must be used inside ThemeProvider");
  }

  const {toggleTheme} = context;
  return (
    <div>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemeSwitcher