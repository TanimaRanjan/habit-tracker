import React from 'react'
import HabitForm from './HabitForm'
import { startAddHabit } from '../actions/habits'
import { connect } from 'react-redux'


// connect - using react-redux 

export class AddHabitPage extends React.Component {
    onSubmit = (habit) => {
        this.props.startAddHabit(habit)
        this.props.history.push('/dashboard')
    }
    render () {
        return (
            <div>
                <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Add Habit</h1>
                </div>
                </div>
                <div className='content-container'>
                    <HabitForm
                        onSubmit={this.onSubmit}>
                    </HabitForm>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddHabit: (habit) => dispatch(startAddHabit(habit))
})

export default connect(undefined, mapDispatchToProps)(AddHabitPage)