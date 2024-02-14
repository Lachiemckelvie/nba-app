import React from 'react'
import logo from '../../assets/images/logo-espn.png';
import classes from "./Header.module.scss";
import { ReactComponent as SettingsIcon } from '../../assets/svgs/settings.svg';
import { ReactComponent as RefreshIcon } from '../../assets/svgs/refresh.svg';

export const Header = () => {
    return (
        <div>
            <div className={classes.header}>
                <div className={classes.logoWrapper}>
                    <img src={logo} alt="ESPN logo" className={classes.logo} />
                </div>
                <button className={classes.refresh}><RefreshIcon /></button>
                <button className={classes.settings}><SettingsIcon /></button>
            </div>
        </div>
    )
}