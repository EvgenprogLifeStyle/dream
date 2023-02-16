import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button/Button';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button className={classNames('', {}, [])} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
        </Button>
    );
};
