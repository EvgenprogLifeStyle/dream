import {classNames} from "shared/lib/classNames/classNames";
import s from './PageError.module.scss'
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface PageErrorProps {
    className?: string
}

export const PageError = ({className}: PageErrorProps) => {

    const {t} = useTranslation()
    const reloadPage = ()=>{
        location.reload()
    }

    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <p>{t('Произошла не предвиденная ошибка')}</p>
            <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
        </div>
    );
};
