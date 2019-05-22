import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import HabitListItemDate from './HabitListItemDate'

const HabitListItem = ({id, name, description, frequency, createdAt, tag, endDate, chain, dates}) => (
    <Link 
        className='list-item' to ={`/edit/${id}`}>
        <div>
            <h3 className='list-item__title'>{name}</h3>
            <div className='list-body'>
            {
                // Doesnt work for new Habit Add as there is no dates field 
                // May be adding empty date 
                    dates.length === 0 ? (
                    <div className='list-item list-item__message'>
                        <span>No Habits</span>
                    </div>
                ) : (
                    dates.map((date) => {
                        return <HabitListItemDate key={date.id} {...date} />
                       //return <p>Found Date</p>
                       //return <p>{date.trackedOn}</p>
                    })
                )
            }
            </div>
        </div>
    </Link>
    
)

export default HabitListItem

/*{ props.habits.length === 0 ? (
                <div className='list-item list-item__message'>
                    <span>No Habits</span>
                </div>
            ) : (
                props.habits.map((habit) => {
                    return <HabitListItem key={habit.id} {...habit} />
                })
            )
        }


{dates.forEach(date => {
                <h4>
                    {moment(date.trackedOn).format('MMM Do, YYYY')}
                </h4>
            })*/