import React from 'react'
import ReactDOM from 'react-dom'
import {Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { login, logout } from './actions/auth'
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
        renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})





// const HABITS = [
//     { name: 'No Sweets', description: 'No sugar', tags: 'food', chain:'longest', 
//         frequency: 'daily', endDate:null, startDate:11111111,
//         dates: [
//         { id:120, createAt :12234455666, selected : 'yes'  },
//         { id:121, createAt :12234465666, selected : 'skip' },
//         { id:122, createAt :12234475666, selected : 'no' } ,
//         { id:1322, createAt :12234475666, selected : 'no' } ,
//         { id:1422, createAt :12234475666, selected : 'no' } ,
//         { id:1522, createAt :12234475666, selected : 'no' } ,
//         { id:1622, createAt :12234475666, selected : 'no' } ,
//         { id:1722, createAt :12234475666, selected : 'no' } ]
//     }, 
//     { name: 'Get up early ', description: 'Wake up by 6:30 AM', tags: 'food', chain:'fixed', 
//     frequency: 'daily', endDate:2222222222, startDate:11111111,
//         dates: [
//         { id:123,  createAt :12234455666,  selected : 'yes' },
//         { id:124, createAt :12234465666,  selected : 'skip'}, 
//         { id:125,  createAt :12234475666,  selected : 'no' } ]
//     }, 
//     { name: 'Work Out', description: 'At least 15 min of workout', tags: 'food', chain:'longest', 
//     frequency: 'daily', endDate:2222222222, startDate:11111111,
//     dates: [
//         { id:126, createAt :12234455666,  selected : 'yes' },
//         { id:127, createAt :12234465666,  selected : 'skip' },
//         { id:128, createAt :12234475666,  selected : 'no' } ]
//     }
//   ];


  /*
    <HabitSummary />
    
    <HabitTable>   // ProductTable 
        <HabitList>   // ProductCategory
            <HabitTimeline></HabitTimeline>     // ProductRow
        </ HabitList>
    </ HabitTable>
  */

//   class HabitList extends React.Component {
//       render () {
//           const name = this.props.name;
//           return (
//               <tr>
//                 <th>{name}</th>
//               </tr>
//           )
//       }
//   }

//   class HabitTimeline extends React.Component {
//     render () {
//         const createAt = this.props.date.createAt
//         const selected = this.props.date.selected

//         return (
//             <tr>
//                 <td>{createAt}</td>
//                 <td>{selected}</td>
//             </tr>
//         )
//     }
// }


//   class HabitTable extends React.Component {
//       render () {
//           const rows = [];
//           let lastHabit = null
//           this.props.habits.forEach((habit) => {
//             if(habit.name !== lastHabit) {
//                 rows.push(
//                     <HabitList 
//                         name={habit.name}
//                         key={habit.name} />
//                 )
//             }

//             habit.dates.forEach((date) => {
//                 rows.push(
//                     <HabitTimeline 
//                         date={date}
//                         key={date.id} />
//                 )
//             })
            
//             lastHabit=habit.name;
//           })
//           return (
//             <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th> --- </th>
//               </tr>
//             </thead>
//             <tbody>{rows}</tbody>
//             </table>
//           )
//       }
//   }

//   ReactDOM.render(
//     <HabitTable habits={HABITS} />, document.getElementById('app1')
//   )