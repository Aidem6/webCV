import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  if (theme === 'light') {
    return (
      <a onClick={() => setTheme('dark')}>
        <FontAwesomeIcon icon={faMoon} style={{float: 'right', height: '32px', margin: '10px', fontWeight: 700}} />
      </a>
    );
  } else {
    return (
      <a onClick={() => setTheme('light')}>
        <FontAwesomeIcon icon={faSun} style={{float: 'right', height: '32px', margin: '10px', fontWeight: 700}} />
      </a>
    );
  }
}