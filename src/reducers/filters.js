import moment from 'moment'

const filterReducerDefaultState = {
    text='',
    sortByDate='date',
    startDate=moment().startOf('week'),
    endDate=moment().endOf('week')
}

const filterReducer = (start=filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER' :
            return {
                ...state, text:action.text
            }
        case 'SET_BY_DATE' :
            return {
                ...state, sortBy:'date'
            }
        case 'SET_BY_NAME' :
            return {
                ...state, sortByName:'name'
            }
        case 'SET_START_DATE' :
            return {
                ...state, startDate:action.startDate
            }
        case 'SET_END_DATE' :
            return {
                ...state, endDate:action.endDate
            }
        default: {
            return state
        }
    }
}

export default filterReducer;