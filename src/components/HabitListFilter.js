import React from 'react'


export class HabitListFilter extends React.Component {
    render () {
        return (
            <div>
                <input 
                    placeholder="Search Habits"
                    type="text"
                    />
            </div>
        )
    }

}

export default HabitListFilter;