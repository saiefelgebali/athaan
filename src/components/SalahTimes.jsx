import React, { useContext, useEffect, useState } from 'react'
import { DateContext } from './DateProvider'

function SalahTimes() {

    const [salahTimes, setSalahTimes] = useState();

    const date = useContext(DateContext)

    useEffect(() => {
        async function getSalahTimes() {
            // Set up request
            const url = new URL('http://api.aladhan.com/v1/calendarByCity');
            url.search = new URLSearchParams({
                city: 'Cambridge',
                country: 'United Kingdom',
                method: 2, 
                month: date.month,
                year: date.year,
            })
            // Make request
            try {
                const response = await fetch(url);
                const result = await response.json();
                console.log(result)
                const timings = result.data[date.day].timings;
                setSalahTimes(timings);
            } catch {
                return new Error('Could not fetch request');
            }
        }
        getSalahTimes();
    }, []);
    
    if (salahTimes) return (
        <div className="salah-times">
            <div className="salah">
                <div className="name">Fajr</div>
                <div className="time">{salahTimes.Fajr}</div>
            </div>
            <div className="salah sunrise">
                <div className="name">Sunrise</div>
                <div className="time">{salahTimes.Sunrise}</div>
            </div>
            <div className="salah">
                <div className="name">Dhuhr</div>
                <div className="time">{salahTimes.Dhuhr}</div>
            </div>
            <div className="salah">
                <div className="name">Asr</div>
                <div className="time">{salahTimes.Asr}</div>
            </div>
            <div className="salah">
                <div className="name">Maghrib</div>
                <div className="time">{salahTimes.Maghrib}</div>
            </div>
            <div className="salah">
                <div className="name">Isha</div>
                <div className="time">{salahTimes.Isha}</div>
            </div>
        </div>
    )

    return (
        <div>
            Loading
        </div>
    )
}

export default SalahTimes
