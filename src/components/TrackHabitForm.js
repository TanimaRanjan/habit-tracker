import React from 'react'
import moment from 'moment';

class TrackHabitForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            id:'-LXlE-5lL12gcpnBRYgL',
            selected:props.habit ? props.habit.selected : 'yes',
            trackedOn: props.habit ? moment(props.habit.trackedOn) : moment(),
            error: ''
        }
    }

    // onNameChange = (e) => {
    //     const name = e.target.value
    //     this.setState(() => ({name}))
    // }

    // onDescriptionChange = (e) => {
    //     const description = e.target.value
    //     this.setState(() => ({description}))
    // }
    
     onSelectedChange = (e) => {
         const selected = e.target.value
         this.setState(() => ({selected:selected}))
     }
    
    onSubmit = (e) => {
        e.preventDefault()
        // if(!this.state.name) {
        //     this.setState(() => ({error:'Please provide name of habit you want to track'}))
        // } else {
            console.log('Track Habit Form ', this.state.id)
            this.setState(() => ({error:''}))
            this.props.onSubmit({
                id:this.state.id,
                selected: this.state.selected,
                trackedOn:this.state.trackedOn.valueOf()
            }, 
            this.setState.id)
        // }
    }

    render () {
        return (
            <form 
                className='form'
                onSubmit={this.onSubmit} >
                    <select 
                        className='select'
                        value={this.state.selected}
                        onChange={this.onSelectedChange}
                        >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="skip">Skip</option>
                    </select>
                    <div> 
                        <button className='button-layout'>Save</button>
                    </div>
                </form>
        )
    }
}


export default TrackHabitForm;