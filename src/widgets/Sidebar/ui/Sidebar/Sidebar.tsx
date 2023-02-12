import {classNames} from "shared/lib/classNames/classNames";
import s from './Sidebar.module.scss' 
import { useState } from 'react';

interface NavbarProps {
    className?: string
}

export const Sidebar = ({className}: NavbarProps) => {

    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className={classNames(s.Sidebar, {[s.collapsed]: collapsed }, [className])}>
          
            <div className={s.links}>
            
            </div>

        </div> 
    );
};
