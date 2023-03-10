import {classNames} from "shared/lib/classNames/classNames";
import s from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();
    return <Button
        className={classNames('s.LangSwitcher', {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}>
        {t('Язык')}
    </Button>


};
