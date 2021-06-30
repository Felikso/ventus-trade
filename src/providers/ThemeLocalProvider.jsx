import React, { createContext } from "react";
import useDarkMode from "hooks/useDarkMode";

export const ThemeContext = createContext("light");

const ThemeLocalProvider = ({ children }) => {
	const [themeMode, toggleTheme] = useDarkMode();

	return (
		<ThemeContext.Provider
			value={{
				themeMode,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeLocalProvider;
