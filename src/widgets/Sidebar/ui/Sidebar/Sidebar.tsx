import {classNames} from "shared/lib/classNames/classNames";
import s from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwither/LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)


    const onToggle = () => {
        setCollapsed(prev => !prev)// принимает предыдущее значение
    }

    return (
        <div className={classNames(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>

            <button onClick={onToggle}>toggle</button>
            <div className={s.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={s.lang}/>
            </div>
        </div>
    );
};
