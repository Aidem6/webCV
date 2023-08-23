import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { SunIcon } from '../assets/icons/sun.jsx';
import { MoonIcon } from '../assets/icons/moon.jsx';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  if (theme === 'light') {
    return (
      <a onClick={() => setTheme('dark')}>
        {/* <FontAwesomeIcon icon={faMoon} style={{float: 'right', height: '32px', margin: '10px', fontWeight: 700}} /> */}
        <MoonIcon />
      </a>
    );
  } else {
    return (
      <a onClick={() => setTheme('light')}>
        {/* <FontAwesomeIcon icon={faSun} style={{float: 'right', height: '32px', margin: '10px', fontWeight: 700}} /> */}
        <SunIcon />
      </a>
    );
  }
}