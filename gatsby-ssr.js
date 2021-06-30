import React from 'react';
import ThemeLocalProvider from 'providers/ThemeLocalProvider';

export const wrapRootElement = ({ element }) => <ThemeLocalProvider>{element}</ThemeLocalProvider>;
