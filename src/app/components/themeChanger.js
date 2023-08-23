import { useTheme } from 'next-themes'
import { SunIcon } from '../assets/icons/sun.jsx';
import { MoonIcon } from '../assets/icons/moon.jsx';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  if (theme === 'light') {
    return (
      <span onClick={() => setTheme('dark')}>
        {/* <FontAwesomeIcon icon={faMoon} style={{float: 'right', height: '32px', margin: '10px', fontWeight: 700}} /> */}
        <MoonIcon />
      </span>
    );
  } else {
    return (
      <span onClick={() => setTheme('light')}>
        {/* <FontAwesomeIcon icon={faSun} style={{float: 'right', height: '32px', margin: '10px', fontWeight: 700}} /> */}
        <SunIcon />
      </span>
    );
  }
}