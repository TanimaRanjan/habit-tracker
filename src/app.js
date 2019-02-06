import React from 'react'
import ReactDOM from 'react-dom'
import {Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { login, logout } from './actions/auth'
import { setSetHabit, startSetHabit } from './actions/habits' 
import LoadingPage from './components/LoadingPage'

import '../node_modules/normalize.css/normalize.css'
import '../public/styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import {firebase} from './firebase/firebase'
import { create } from 'domain';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;

const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetHabit()).then(() => {

        
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
        
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

/*
store.dispatch(startSetExpenses()).then(() => {
    renderApp()
    if (history.location.pathname === '/') {
        history.push('/dashboard')
    }
})
*/

//   ReactDOM.render(
//     <HabitTable habits={HABITS} />, document.getElementById('app1')
//   )