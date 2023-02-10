import {classNames} from "shared/lib/classNames/classNames";
import s from './ThemeSwitcher.module.scss'
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import {Button} from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    console.log(theme)
    return (
        <Button className={classNames(s.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightTheme/> : <DarkTheme/>}
        </Button>
    );
};
