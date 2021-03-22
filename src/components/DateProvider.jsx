import React, { createContext } from 'react'
import moment from 'moment-hijri';

const today = moment();

export const DateContext = createContext();

const HijriMonths = {
    0: 'Muharram', 
    1: 'Safar', 
    2: 'Rabi\' I',
    3: 'Rabi\' II',
    4: 'Jumada I',
    5: 'Jumada II',
    6: 'Rajab',
    7: 'Sha\'aban',
    8: 'Ramadan',
    9: 'Shawwal',
    10: 'Dhu\'l-Qi\'dah',
    11: 'Dhu\'l-Hijjah'
};
function DateProvider({ children }) {
    const todayGreg = today.format('dddd Do MMMM');
    const todayHijri = today.format(`iDo [${HijriMonths[today.iMonth()]}], iYYYY`);

    const data = {
        day: today.date(),
        month: today.month(),
        year: today.year(),
        todayGreg,
        todayHijri
    }

    return (
        <DateContext.Provider value={data}>
            {children}
        </DateContext.Provider>
    )
}

export default DateProvider
