import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwither/LangSwitcher';
import s from './Sidebar.module.scss';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);// принимает предыдущее значение
    };

    return (
        <div className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [])}>
            <button onClick={onToggle}>toggle</button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={s.lang} />
            </div>
        </div>
    );
};
