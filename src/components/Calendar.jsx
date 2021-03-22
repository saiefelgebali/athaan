import React, { useContext, useEffect, useState } from 'react'
import { DateContext } from './DateProvider';

function Calendar() {
    const [loc, setLoc] = useState({});
    const [error, setError] = useState();
    const date = useContext(DateContext);
    
    return (
        <div className="calendar">
            <div className="date">{date.todayGreg}</div>
            <div className="date">{date.todayHijri}</div>
        </div>
    )
}

export default Calendar
