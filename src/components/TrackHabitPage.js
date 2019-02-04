import React from 'react'
import TrackHabitForm from './TrackHabitForm'
import { startTrackHabit } from '../actions/habits'
import { connect } from 'react-redux'

export class TrackHabitPage extends React.Component {
    onSubmit = (habit)=> {
        // this.props.startTrackHabit(this.props.habit.id, habit)
        //  this.props.startTrackHabit('-LXlE-5lL12gcpnBRYgL', habit)
        console.log("Track Habit Page ", habit)
        
         this.props.startTrackHabit(habit,'-LXlE-5lL12gcpnBRYgK')

        // this.props.startTrackHabit(habit)
        // this.props.history.push('/dashboard')
    }
    render () {
        return  (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Track Habit</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <TrackHabitForm
                        onSubmit={this.onSubmit}>
                    </TrackHabitForm>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startTrackHabit: (habit, id) => dispatch(startTrackHabit(habit,id ))
})

export default connect(undefined, mapDispatchToProps)(TrackHabitPage)