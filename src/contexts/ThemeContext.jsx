import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProviderCrypto = ({children}) => {

    const [isThemeActive, setIsThemeActive] = useState(false);
    const [teste, setteste] = useState('teste');

    function toggleActionTheme() {
        setIsThemeActive((theme) => !theme);
    }

    return (
        <ThemeContext.Provider value={{isThemeActive, toggleActionTheme, teste}}>
            {children}
        </ThemeContext.Provider>
    )

}