import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import DashboardPage from './pages/DashboardPage.component';
import PostsPage from './pages/PostsPage.component';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/posts" component={PostsPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
};

export default App;