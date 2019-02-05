import React from 'react'
import { HabitSummary } from './HabitSummary'
import { HabitListFilter } from './HabitListFilter'
import { HabitList } from './HabitList'

const DashBoardPage = () => (
    <div>
        <HabitSummary />
        <HabitListFilter />
        <HabitList />
    </div>
)

export default DashBoardPage;
