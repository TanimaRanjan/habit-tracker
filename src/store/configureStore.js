
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import habitReducer from '../reducers/habits'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store creation
export default () => {
    const store = createStore(
        combineReducers({
                habit:habitReducer,
                auth: authReducer
            }),
            composeEnhancers(applyMiddleware(thunk))
        ) 
        return store;
}
