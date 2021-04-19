import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import DashboardPage from './pages/DashboardPage.component';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
};

export default App;