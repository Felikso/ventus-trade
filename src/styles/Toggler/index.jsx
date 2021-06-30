import React, { useContext } from "react"
import { DarkModeToggler } from "react-darkmode-toggler"
import { ThemeContext } from 'providers/ThemeLocalProvider';
import { ToggleWrapper, ToggleIcons } from './styles'
import Toggle from 'react-toggle';

export const Toggler = () => {

  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return(
    <ToggleWrapper>
      <Toggle
        icons={{
          checked: <ToggleIcons alt={themeMode} role="img" aria-label="change-theme">☾</ToggleIcons>,
          unchecked: <ToggleIcons alt={themeMode} role="img" aria-label="change-theme">☼</ToggleIcons>,
        }}
        onChange={toggleTheme}
      />
    </ToggleWrapper>
)}



