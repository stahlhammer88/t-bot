import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { Reducer } from './reducers/index';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TweetDetails from './components/TweetDetails';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

const Routes = () => (
    <BrowserRouter>
        <Provider store={createStoreWithMiddleware(Reducer)}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/tweet/:id" component={TweetDetails}/>
            </Switch>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(<Routes/>, document.getElementById('root'));