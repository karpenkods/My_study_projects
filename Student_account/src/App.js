import React, { useEffect, useState } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Components from './pages/components';
import AchivePage from './pages/achivePage/index';
import ApplicationPage from './pages/applicationPage/index';
import ApprovedPage from './pages/approvedPage/index';
import PracticPage from './pages/practicPage/index';
import RejectPage from './pages/rejectPage/index';
import ReportPage from './pages/reportPage/index';
import Autorize from './pages/autorize/index';

const App = (props) => {

    // Базовый URL страницы
    const [baseUrl, SetBaseUrl] = useState(null);
    // Логин пользователя
    const [loginUser, SetLogiUser] = useState(null);
    // Получение истории
    const history = props;

    useEffect(() => {
        let login = localStorage.getItem('role');
        SetLogiUser(login);
        let baseUrl = localStorage.getItem('baseUrl');
        SetBaseUrl(baseUrl);
    });

    // Генератор ролей
    const setGenerateRoles = (role) => {
        switch(role) {
            case 'mentor' : return 'applications';
            case 'hr' : return 'applications';
            case 'director' : return 'applications';

            default : return '/'
        };
    };

    // Получение логина пользователя
    const setLogin = (login) => {
        let role = setGenerateRoles(login);
        let baseUrl = window.location.href;
        
        window.localStorage.setItem('role', login);
        window.localStorage.setItem('baseUrl', baseUrl);
        window.location.assign(`${baseUrl}${role}`);
    };

    // Выход из системы
    const setOutInSistem = () => {
        window.location.assign(baseUrl);
        localStorage.removeItem('role')
    };

    return (
        <div>
            <Switch >
                <Route history={history} exact path="/components" render={props => <Components {...props} loginUser={loginUser} setOutInSistem={setOutInSistem} /> } />
                <Route history={history} exact path="/applications" render={props => <ApplicationPage {...props} loginUser={loginUser} setOutInSistem={setOutInSistem} /> } />
                <Route history={history} exact path="/approved" render={props => <ApprovedPage {...props} loginUser={loginUser} /> } setOutInSistem={setOutInSistem} />
                <Route history={history} exact path="/reject" render={props => <RejectPage {...props} loginUser={loginUser}  /> } setOutInSistem={setOutInSistem} />
                <Route history={history} exact path="/practik" render={props => <PracticPage {...props} loginUser={loginUser} /> } setOutInSistem={setOutInSistem} />
                <Route history={history} exact path="/achive" render={props => <AchivePage {...props} loginUser={loginUser} /> } setOutInSistem={setOutInSistem} />
                <Route history={history} exact path="/report" render={props => <ReportPage {...props} loginUser={loginUser} /> } setOutInSistem={setOutInSistem} />
                <Route history={history} exact path="/" render={props => <Autorize {...props} setLogin={setLogin} /> }  />
                <Redirect to={'/applications'} />
            </Switch>
        </div>
    );
};

export default withRouter(App);