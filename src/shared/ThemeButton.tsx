import { useTheme } from '../hooks/useTheme'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeButton = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <button 
            onClick={changeTheme}
            className='ml-2 p-2 rounde-full transition-colors duration-300'
            aria-label='Toggle theme'
        >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
    )
}

export default ThemeButton;