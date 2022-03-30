import React from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as Pages from '../web/pages';


function Approuter (){
    const history = createBrowserHistory();

    return(
        <Router history={history}>
            <Switch>
               <Route  exact path='/' component={Pages.Landing} />
            </Switch>
        </Router>
    )
}

export default Approuter