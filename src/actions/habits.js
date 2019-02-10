import  database  from '../firebase/firebase';

// ADD HABITS
export const addHabit = (habit) => ({
    type: 'ADD_HABIT',
    habit
})


export const startAddHabit = (habitData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            name='',
            description='',
            frequency='',
            createdAt=0,
            tag='',
            endDate=0,
            chain=''
        } = habitData

        const habit = {
            name,
            description,
            frequency,
            createdAt,
            tag,
            endDate,
            chain
        }

        return database.ref(`users/${uid}/habits`).push(habit)
            .then((ref) => {
                dispatch(addHabit(
                    {
                        id:ref.key, 
                        ...habit
                    }
                ))
            }).catch((e) => {
                console.log(e)
            })
    }

}

// export const trackHabit = (id, updates) => ({
export const trackHabit = (habit,id) => ({
    type: 'TRACK_HABIT',
     id, 
    habit
})

export const startTrackHabit = (habitData,id) => {
// export const startTrackHabit = (id, updates = {}) => {
    // export const startTrackHabit = (habitData) => {
        //  
    return (dispatch, getState) => {

        //console.log("StartTrackHabit ", habitData)
        //console.log("StartTrackHabit ",id)
        const uid = getState().auth.uid
        const {
            trackedOn=0,
            selected='', 
        } = habitData

        const habitTracked = {
            trackedOn, 
            selected
        }
 
        console.log(id)
       // let ids = habitData.id
        return database.ref(`users/${uid}/habits/${id}/dates/`).push(habitTracked)
            .then((ref) => {
                dispatch(trackHabit(
                    {
                        id:ref.key, 
                        ...habitTracked
                    }, id
                ))
            }).catch((e) => {
                console.log(e)
            })
    }
}

export const removeHabit = ({id} ={}) => ({
    type:'REMOVE_HABIT',
    id
})

export const editHabit = (id, updates) => ({
    type: 'EDIT_HABIT',
    id,
    updates
})

export const startEditHabit = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/habits/${id}`).update({
            ...updates
        }).then(() => {
            dispatch((editHabit(id,updates)))
        })
    }
}

export const startRemoveHabit = ({id} = {}) => {
    return (dispatch, getState) => {
        console.log('Remove Habit')
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/habits/${id}`).remove().then(() => {
            dispatch(removeHabit({id}))
        })
    }
}


export const setHabit = (habit) => ({
    type : 'SET_HABIT',
    habit
})

export const startSetHabit = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        
        return database.ref(`users/${uid}/habits`).once('value').then((snapshot) => {
            const habits = []
            snapshot.forEach((childSnapshot) => {
                let childKey = childSnapshot.key
                let childVal = childSnapshot.val()
                let result 
                //console.log(typeof(childVal.dates), childVal.dates)
                let dateChild = childVal.dates
                if(dateChild !== undefined) {
                     result = Object.keys(dateChild).map((key)=> {
                         let dateVal = dateChild[key]
                        return {id:key, 
                            ...dateVal
                        }
                    })
                }
                //console.log(typeof(childVal))
                childVal.dates = result

                console.log(result.length)
                console.log(childVal)
                // childVal.dates.forEach((dates_child) => {
                //     let dateKey = dates_child.key
                //     let dateChildVal = dates_child.val()
                //     dates_array.push({
                //         id:dateKey,
                //         ...dateChildVal
                //     })
                // })
                //console.log('Dates Array ',dates_array )
                //console.log(childVal)
                habits.push({
                    id:childKey,
                    ...childVal
                })
                // habits.push({
                  //   id:childSnapshot.key,
                 //    ...childSnapshot.val()
                // })
            })

            dispatch(setHabit(habits))

        })
       
    }
}

/*

// database.ref(`users/${userid}/habits/${id}/dates/`).push({
    //    trackedON:6453543453,
    //   selected:'yes'
      
    // })

let userid='3VGcYAHUbSSWlglZfViybHhUWpW2'
 let id = '-LXasXWK-oC8tuBjUYMa'
 //let id ='-LXat92W8FjuUR6Jn15K'
 database.ref(`users/${userid}/habits/${id}/dates/`)
   .on('value', ((snapshot) => {
     snapshot.forEach((child) => {
       console.log(child.key, child.val())
     })
   }))*/
