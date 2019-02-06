import React from 'react'
import { Link } from 'react-router-dom'

export const  HabitSummary = () => {

        return (
            <div className='page-header'>
                <div className='content-container' >
                <h1>Habit Summary</h1>
                <div className='page-header_actions'> 
                    <Link className='button-layout' to='/create'>Add Habit</Link>
                </div> 
            </div>
            </div>
        )
}