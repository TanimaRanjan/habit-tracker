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

        console.log("StartTrackHabit ", habitData)
        console.log("StartTrackHabit ",id)
        const uid = getState().auth.uid
        const {
            trackedOn=0,
            selected='', 
            // idI=0
        // } = updates
        } = habitData
        const habit = {
            trackedOn, 
            selected
        }
        
         let ids='-LXlEOTpxaaWycKmdFsz'
        //let ids = id
        return database.ref(`users/${uid}/habits/${ids}/dates/`).push(habit)
            .then((ref) => {
                dispatch(trackHabit(
                    {
                        id:ref.key, 
                        ...habit
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

export const startRemoveHabit = ({id} = {}) => {
    return (dispatch, getState) => {
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
                habits.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
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
