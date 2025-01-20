import { useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes/darkTheme'
import { GlobalStyles } from './styles/globalStyles';
import { RoutesCrypto } from './routes';
import { ThemeContext, ThemeProviderCrypto } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthUser';
import { toast, ToastContainer } from 'react-toastify';

function App() {

  const [isThemeActive, setIsThemeActive] = useState(false);

  function toggleTheme() {
    setIsThemeActive((theme) => !theme)
  }

  return (
    <AuthProvider>
      <ThemeProviderCrypto>
        <ThemeProvider theme={isThemeActive ? darkTheme : lightTheme}>
        <GlobalStyles />
          <RoutesCrypto theme={isThemeActive} click={toggleTheme}/>
        </ThemeProvider>
      </ThemeProviderCrypto>
    </AuthProvider>
  )
}

export default App
