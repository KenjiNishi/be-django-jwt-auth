import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, HashRouter as Router} from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import store from '../store';
import Alerts, {alertOptions} from './layout/Alerts'
import { loadUser } from '../actions/auth'
import Header from './layout/Header'
import Login from './accounts/Login'
import Register from './accounts/Register'

class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return(
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <React.Fragment> 
                            <Alerts/>
                            <div className="container">
                                <Header />
                                 <Switch>
                                    <Route exact path="/login/" component={Login} />
                                    <Route exact path="/registration/" component={Register} />
                                </Switch>
                            </div>
                        </React.Fragment>
                    </Router>
                </AlertProvider>
            </Provider>

        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));