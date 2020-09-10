import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import ProgrammingPage from "./pages/ProgrammingPage";
import NotFoundPage from "./pages/NotFoundPage";

function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/programming" component={ProgrammingPage} />
                {/*<Route component={NotFoundPage} />*/}
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(
<Routes />,
    document.getElementById('root')
);