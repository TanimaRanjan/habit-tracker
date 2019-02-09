import React from 'react'
import { connect } from 'react-redux'
import HabitForm from './HabitForm'
import { startEditHabit, startRemoveHabit } from '../actions/habits'


export class EditHabitPage extends React.Component {
    onSubmit = ( habit ) => {
        this.props.startEditHabit(this.props.habit.id, habit)
        this.props.history.push('/dashboard')
    }

    onRemove = () => {
        this.props.startRemoveHabit({id: this.props.habit.id})
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Edit Habit</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <HabitForm
                        habit={this.props.habit}
                        onSubmit={this.onSubmit}
                        />
                    <button className='button-layout__remove' onClick={this.onRemove}>Remove Habit</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditHabit: (id, habit) => dispatch(startEditHabit(id, habit)), 
    startRemoveHabit: (id) => dispatch(startRemoveHabit(id))
})

// const mapStateToProp = (state, props) => ({
//     habit: state.habits.find((habit) => {
//         return habit.id === props.match.params.id
//     })
// })

export default connect (undefined, mapDispatchToProps)(EditHabitPage)