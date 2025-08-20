import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes'
import React from 'react'

const Button: React.FunctionComponent<{ btnCss: string}> = ( { btnCss } ) => {
    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDarkMode = currentTheme === 'dark';

  return (
    <button onClick={() => theme == "dark" ? setTheme('light') : setTheme('dark')} className={ btnCss }>
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}

export default Button
