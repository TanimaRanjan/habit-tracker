import React from 'react'
import moment from 'moment';

class HabitForm extends React.Component {
    constructor(props) {
        super(props)
        console.log('Habit Form --- ', props)
        this.state = {
            name: props.habit ? props.habit.name : '',
            description: props.habit ? props.habit.description : '',
            chain:props.habit ? props.habit.chain : 'longest',
            createdAt: props.habit ? moment(props.habit.createdAt) : moment(),
            error: ''
        }

    }

    onNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({name}))
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }
    
    onChainChange = (e) => {
        const chain = e.target.value
        this.setState(() => ({chain:chain}))
    }
    
    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.name) {
            this.setState(() => ({error:'Please provide name of habit you want to track'}))
        } else {
            this.setState(() => ({error:''}))
            this.props.onSubmit({
                name: this.state.name,
                description:this.state.description,
                chain:this.state.chain,
                createdAt:this.state.createdAt.valueOf()
            })
        }
    }

    render () {
        return (
            <form 
                className='form'
                onSubmit={this.onSubmit} >
                    <input 
                        className='text-input'
                        type='text'
                        placeholder='Habit'
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange} 
                    ></input>            
                    <input 
                        className='text-input'
                        type='text'
                        placeholder='Description'
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    ></input>           
                    <select 
                        className='select'
                        value={this.state.chain}
                        onChange={this.onChainChange}
                        >
                        <option value="longest">Longest</option>
                        <option value="fixed">Fixed</option>
                    </select>
                    <div> 
                        <button className='button-layout'>Save</button>
                    </div>
                </form>
        )
    }
}


export default HabitForm;