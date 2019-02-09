import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'


const HabitListItemDate = ({id, selected, trackedOn}) => (
      //  selected === 'yes' ? 
       //   (  
              <span><b>{moment(trackedOn).format('MM/DD/YYYY')}</b></span>
              //)
      //      :
     //    (  <span>{moment(trackedOn).format('MM/DD/YYYY')}</span>)
         
    
)

export default HabitListItemDate

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