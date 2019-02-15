import React from 'react'
import { connect } from 'react-redux';
import selectHabits from '../selectors/habits'
import HabitListItem from './HabitListItem';

export const HabitList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-for-mobile'>Habits</div>
            <div className='show-for-desktop'>Habit</div>
            <div className='show-for-desktop'>Days</div>
        </div>
        <div className='list-body'>
        {
            props.habits.length === 0 ? (
                <div className='list-item list-item__message'>
                    <span>No Habits</span>
                </div>
            ) : (
                props.habits.map((habit) => {
                    return <HabitListItem key={habit.id} {...habit} />
                })
            )
        }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        habits : selectHabits(state.habit)
    }
}
export default connect(mapStateToProps)(HabitList)