import React from 'react';

import AppHeader from './components/appHeader/index';
import Menu from './components/menu/index';

const Layout = (props) => {
    return (
        <div>
            <AppHeader 
                loginUser={props.loginUser}
                setOutInSistem={props.setOutInSistem} />
            <div className="application-page__menu">
                <Menu 
                    buttons={[
                        {id: 1, label: 'Заявки', path: '/applications', bid: '5'},
                        {id: 2, label: 'Одобренные', path: '/approved'},
                        {id: 3, label: 'Отклоненные', path: '/reject'},
                        {id: 4, label: 'На практике', path: '/practik'},
                        {id: 5, label: 'Архив', path: '/achive', bid: '8'},
                        {id: 6, label: 'Отчет', path: '/report'}
                    ]} />
            </div>
            {props.children}
        </div>
    );
};

export default Layout;