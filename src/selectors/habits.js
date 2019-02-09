import moment from 'moment'

// Get visible expenses 
//export default (habits, {text, sortBy, startDate, endDate}) => {
export default (habit) => {
    console.log('selector ')
    return habit;
    
   /* return habits.filter((habit) => {
        const createAtMoment = moment(habit.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment, 'day') :true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment, 'day') :true;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
        
        name='',
        description='',
        frequency='',
        createdAt=0,
        tag='',
        endDate=0,
        chain=''

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })*/ 
}
// export default getVisibleExpenses;